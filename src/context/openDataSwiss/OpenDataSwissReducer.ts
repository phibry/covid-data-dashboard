// types
import {
  openDataSwissCovidContext,
  openDataSwissCovidData,
  openDataSwissCovidTotals,
} from '../../utils/types/covidOpenDataSwissTypes';

export enum OpenDataSwissActionType {
  GET_DATA_CONTEXT = 'GET_DATA_CONTEXT',
  GET_DATA_CASES = 'GET_DATA_CASES',
  SET_LOADING = 'SET_LOADING',
  GET_DATA_HOSP = 'GET_DATA_HOSP',
  UNSET_LOADING = 'UNSET_LOADING',
  GET_DATA_TOTALS = 'GET_DATA_TOTALS',
  GET_DATA_DEATHS = 'GET_DATA_DEATHS',
}

export type Action =
  | {
      type: OpenDataSwissActionType.GET_DATA_CASES;
      payload: any; //TODO:
    }
  | {
      type: OpenDataSwissActionType.GET_DATA_HOSP;
      payload: any; //TODO:
    }
  | {
      type: OpenDataSwissActionType.GET_DATA_DEATHS;
      payload: any; //TODO:
    }
  | {
      type: OpenDataSwissActionType.GET_DATA_TOTALS;
      payload: openDataSwissCovidTotals;
    }
  | {
      type: OpenDataSwissActionType.GET_DATA_CONTEXT;
      payload: any; //TODO:
    }
  | {
      type: OpenDataSwissActionType.SET_LOADING;
    }
  | {
      type: OpenDataSwissActionType.UNSET_LOADING;
    };

type State = {
  covidContext: openDataSwissCovidContext;
  covidCases: Array<openDataSwissCovidData>;
  covidDeaths: Array<openDataSwissCovidData>;
  covidHosp: Array<openDataSwissCovidData>;
  totals: openDataSwissCovidTotals;
  loading: boolean;
};

const openDataSwissReducer = (state: State, action: Action) => {
  switch (action.type) {
    case OpenDataSwissActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case OpenDataSwissActionType.UNSET_LOADING:
      return {
        ...state,
        loading: false,
      };
    case OpenDataSwissActionType.GET_DATA_CONTEXT:
      return {
        ...state,
        covidContext: action.payload,
      };
    case OpenDataSwissActionType.GET_DATA_CASES:
      return {
        ...state,
        covidCases: action.payload,
      };
    case OpenDataSwissActionType.GET_DATA_DEATHS:
      return {
        ...state,
        covidDeaths: action.payload,
      };
    case OpenDataSwissActionType.GET_DATA_HOSP:
      return {
        ...state,
        covidHosp: action.payload,
      };
    case OpenDataSwissActionType.GET_DATA_TOTALS:
      return {
        ...state,
        totals: action.payload,
      };

    default:
      return state;
  }
};

export default openDataSwissReducer;
