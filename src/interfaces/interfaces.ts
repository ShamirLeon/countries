export interface IContext {
    countries: ICountry[];
    countriesWithOffset: ICountry[];
    regions: IContinents;
    selectedRegion: string | null;
    darkMode: boolean;
    loading: boolean;
    error: unknown;
    toggleDarkMode: () => void;
    loadMoreCountries: () => void;
    getCountriesByRegion: (region: string | null) => void;
    setSelectedRegion: (region: string | null) => void;
    getCountriesByName: (name: string) => void;
    clearCountries: () => void;
}

export interface ICountry {
    name:         IName;
    tld?:         string[];
    cca2:         string;
    ccn3?:        string;
    cca3:         string;
    independent?: boolean;
    status:       IStatus;
    unMember:     boolean;
    currencies?:  { [key: string]: ICurrency };
    idd:          IIdd;
    capital?:     string[];
    altSpellings: string[];
    region:       IRegion;
    languages?:   { [key: string]: string };
    translations: { [key: string]: ITranslation };
    latlng:       number[];
    landlocked:   boolean;
    area:         number;
    demonyms?:    IDemonyms;
    flag:         string;
    maps:         IMaps;
    population:   number;
    car:          ICar;
    timezones:    string[];
    continents:   IContinent[];
    flags:        IFlags;
    coatOfArms:   ICoatOfArms;
    startOfWeek:  IStartOfWeek;
    capitalInfo:  ICapitalInfo;
    cioc?:        string;
    subregion?:   string;
    fifa?:        string;
    borders?:     string[];
    gini?:        { [key: string]: number };
    postalCode?:  IPostalCode;
}

export interface ICapitalInfo {
    latlng?: number[];
}

export interface ICar {
    signs?: string[];
    side:   ISide;
}

export enum ISide {
    Left = "left",
    Right = "right",
}

export interface ICoatOfArms {
    png?: string;
    svg?: string;
}

export enum IContinent {
    Africa = "Africa",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
    Americas = "Americas"
}

export type IContinents = IContinent[];

export interface ICurrency {
    name:   string;
    symbol: string;
}

export interface IDemonyms {
    eng:  IEng;
    fra?: IEng;
}

export interface IEng {
    f: string;
    m: string;
}

export interface IFlags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface IIdd {
    root?:     string;
    suffixes?: string[];
}

export interface IMaps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface IName {
    common:      string;
    official:    string;
    nativeName?: { [key: string]: ITranslation };
}

export interface ITranslation {
    official: string;
    common:   string;
}

export interface IPostalCode {
    format: string;
    regex?: string;
}

export enum IRegion {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum IStartOfWeek {
    Monday = "monday",
    Saturday = "saturday",
    Sunday = "sunday",
}

export enum IStatus {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
