import React, { useEffect, useState } from "react";
import axios from "axios";

const Effect = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
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
    fetchData();
  }, []);

  if (loading) return <h1>Loading ....</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      {data.name}
      {data.phone}
    </div>
  );
};

export default Effect;
