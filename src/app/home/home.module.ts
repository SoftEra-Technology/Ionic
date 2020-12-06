import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {FormGroup,FormControl} from '@angular/forms'
import { HomePage } from './home.page';



import {FormBuilder} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { Network } from '@ionic-native/network/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
   
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage],
  providers: [Network]
})
export class HomePageModule {}
