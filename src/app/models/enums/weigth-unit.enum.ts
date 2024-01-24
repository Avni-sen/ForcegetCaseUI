
export enum WeigthUnitEnum {
    KG = 1, // Kilogram
    LB = 2  // Pound
}

//label mapping yaz 

export const WeigthUnitEnumLabelMapping: Record<WeigthUnitEnum, string> = {
    [WeigthUnitEnum.KG]: 'KG',
    [WeigthUnitEnum.LB]: 'LB'
}