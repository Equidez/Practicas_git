import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitPage } from './git.page';

const routes: Routes = [
  {
    path: '',
    component: GitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GitPageRoutingModule {}
