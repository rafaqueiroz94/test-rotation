import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedDataService } from 'src/app/service/shared-data.service';

import { ErrorComponent } from './error.component';

describe('ErrorComponent', () => {
  let component: ErrorComponent;
  let fixture: ComponentFixture<ErrorComponent>;
  let service: SharedDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorComponent ],
      imports: [ RouterTestingModule ],
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

  // it('shold ', () => {
  //   spyOn(component, 'tips');

  //   service.values[1],[2],[3]
  //   service.getValue
  //   component.tips();

  //   expect(component.tipsText).toBe('Tente inserir uma quantidade de números, maior que 03, separados por vírgula Ex: 1,2,3,4')
  // });
});
