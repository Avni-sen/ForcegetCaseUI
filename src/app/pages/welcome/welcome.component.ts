import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CityDto } from 'src/app/models/dtos/city-dto';
import { Incoterm } from 'src/app/models/incoterm';
import { Mode } from 'src/app/models/mode';
import { MovementType } from 'src/app/models/movementType';
import { PackageType } from 'src/app/models/packageType';
import { BaseService } from 'src/app/services/base.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LookUp } from 'src/app/models/look-up';
import { LengthUnitEnum, LengthUnitEnumLabelMapping } from 'src/app/models/enums/length-unit.enum';
import { WeigthUnitEnum, WeigthUnitEnumLabelMapping } from 'src/app/models/enums/weigth-unit.enum';
import {
  AbstractControl,
  NonNullableFormBuilder,
  ValidatorFn,
} from '@angular/forms';

import { ViewEncapsulation } from '@angular/core';

import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { Offer } from 'src/app/models/offer';
import { Observable, map, startWith } from 'rxjs';
import { AutocompleteDataSource, AutocompleteDataSourceItem } from 'ng-zorro-antd/auto-complete';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, AfterViewInit {
  modeList: Mode[] = [];
  citiesDtoList: CityDto[] = [];
  currencyList: Currency[] = [];
  packageTypeList: PackageType[] = [];
  movementTypeList: MovementType[] = [];
  incotermList: Incoterm[] = [];

  lengthUnitList: LookUp[] = []

  myForm: FormGroup;
  weigthUnitList: LookUp[] = []
  success: boolean = false;
  error: boolean = false;
  filteredOptions: Observable<any[]>; // Filtered options tipinizi burada tanımlayın.



  constructor(private fb: NonNullableFormBuilder, private baseService: BaseService) { }

  ngOnInit() {
    this.createFormGroups();

    this.lengthUnitList.push(
      { id: LengthUnitEnum.CM, label: LengthUnitEnumLabelMapping[LengthUnitEnum.CM] },
      { id: LengthUnitEnum.IN, label: LengthUnitEnumLabelMapping[LengthUnitEnum.IN] },
    )
    this.weigthUnitList.push(
      { id: WeigthUnitEnum.KG, label: WeigthUnitEnumLabelMapping[WeigthUnitEnum.KG] },
      { id: WeigthUnitEnum.LB, label: WeigthUnitEnumLabelMapping[LengthUnitEnum.IN] },
    )
  }

  ngAfterViewInit() {
    this.getModes();
    this.getCitiesDto();
    this.getCurrencies();
    this.getPackageTypes();
    this.getMovementTypes();
    this.getIncoterms();
    this.getCitiesDto();
  }

  getModes() {
    this.baseService.getModes().subscribe(data => {
      this.modeList = data;
    })
  }
  getCitiesDto() {
    this.baseService.getCitiesDto().subscribe(data => {
      this.citiesDtoList = data;
      this.filteredOptions = this.myForm.controls['cityId'].valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
    })
  }
  _filter(value: string): AutocompleteDataSourceItem[] | any {
    const filterValue = value;
    return this.citiesDtoList.filter(option => option.countryName.toLowerCase().includes(filterValue));
  }

  getCurrencies() {
    this.baseService.getCurrencies().subscribe(data => {
      this.currencyList = data;
    })
  }

  getPackageTypes() {
    this.baseService.getPackageTypes().subscribe(data => {
      this.packageTypeList = data;
    })
  }

  getMovementTypes() {
    this.baseService.getMovementTypes().subscribe(data => {
      this.movementTypeList = data;
    })
  }

  getIncoterms() {
    this.baseService.getIncoterms().subscribe(data => {
      this.incotermList = data;
    })
  }

  createFormGroups() {
    this.myForm = this.fb.group({
      id: [0],
      modeId: [null, Validators.required],
      movementTypeId: [null, Validators.required],
      incotermId: [null, Validators.required],
      cityId: [null, Validators.required],
      packageTypeId: [null, Validators.required],
      currencyId: [null, Validators.required],
      lengthUnitId: [null, Validators.required],
      weightUnitId: [null, Validators.required]
    });
  }


  clearFormGroups(group: FormGroup) {
    group.markAsUntouched();
    group.reset();

    Object.keys(group.controls).forEach(key => {
      group.get(key)?.setErrors(null);
      if (key == 'id')
        group.get(key)?.setValue(0);
      else if (key == 'modeId')
        group.get(key)?.setValue(null);
      else if (key == 'movementTypeId')
        group.get(key)?.setValue(null);
      else if (key == 'incotermId')
        group.get(key)?.setValue(null);
      else if (key == 'countryId')
        group.get(key)?.setValue(null);
      else if (key == 'cityId')
        group.get(key)?.setValue(null);
      else if (key == 'packageTypeId')
        group.get(key)?.setValue(null);
      else if (key == 'currencyId')
        group.get(key)?.setValue(null);
      else if (key == 'lengthUnitId')
        group.get(key)?.setValue(null);
      else if (key == 'weightUnitId')
        group.get(key)?.setValue(null);
      else if (key == 'isDeleted')
        group.get(key)?.setValue(false);
      else if (key == 'createdDate')
        group.get(key)?.setValue(new Date());
      else if (key == 'lastUpdatedDate')
        group.get(key)?.setValue(new Date());
    })

  }

  submitForm() {
    if (this.myForm.valid) {

      let countryId = this.myForm.get('cityId')?.value.countryId;
      let cityId = this.myForm.get('cityId')?.value.id;
      let modeId = this.myForm.get('modeId')?.value;
      let movementTypeId = this.myForm.get('movementTypeId')?.value;
      let incotermId = this.myForm.get('incotermId')?.value;
      let packageTypeId = this.myForm.get('packageTypeId')?.value;
      let currencyId = this.myForm.get('currencyId')?.value;
      let lengthUnitId = this.myForm.get('lengthUnitId')?.value;
      let weightUnitId = this.myForm.get('weightUnitId')?.value;


      let offer: Offer = {
        id: 0,
        countryId: countryId,
        cityId: cityId,
        modeId: modeId,
        movementTypeId: movementTypeId,
        incotermId: incotermId,
        packageTypeId: packageTypeId,
        currencyId: currencyId,
        lengthUnitId: lengthUnitId,
        weightUnitId: weightUnitId,
        isDeleted: false,
        createdDate: new Date(),
        lastUpdatedDate: new Date()
      }

      console.log(offer);


      this.baseService.AddOffer(offer).subscribe((data) => {
        this.success = true;
        this.clearFormGroups(this.myForm);
        setTimeout(() => {
          this.success = false;
        }, 3000);
      }, (error) => {
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      });
    } else if (this.myForm.invalid) {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
    }
  }

  afterClose() {
  }

  onSelect(event: any) {
    this.myForm.get('cityId')?.setValue(event.countryName + ' - ' + event.name);
  }
}
