import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataService } from 'src/app/service/shared-data.service';
import { ExitComponent } from '../exit/exit.component';

import { EntryComponent } from './entry.component';

describe('EntryComponent', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;
  let service: SharedDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryComponent ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'exit', component: ExitComponent }
        ]) 
      ],
      providers: [ SharedDataService ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryComponent);
    service = TestBed.inject(SharedDataService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should save the values in the service', () => {
    component.value = '1,2,3,4';   
    component.saveData();

    const responseService = service.getValue();
    expect(responseService).toEqual(['1', '2', '3', '4'])
  });

  it('should test the navigate', () => {
    spyOn(component, 'saveData');

    component.navigate();
    expect(component.saveData).toHaveBeenCalled();
  });
});
