import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { ErrorComponent } from '../error/error.component';

import { ExitComponent } from './exit.component';

describe('ExitComponent', () => {
  let component: ExitComponent;
  let fixture: ComponentFixture<ExitComponent>;
  let service: SharedDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitComponent ],
      imports: [ RouterTestingModule.withRoutes([
        { path: 'error', component: ErrorComponent }
      ])  
     ],
      providers: [ SharedDataService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitComponent);
    service = TestBed.inject(SharedDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the method validate value quantity', () => {
    spyOn(component, 'checkLength');

    component.buildTableStatic(['1', '2', '3', '4']);
    expect(component.checkLength).toHaveBeenCalled();
  });

  it('should call the method that creates rows and columns', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableStatic(['1', '2', '3', '4']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should create table with 4 numbers', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should create table with 6 numbers', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4', '5', '6']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should create table with 8 numbers', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4', '5', '6', '7', '8']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should create table with 9 numbers', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should create Table', () => {
    const response = component.createTable();
    expect(response).toBeTruthy();
  });

  it('should navigate', () => {
    spyOn(service, 'clearValue');
    component.navigateBack();
  
    expect(service.clearValue).toHaveBeenCalled();
  });

  it('should create Row and Column rotation', () => {
    component.createRowAndColumnDOM(8, 4, 'body-rotation', true);
  
    expect(component.createRowAndColumnDOM).toBeTruthy();
  });

  it('should create Row and Column origin', () => {
    component.createRowAndColumnDOM(1, 1, 'body-static', true);
  
    expect(component.createRowAndColumnDOM).toBeTruthy();
  });

});
