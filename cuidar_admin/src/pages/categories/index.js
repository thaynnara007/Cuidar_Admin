import React, { useState } from 'react';

import Navbar from '../../components/navbar';
import ListCategories from '../../components/listCategories';
import CreateCategory from '../../components/createCategory';

function Categories() {
  const [state, setState] = useState('list_category');

  return (
    <Navbar>
      {state === 'list_category' ? (
        <ListCategories setPageState={setState} />
      ) : (
        <CreateCategory setPageState={setState} />
      )}
    </Navbar>
  );
}

export default Categories;
