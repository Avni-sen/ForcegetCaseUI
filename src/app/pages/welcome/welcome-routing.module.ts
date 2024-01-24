import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { OfferListComponent } from '../offer-list/offer-list.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'offer-list', component: OfferListComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WelcomeRoutingModule { }
