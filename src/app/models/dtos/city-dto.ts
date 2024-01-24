import { City } from "../city";

export interface CityDto extends City {
    countryName: string;
}
