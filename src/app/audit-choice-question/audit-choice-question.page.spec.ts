import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AuditChoiceQuestionPage } from './audit-choice-question.page';

describe('AuditChoiceQuestionPage', () => {
  let component: AuditChoiceQuestionPage;
  let fixture: ComponentFixture<AuditChoiceQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditChoiceQuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AuditChoiceQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
