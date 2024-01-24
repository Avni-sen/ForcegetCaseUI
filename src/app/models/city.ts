import { BaseEntity } from "./baseEntity";

export interface City extends BaseEntity {
    name: string;
    countryId: number;
}

