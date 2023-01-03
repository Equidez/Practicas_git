import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GitPageRoutingModule } from './git-routing.module';

import { GitPage } from './git.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GitPageRoutingModule
  ],
  declarations: [GitPage]
})
export class GitPageModule {}
