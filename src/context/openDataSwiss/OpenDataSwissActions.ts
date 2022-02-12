// types
import {
  openDataSwissCovidContext,
  openDataSwissCovidData,
  openDataSwissCovidHospCapacity,
  openDataSwissCovidVacc,
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

export const getData = async (
  version: string,
  type: string,
  region: string
) => {
  const dataArray: Array<openDataSwissCovidData> = await (
    await fetch(`${COVID19_ADMIN_URL}/${version}/sources/${type}.json`)
  ).json();

  return dataArray.filter((data) => data.geoRegion === region);
};

export const getVacc = async (
  version: string,
  region: string,
  vaccType: string
) => {
  const dataArray: Array<openDataSwissCovidVacc> = await (
    await fetch(
      `${COVID19_ADMIN_URL}/${version}/sources/COVID19VaccPersons_v2.json`
    )
  ).json();
  return dataArray.filter(
    (data) =>
      data.geoRegion === region &&
      data.age_group === 'total_population' &&
      data.type === vaccType
  );
};

export const getHospCapacity = async (version: string) => {
  const dataArray: Array<openDataSwissCovidHospCapacity> = await (
    await fetch(
      `${COVID19_ADMIN_URL}/${version}/sources/COVID19HospCapacity_geoRegion.json`
    )
  ).json();
  return dataArray.filter((data) => data.geoRegion === 'CH');
};
