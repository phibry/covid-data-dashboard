export type openDataSwissCovidContext = {
  sourceDate: string;
  dataVersion: string;
};

export type openDataSwissCovidData = {
  geoRegion: string;
  datum: string;
  entries_diff_last: number;
  entries_diff_last_age: number;
  sumTotal: number;
};

export type openDataSwissCovidHospCapacity = {
  geoRegion: string;
  datum: string;
  ICU_Covid19Patients: number;
  ICUPercent_Covid19Patients: number;
  TotalPercent_Covid19Patients: number;
  Total_Covid19Patients: number;
};

export type openDataSwissCovidTotals = {
  currentCase: openDataSwissCovidData;
  currentHosp: openDataSwissCovidData;
  currentDeaths: openDataSwissCovidData;
  currentHospCapacity: openDataSwissCovidHospCapacity;
};
