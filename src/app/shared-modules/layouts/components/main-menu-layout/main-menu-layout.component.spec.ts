import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuLayoutComponent } from './main-menu-layout.component';

describe('MainMenuLayoutComponent', () => {
  let component: MainMenuLayoutComponent;
  let fixture: ComponentFixture<MainMenuLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenuLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenuLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
