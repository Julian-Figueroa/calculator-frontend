import { GET_RECORDS, NEW_OPERATION } from '../types';

const operationReducer = (state, action) => {
  switch (action.type) {
    case NEW_OPERATION:
      return {
        ...state,
        operations: action.payload,
        loading: false,
      };

    case GET_RECORDS:
      return {
        ...state,
        records: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default operationReducer;
