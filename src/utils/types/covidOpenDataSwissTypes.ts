export type openDataSwissCovidContext = {
  sourceDate: string;
  dataVersion: string;
};

export type openDataSwissCovidData = {
  geoRegion: string;
  datum: string;
  entries: number;
  entries_letzter_stand: number;
  entries_neu_gemeldet: number;
  entries_diff_last: number;
  entries_diff_last_age: number;
  sumTotal: number;
};

export type openDataSwissCovidVacc = {
  age_group: string;
  date: string;
  geoRegion: string;
  per100PersonsTotal: number;
  pop: number;
  sumTotal: number;
  type: string;
};

export type openDataSwissCovidHospCapacity = {
  geoRegion: string;
  datum: string;

  ICU_AllPatients: number;
  ICU_Covid19Patients: number;
  ICU_NonCovid19Patients: number;
  ICU_FreeCapacity: number;
  ICU_Capacity: number;

  ICUPercent_AllPatients: number;
  ICUPercent_Covid19Patients: number;
  ICUPercent_NonCovid19Patients: number;
  ICUPercent_FreeCapacity: number;
  ICUPercent_Capacity: number;

  Total_AllPatients: number;
  Total_Covid19Patients: number;
  Total_NonCovid19Patients: number;
  Total_FreeCapacity: number;
  Total_Capacity: number;

  TotalPercent_AllPatients: number;
  TotalPercent_Covid19Patients: number;
  TotalPercent_NonCovid19Patients: number;
  TotalPercent_FreeCapacity: number;
  TotalPercent_Capacity: number;
};

export type openDataSwissCovidTotals = {
  currentCase: openDataSwissCovidData;
  currentHosp: openDataSwissCovidData;
  currentDeaths: openDataSwissCovidData;
  currentHospCapacity: openDataSwissCovidHospCapacity;
};
