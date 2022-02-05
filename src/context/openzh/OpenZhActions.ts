// utils
import {
  getCurrentDateFormatted,
  getPreviousDateFormatted,
} from '../../utils/dateHelper';

// types
import { dailyCase } from '../../utils/types/covidOpenZhTypes';

const COVID19_REST_API_URL = 'https://covid19-rest.herokuapp.com';

export const currentData = async () => {
  let formattedDate = getCurrentDateFormatted(new Date(), '-', true);
  let data: dailyCase = {
    totals: null,
    records: [],
  };

  while (!data.totals || !data.records.length) {
    data = await (
      await fetch(
        `${COVID19_REST_API_URL}/api/openzh/v1/country/ch?date=${formattedDate}`
      )
    ).json();

    formattedDate = getPreviousDateFormatted(formattedDate);
  }

  return data;
};
