import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { OfferListComponent } from '../offer-list/offer-list.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  imports: [WelcomeRoutingModule, NzLayoutModule, FormsModule,
    ReactiveFormsModule,
    NzSelectModule, CommonModule, NzAlertModule, NzAutocompleteModule, NzTableModule, NzDividerModule],
  declarations: [WelcomeComponent, OfferListComponent],
  exports: [WelcomeComponent, OfferListComponent]
})
export class WelcomeModule { }
