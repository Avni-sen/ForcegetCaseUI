import { Offer } from "../offer";

export interface OfferDto extends Offer {
    countryName: string;
    cityName: string;
    modeName: string;
    currencyName: string;
    incotermName: string;
    movementTypeName: string;
    packageTypeName: string;
    lengthUnit: string;
    weightUnit: string;
}
