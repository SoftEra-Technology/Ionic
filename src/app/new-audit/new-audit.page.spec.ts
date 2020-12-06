import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewAuditPage } from './new-audit.page';

describe('NewAuditPage', () => {
  let component: NewAuditPage;
  let fixture: ComponentFixture<NewAuditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewAuditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
