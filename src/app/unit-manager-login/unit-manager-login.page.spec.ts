import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnitManagerLoginPage } from './unit-manager-login.page';

describe('UnitManagerLoginPage', () => {
  let component: UnitManagerLoginPage;
  let fixture: ComponentFixture<UnitManagerLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitManagerLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnitManagerLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
