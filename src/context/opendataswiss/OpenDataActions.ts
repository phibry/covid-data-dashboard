// utils
import { getCurrentDateFormatted } from '../../utils/dateHelper';

const OPENSWISSDATA_CONTEXT_URL =
  'https://www.covid19.admin.ch/api/data/context';

const COVID19_REST_API_URL = 'https://covid19-rest.herokuapp.com';

// type dailyCase = {
//   datum: string;
//   entries: number;
//   entries_diff_last: number;
//   geoRegion: string;
//   pop: number;
//   type: string;
//   version: string;
// };

export const currentData = async () => {
  // const response = await fetch(
  //   'https://ckan.opendata.swiss/api/3/action/package_show?id=covid-19-schweiz'
  // );
  // const response = await fetch(
  //   'https://www.covid19.admin.ch/api/data/20220204-wtkgqr6y/sources/COVID19Certificates.json'
  // );

  const now = getCurrentDateFormatted();

  const response = await fetch(
    `${COVID19_REST_API_URL}/api/openzh/v1/country/ch?date=${now}`
    // `${COVID19_REST_API_URL}/api/openzh/v1/all?date=2022-02-04`
  );

  const data = await response.json();

  console.log(data);

  return data;
};

// export const getDailyCases = async () => {
//   const data: Array<dailyCase> = await (
//     await fetch(
//       'https://www.covid19.admin.ch/api/data/20220204-wtkgqr6y/sources/COVID19Cases_geoRegion.json'
//     )
//   ).json();

//   const chCases = data.filter((daily) => (daily.geoRegion = 'CH'));

//   console.log(chCases);
// };
