export interface Forecast {
  address: string;
  alerts: any[];
  currentConditions: any;
  days: any[];
  description: string;
  latitude: number;
  longitude: number;
  queryCost: number;
  resolvedAddress: string;
  stations: {LYBT: any; LYBE: any; LDOS: any};
  timezone: string;
  tzoffset: number;
}
