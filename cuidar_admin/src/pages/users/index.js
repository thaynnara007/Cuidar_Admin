import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListUser from '../../components/ListUser';
import CreateUser from '../../components/createUser';

function Users() {
  const [state, setState] = useState('list_user');

  return (
    <Navbar>
      {state === 'list_user' ? (
        <ListUser setPageState={setState} />
      ) : (
        <CreateUser setPageState={setState} />
      )}
    </Navbar>
  );
}

export default Users;
