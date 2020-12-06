import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { UnitManagerLoginPage } from './unit-manager-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [UnitManagerLoginPage]
  ,
  entryComponents: [UnitManagerLoginPage]
})
export class UnitManagerLoginPageModule {}
