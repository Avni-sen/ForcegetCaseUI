export enum LengthUnitEnum {
    CM = 1, // Santimetre
    IN = 2  // İnç
}

//label mapping yaz 

export const LengthUnitEnumLabelMapping: Record<LengthUnitEnum, string> = {
    [LengthUnitEnum.CM]: 'CM',
    [LengthUnitEnum.IN]: 'IN'
}