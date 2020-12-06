import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QuestionCommentPage } from './question-comment.page';

describe('QuestionCommentPage', () => {
  let component: QuestionCommentPage;
  let fixture: ComponentFixture<QuestionCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionCommentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QuestionCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
