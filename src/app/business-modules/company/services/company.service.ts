// angular
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

// rxjs
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

// models
import { Company } from './../models/company.model';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private collectionName = 'company';

  private database: AngularFireList<Company> = null;
  constructor(private db: AngularFireDatabase) {
    this.database = this.db.list<Company>(this.collectionName);
  }

  getAll(): Observable<Company[]> {
    return this.database
      .snapshotChanges()
      .pipe(
        map((changes) =>
          changes.map(
            (c) => ({ key: c.payload.key, ...c.payload.val() } as Company),
          ),
        ),
      );
  }

  getByKey(key: string): Observable<Company> {
    return this.getAll().pipe(
      map((companies) => companies.find((c) => c.key === key)),
    );
  }

  insert(company: Company): firebase.database.ThenableReference {
    return this.database.push(company);
  }

  update(company: Company): Observable<void> {
    return from(this.database.update(company.key, company));
  }

  delete(key: string): Observable<void> {
    return from(this.database.remove(key));
  }
}
