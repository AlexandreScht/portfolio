type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type TwoDigits = `${Digit}${Digit}`;
export type fromYear = `20${TwoDigits}`;
export type toYear = `20${TwoDigits}` | 'Présent';
