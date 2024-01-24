import { BaseEntity } from "./baseEntity";

export interface Offer extends BaseEntity {
    modeId?: number;
    movementTypeId?: number;
    incotermId?: number;
    countryId?: number;
    cityId?: number;
    packageTypeId?: number;
    currencyId?: number;
    lengthUnitId?: number;
    weightUnitId?: number;
}
