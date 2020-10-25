// angular
import { Component, OnInit } from '@angular/core';

// sevices
import { CompanyService } from './../../services/company.service';

// model
import { Company } from './../../models/company.model';

// rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent implements OnInit {
  companies: Observable<Company[]>;

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.companies = this.companyService.getAll();
  }

  remove(key: string): void {
    this.companyService.delete(key);
  }
}
