import React, { useEffect, useState } from "react";
import axios from "axios";

const Effect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1 "
      );
      setData(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const source = axios.CancelToken.source();

    fetchData();

    return () => {
      source.cancel("component unmounted");
    };
  }, []);

  if (loading) return <h1>Loading ....</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      {data.name}
      {data.phone}
      <button
        onClick={() => {
          setLoading(true);
          fetchData();
        }}
      >
        Refetch Data
      </button>
    </div>
  );
};

export default Effect;
