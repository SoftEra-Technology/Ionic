import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenAuditPage } from './open-audit.page';

describe('OpenAuditPage', () => {
  let component: OpenAuditPage;
  let fixture: ComponentFixture<OpenAuditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenAuditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenAuditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
