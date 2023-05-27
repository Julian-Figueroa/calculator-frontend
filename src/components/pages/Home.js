import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import OperationForm from '../operations/OperationForm';
import { RecordsList } from '../records/RecordsList';

const Home = () => {
  const authContext = useContext(AuthContext);

  const { loadUser, user } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <OperationForm id={user?.id} />
      </div>
      <div>
        <RecordsList id={user?.id} />
      </div>
    </div>
  );
};

export default Home;
