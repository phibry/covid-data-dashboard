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
