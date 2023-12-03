import React, { useContext, useState } from "react";
import style from "./index.module.scss";
import { RegisterContextt } from "../../../services/context";


const Home = () => {
  const { value1, setValue1 } = useContext(RegisterContextt);
  const { value2, setValue2 } = useContext(RegisterContextt);
  const [isClicked, setIsClicked] = useState(false);

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <React.Fragment >
      <h2 className={style.title}>Home Page</h2>
      <div className={`${style.avatar} ${isClicked ? style.clicked : ""}`}>
        <div
          className={`${style.imageWrapper} ${isClicked ? style.clicked : ""}`}
          onClick={handleImageClick}
        >
          <img src="https://www.cdnlogo.com/logos/c/84/chevrolet.svg" alt="Chevrolet Logo" />
        </div>
        <div className={style.text}>
          <p>Name: {value1}</p>
          <p>Password: {value2}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home