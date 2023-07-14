export interface Country {
  id: number;
  flags: { svg: string };
  population: number;
  capital: string[];
  name: { common: string };
  region: string;
  cioc: string;
}
