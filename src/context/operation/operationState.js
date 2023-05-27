import React, { useReducer } from 'react';
import axios from 'axios';
import OperationContext from './operationContext';
import operationReducer from './operationReducer';
import { GET_RECORDS, NEW_OPERATION, OPERATION_ERROR, RECORDS_ERROR } from '../types';
import { API_URL } from '../../utils/constants';

const OperationState = (props) => {
  const initState = {
    operations: null,
    error: null,
  };

  const [state, dispatch] = useReducer(operationReducer, initState);

  //Add operation
  const newOperation = async (operation) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${API_URL}/new-operation`, operation, config);
      dispatch({
        type: NEW_OPERATION,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: OPERATION_ERROR,
        payload: error.response.message,
      });
    }
  };

  // GET RECORDS
  const getRecords = async (id) => {
    if (id && id !== undefined) {
      try {
        const res = await axios.get(`${API_URL}/user/${id}/records`);
        dispatch({
          type: GET_RECORDS,
          payload: res.data,
        });
      } catch (error) {
        dispatch({
          type: RECORDS_ERROR,
          payload: error.response.message,
        });
      }
    }
  };

  return (
    <OperationContext.Provider
      value={{
        operations: state.operations,
        error: state.error,
        records: state.records,
        newOperation,
        getRecords,
      }}
    >
      {props.children}
    </OperationContext.Provider>
  );
};

export default OperationState;
