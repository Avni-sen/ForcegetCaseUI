import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroments.dev';
import { Mode } from '../models/mode';
import { City } from '../models/city';
import { CityDto } from '../models/dtos/city-dto';
import { Country } from '../models/country';
import { MovementType } from '../models/movementType';
import { PackageType } from '../models/packageType';
import { Incoterm } from '../models/incoterm';
import { Offer } from '../models/offer';
import { OfferDto } from '../models/dtos/offer-dto';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private httpClient: HttpClient) { }

  getModes(): Observable<Mode[]> {
    return this.httpClient.get<Mode[]>(environment.apiUrl + 'Mode/getall');
  }

  getCurrencies(): Observable<City[]> {
    return this.httpClient.get<City[]>(environment.apiUrl + 'Currency/getall');
  }

  getPackageTypes(): Observable<PackageType[]> {
    return this.httpClient.get<PackageType[]>(environment.apiUrl + 'PackageType/getall');
  }

  getMovementTypes(): Observable<MovementType[]> {
    return this.httpClient.get<MovementType[]>(environment.apiUrl + 'MovementType/getall');
  }

  getIncoterms(): Observable<Incoterm[]> {
    return this.httpClient.get<Incoterm[]>(environment.apiUrl + 'Incoterm/getall');
  }

  getCountry(): Observable<Country[]> {
    return this.httpClient.get<Country[]>(environment.apiUrl + 'Country/getall');
  }

  getCitiesDto(): Observable<CityDto[]> {
    return this.httpClient.get<CityDto[]>(environment.apiUrl + 'City/getalldto');
  }

  AddOffer(offer: Offer): Observable<any> {
    return this.httpClient.post<any>(environment.apiUrl + 'Offer/add', offer);
  }

  getOfferDtos(): Observable<OfferDto[]> {
    return this.httpClient.get<OfferDto[]>(environment.apiUrl + 'Offer/getdtos');
  }

}
