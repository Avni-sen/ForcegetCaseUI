import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { OfferDto } from 'src/app/models/dtos/offer-dto';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {

  offerList: any[] = []
  listOfColumn = [
    {
      title: 'City Name',
      compare: (a: OfferDto, b: OfferDto) => a.cityName.localeCompare(b.cityName),
      priority: 1
    },
    {
      title: 'Country Name',
      compare: (a: OfferDto, b: OfferDto) => a.countryName.localeCompare(b.countryName),
      priority: 2
    },
    {
      title: 'Currency Name',
      compare: (a: OfferDto, b: OfferDto) => a.currencyName.localeCompare(b.currencyName),
      priority: 3
    },
    {
      title: 'Incoterm Name',
      compare: (a: OfferDto, b: OfferDto) => a.incotermName.localeCompare(b.incotermName),
      priority: 4
    },
    {
      title: 'Mode Name',
      compare: (a: OfferDto, b: OfferDto) => a.modeName.localeCompare(b.modeName),
      priority: 2
    },
    {
      title: 'Movement Type Name',
      compare: (a: OfferDto, b: OfferDto) => a.movementTypeName.localeCompare(b.movementTypeName),
      priority: 8
    },
    {
      title: 'Package Type Name',
      compare: (a: OfferDto, b: OfferDto) => a.packageTypeName.localeCompare(b.packageTypeName),
      priority: 9
    },
    {
      title: 'Length Unit',
      compare: (a: OfferDto, b: OfferDto) => a.lengthUnit.localeCompare(b.lengthUnit),
      priority: 5
    },
    {
      title: 'Weight Unit',
      compare: (a: OfferDto, b: OfferDto) => a.weightUnit.localeCompare(b.weightUnit),
      priority: 7
    },
  ];
  constructor(private baseService: BaseService) { }

  ngOnInit() {
    this.getOfferDtos();

  }

  getOfferDtos() {
    this.baseService.getOfferDtos().subscribe((data: OfferDto[]) => {
      this.offerList = data;
      console.log(this.offerList);

    });
  }
}
