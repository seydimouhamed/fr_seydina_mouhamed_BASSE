import { PromoPrincipaleResolveService } from './promo-resolver.service';
import { ApprenantpromoComponent } from './apprenantpromo/apprenantpromo.component';
import { PromoComponent } from './promo.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [{
  path: '', component: PromoComponent, children: [
    // {path: '', redirectTo: 'add', pathMatch: 'full'},
    {path: '', component: ListComponent},
    {path: 'list', component: ListComponent},
    {path: 'add', component: AddComponent},
    {path: 'add/apprenants', component: ApprenantpromoComponent},
    {path: 'details/:id', component: DetailsComponent, resolve: {promoprinc: PromoPrincipaleResolveService}},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PromoRoutingModule { }
