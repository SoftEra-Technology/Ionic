import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListAuditPage } from './list-audit.page';

const routes: Routes = [
  {
    path: '',
    component: ListAuditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAuditPageRoutingModule {}
