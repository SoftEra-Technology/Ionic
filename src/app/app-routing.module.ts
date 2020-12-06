import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'dash-board',
    loadChildren: () => import('./dash-board/dash-board.module').then( m => m.DashBoardPageModule)
  },
  {
    path: 'new-audit',
    loadChildren: () => import('./new-audit/new-audit.module').then( m => m.NewAuditPageModule)
  },
  {
    path: 'list-audit',
    loadChildren: () => import('./list-audit/list-audit.module').then( m => m.ListAuditPageModule)
  },
  {
    path: 'close-audit',
    loadChildren: () => import('./close-audit/close-audit.module').then( m => m.CloseAuditPageModule)
  },
  {
    path: 'open-audit',
    loadChildren: () => import('./open-audit/open-audit.module').then( m => m.OpenAuditPageModule)
  },
  {
    path: 'audit-choice-question',
    loadChildren: () => import('./audit-choice-question/audit-choice-question.module').then( m => m.AuditChoiceQuestionPageModule)
  },
  
  // {
  //   path: 'question-comment',
  //   loadChildren: () => import('./question-comment/question-comment.module').then( m => m.QuestionCommentPageModule)
  // },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
