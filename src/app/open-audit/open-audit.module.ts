import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenAuditPageRoutingModule } from './open-audit-routing.module';

import { OpenAuditPage } from './open-audit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenAuditPageRoutingModule
  ],
  declarations: [OpenAuditPage]
})
export class OpenAuditPageModule {}
