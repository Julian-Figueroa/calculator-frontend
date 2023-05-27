import React, { useState, useContext, useEffect } from 'react';
import OperationContext from '../../context/operation/operationContext';

const OperationForm = ({ id }) => {
  const operationContext = useContext(OperationContext);

  const { newOperation } = operationContext;

  useEffect(() => {
    setOperation({
      amount: '',
      type: 'addition',
    });
  }, [operationContext]);

  const [operation, setOperation] = useState({
    amount: '',
    type: 'addition',
  });

  const { amount, type } = operation;

  const onChange = (e) =>
    setOperation({
      ...operation,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...operation,
      user_id: id,
      amount: parseInt(amount),
    };

    newOperation(payload);
    setOperation({
      amount: '',
      type: 'addition',
    });
  };

  return id ? (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary">New Operation</h2>
      <input type="text" placeholder="Amount" name="amount" value={amount} onChange={onChange} />
      <h5>Contact Type</h5>
      <select name="type" value={type} onChange={onChange}>
        <option value="addition">Addition</option>
        <option value="subtraction">Subtraction</option>
        <option value="multiplication">Multiplication</option>
        <option value="division">Division</option>
        <option value="square_root">Square Root</option>
        <option value="random_string">Random String</option>
      </select>
      <div>
        <input type="submit" value="New Operation" className="btn btn-primary btn-block" />
      </div>
    </form>
  ) : null;
};

export default OperationForm;
