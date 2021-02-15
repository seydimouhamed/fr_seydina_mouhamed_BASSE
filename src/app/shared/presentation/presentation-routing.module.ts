import { AllItemComponent } from './allItem/allItem.component';
import { ItemComponent } from './item/item.component';
import { PresentationComponent } from './presentation.component';
import { RouterModule, Routes } from '@angular/router';
import { Injectable, NgModule } from '@angular/core';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path: '', component: PresentationComponent, children: [
    {path: '', component: AllItemComponent},
    {path: 'details/:id', component: DetailsComponent},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule {
}
