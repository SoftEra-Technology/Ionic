import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';



import { QuestionCommentPage } from './question-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    
  ],
  declarations: [QuestionCommentPage],
  entryComponents: [QuestionCommentPage]
})
export class QuestionCommentPageModule {}
