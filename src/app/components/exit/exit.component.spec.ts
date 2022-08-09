import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataService } from 'src/app/service/shared-data.service';

import { ExitComponent } from './exit.component';

describe('ExitComponent', () => {
  let component: ExitComponent;
  let fixture: ComponentFixture<ExitComponent>;
  let service: SharedDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExitComponent ],
      imports: [ RouterTestingModule ],
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

  it('should 4', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should 6', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4', '5', '6']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should 8', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4', '5', '6', '7', '8']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });

  it('should 9', () => {
    spyOn(component, 'createRowAndColumnDOM');

    component.buildTableRotation(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    expect(component.createRowAndColumnDOM).toHaveBeenCalled();
  });


});
