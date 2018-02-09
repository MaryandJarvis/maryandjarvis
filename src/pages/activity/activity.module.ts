import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Activity } from './activity';

@NgModule({
  declarations: [
    Activity,
  ],
  imports: [
    IonicPageModule.forChild(Activity),
  ],
})
export class ActivityModule {}