// types
import {
  openDataSwissCovidContext,
  openDataSwissCovidData,
} from '../../utils/types/covidOpenDataSwissTypes';

const COVID19_ADMIN_URL = 'https://www.covid19.admin.ch/api/data';

export const getDataVersion = async () => {
  const dataContext: openDataSwissCovidContext = await (
    await fetch(`${COVID19_ADMIN_URL}/context`)
  ).json();

  return {
    dataVersion: dataContext.dataVersion,
    sourceDate: dataContext.sourceDate,
  };
};

export const getData = async (version: string, type: string) => {
  const dataArray: Array<openDataSwissCovidData> = await (
    await fetch(`${COVID19_ADMIN_URL}/${version}/sources/${type}.json`)
  ).json();

  return dataArray.filter((data) => data.geoRegion === 'CHFL');
};

// export const getVacc = async () => {
//   const dataArray = await (
//     await fetch(
//       'https://www.covid19.admin.ch/api/data/20220208-nt02zeik/sources/COVID19VaccPersons_v2.json'
//     )
//   ).json();
//   console.log(dataArray.filter((data) => data.geoRegion === 'CHFL'));
// };
