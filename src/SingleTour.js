import React, { useState } from "react";
import "./SingleTour.css";

const SingleTour = ({ id, name, info, image, price, deleteTour }) => {
  const [readmore, setReadmore] = useState("Read more");
  const [isToggled, setIsToggled] = useState(false);
  const truncate = (str, n) => {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  const handleClick = () => {
    isToggled ? setReadmore("Read more") : setReadmore("Show less");
    setIsToggled(!isToggled);
  };

  return (
    <div key={id} className='singletour'>
      <img src={image} alt={name} />
      <div className='container'>
        <div className='content'>
          <h4>{name}</h4>
          <h3>${price}</h3>
        </div>
        <p>
          {isToggled ? info : truncate(info, 200)}
          <span onClick={handleClick} className='readmore'>
            {readmore}
          </span>
        </p>
        <button onClick={() => deleteTour(id)}>Not Interested</button>
      </div>
    </div>
  );
};

export default SingleTour;
