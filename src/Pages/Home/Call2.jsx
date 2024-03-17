import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../Store/FetchData';



const Call2= () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.dataslice);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h1>User Data:</h1>
        <h1>{data[0].body}</h1>  
        </div>
      ) : (
        <div>No user data found.</div>
      )}
    </div>
  );
};

export default Call2;
