export interface ICountry {
  id: number;
  flags: { svg: string; png: string };
  population: number;
  capital: string[];
  name: {
    common: string;
    nativeName: { [key: string]: { common: string; official: string } };
  };
  region: string;
  subregion: string;
  cioc: string;
  tld: string[];
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: { [key: string]: string };
  borders: string[];
}
