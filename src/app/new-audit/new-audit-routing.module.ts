import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewAuditPage } from './new-audit.page';

const routes: Routes = [
  {
    path: '',
    component: NewAuditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewAuditPageRoutingModule {}
