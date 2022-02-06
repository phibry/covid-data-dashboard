// types
import { openDataSwissCovidContext } from '../../utils/types/covidOpenDataSwissTypes';

const COVID19_ADMIN_URL = 'https://www.covid19.admin.ch/api/data';

export const getDataVersion = async () => {
  const dataContext: openDataSwissCovidContext = await (
    await fetch(`${COVID19_ADMIN_URL}/context`)
  ).json();

  // const cases = await (
  //   await fetch(
  //     `${COVID19_ADMIN_URL}/${dataContext.dataVersion}/sources/COVID19Cases_geoRegion.json`
  //   )
  // ).json();

  // console.log(cases);

  // console.log(dataContext.dataVersion);

  return {
    dataVersion: dataContext.dataVersion,
    sourceDate: dataContext.sourceDate,
  };
};
