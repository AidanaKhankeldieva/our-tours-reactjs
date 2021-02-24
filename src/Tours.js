import React, { useState, useEffect } from "react";
import SingleTour from "./SingleTour";
import axios from "axios";
import "./Tours.css";

const Tours = () => {
  const url = "https://course-api.com/react-tours-project";
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(url);
    const data = await res.data;
    setData(data);
  };
  const deleteTour = (id) => {
    console.log("id", id);
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    return newData;
  };

  console.log("data", data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='tours__container'>
      <h1>Our Tours</h1>
      <div className='tours'>
        {data &&
          data.map((each) => (
            <SingleTour {...each} key={each.id} deleteTour={deleteTour} />
          ))}
      </div>
    </div>
  );
};

export default Tours;
