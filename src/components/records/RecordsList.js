import React, { useContext } from 'react';
import OperationContext from '../../context/operation/operationContext';

export const RecordsList = ({ id }) => {
  const operationContext = useContext(OperationContext);
  const { records, getRecords } = operationContext;

  const handleClick = async (e) => {
    e.preventDefault();
    if (id) {
      await getRecords(id);
    }
  };

  return (
    id && (
      <div>
        {records?.length === 0 && (
          <div>
            <input type="button" value="Fetch Records" className="btn btn-primary btn-block" onClick={handleClick} />
          </div>
        )}
        {records?.length > 0 && (
          <div>
            <h2 className="text-primary">New Operation</h2>
            {records.map((record) => (
              <div key={record.id}>
                <p>ID: {record.id}</p>
                <p>Operation ID: {record.operation_id}</p>
                <p>User ID: {record.user_id}</p>
                <p>Amount: {record.amount}</p>
                <p>User Balance: {record.user_balance}</p>
                <p>Operation Response: {record.operation_response}</p>
                <p>Date: {record.date}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  );
};
