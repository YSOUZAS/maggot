// angular
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material/core';
import { Location } from '@angular/common';

// until-destroy
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

// rxjs
import { map } from 'rxjs/operators';

// sevices
import { CompanyService } from './../../services/company.service';

// model
import { Company } from './../../models/company.model';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null,
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@UntilDestroy()
@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'c-companyEdit' },
})
export class CompanyEditComponent implements OnInit {
  editForm: FormGroup;
  company: Company;
  matcher: MyErrorStateMatcher;

  title: string = 'Cadastar';
  isLoading = true;

  constructor(
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    protected activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.company = {} as Company;
    this.subscribeRouteData();
    this.initFormGroup();
  }

  submit(): void {
    if (!this.editForm.valid) {
      return;
    }

    const newCompany = {
      name: this.editForm.get('name').value,
      endereco: this.editForm.get('endereco').value,
      cep: this.editForm.get('cep').value,
      municipio: this.editForm.get('municipio').value,
      distrito: this.editForm.get('distrito').value,
      contribuinte: this.editForm.get('contribuinte').value,
      email: this.editForm.get('email').value,
      telemovel: this.editForm.get('telemovel').value,
    } as Company;

    if (this.company.key) {
      newCompany.key = this.company.key;
      this.companyService.update(newCompany);
    } else {
      this.companyService.insert(newCompany);
    }

    this.location.back();
  }

  cancel(): void {
    this.location.back();
  }

  private subscribeRouteData(): void {
    this.activatedRoute.paramMap
      .pipe(
        untilDestroyed(this),
        map((paramMap) => {
          return paramMap.get('key');
        }),
      )
      .subscribe((key) => {
        if (key) {
          this.companyService
            .getByKey(key)
            .pipe(untilDestroyed(this))
            .subscribe((company) => {
              this.company = company;
              this.initFormGroup();
              this.isLoading = false;
              this.title = 'Editar';
              this.cd.detectChanges();
            });
        } else {
          this.isLoading = false;
        }
      });
  }

  private initFormGroup(): void {
    this.editForm = this.formBuilder.group({
      name: [this.company.name, [Validators.required]],
      endereco: [this.company.endereco, [Validators.required]],
      cep: [this.company.cep, [Validators.required]],
      municipio: [this.company.municipio, [Validators.required]],
      distrito: [this.company.distrito, [Validators.required]],
      contribuinte: [this.company.contribuinte, [Validators.required]],
      email: [this.company.email, [Validators.required]],
      telemovel: [this.company.telemovel, [Validators.required]],
    });

    this.matcher = new MyErrorStateMatcher();
    this.cd.detectChanges();
  }
}
