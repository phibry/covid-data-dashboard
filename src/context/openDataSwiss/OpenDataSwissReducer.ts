// types
import {
  openDataSwissCovidContext,
  openDataSwissCovidData,
} from '../../utils/types/covidOpenDataSwissTypes';

export enum OpenDataSwissActionType {
  GET_DATA_CONTEXT = 'GET_DATA_CONTEXT',
  GET_DATA = 'GET_DATA',
  SET_LOADING = 'SET_LOADING',
}

export type Action =
  | {
      type: OpenDataSwissActionType.GET_DATA;
      payload: any;
    }
  | {
      type: OpenDataSwissActionType.GET_DATA_CONTEXT;
      payload: any;
    }
  | {
      type: OpenDataSwissActionType.SET_LOADING;
    };

type State = {
  covidContext: openDataSwissCovidContext;
  covidData: openDataSwissCovidData;
  // dataVersion: string | null;
  // sourceDate: string | null;
  loading: boolean;
};

const openDataSwissReducer = (state: State, action: Action) => {
  switch (action.type) {
    case OpenDataSwissActionType.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case OpenDataSwissActionType.GET_DATA_CONTEXT:
      return {
        ...state,
        covidContext: action.payload,
        // dataVersion: action.payload.dataVersion,
        // sourceDate: action.payload.sourceDate,
        // loading: false,
      };
    case OpenDataSwissActionType.GET_DATA:
      return {
        ...state,
        covidData: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default openDataSwissReducer;
