import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { EntryComponent } from '../entry/entry.component';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let service: SharedDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      imports: [ RouterTestingModule.withRoutes([
        { path: '', component: EntryComponent }
      ])  
    ],
      providers: [ SharedDataService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorComponent);
    service = TestBed.inject(SharedDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shold return error message with 0 numbers entered', () => {
    const response = component.message(0);
    expect(response).toBe('Campo vazio! Insira algum valor.');
  });

  it('shold return error message with 2 numbers entered', () => {
    const response = component.message(2);
    expect(response).toBe('Tente inserir uma quantidade de números, maior que 03, separados por vírgula Ex: 1,2,3,4');
  });

  it('shold return error message with 3 numbers entered', () => {
    const response = component.message(3);
    expect(response).toBe('Tente inserir uma quantidade de números, maior que 03, separados por vírgula Ex: 1,2,3,4');
  });

  it('shold return error message with 5 numbers entered', () => {
    const response = component.message(5);
    expect(response).toBe('Tente inserir uma quantidade de números, que sejam múltiplos de 2 ou 3, separados por vírgula Ex: 1,2,3,4,5,6');
  });

  it('shold return error message with 7 numbers entered', () => {
    const response = component.message(7);
    expect(response).toBe('Tente inserir uma quantidade de números, que sejam múltiplos de 2 ou 3, separados por vírgula Ex: 1,2,3,4,5,6');
  });

  it('should return error message with more than 10 numbers entered', () => {
    const response = component.message(10);
    expect(response).toBe('Tente inserir uma quantidade de números, menor que 10, separados por vírgula Ex: 1,2,3,4,5,6,7,8,9');
  });

  it('should return and clear data', () => {
    spyOn(service, 'clearValue');
    component.navigateBack();

    expect(service.clearValue).toHaveBeenCalled();
  });



});
