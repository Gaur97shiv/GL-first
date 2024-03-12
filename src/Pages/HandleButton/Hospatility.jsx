import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Store/Slices/data';
const Hospitality = () => {
  const dispatch = useDispatch();
  const { dat, isLoading, isError } = useSelector(state => state.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div>
      <h1>Your Data</h1>
      <ul>
        {dat && dat.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hospitality;
