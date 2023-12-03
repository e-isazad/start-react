import React, { useState, useEffect } from "react";
import { Button, Card } from "antd";
import axios from "axios";
import style from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

function Dashboard() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios("https://655ed20f879575426b43fd2e.mockapi.io/api/user").then(
      (response) => {
        setDatas(response.data);
      }
    );
  }, []);
  const handleDelete = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://655ed20f879575426b43fd2e.mockapi.io/api/user/${userId}`)
          .then((response) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire({
              title: "Error!",
              text: "An error occurred while deleting the user.",
              icon: "error",
            });
          });
      }
    });
  };
  return (
    <React.Fragment>
      <div className={style.headerBox}>
        {datas &&
          datas.map((data, idx) => {
            return (
              <div className={style.cardBox}>
                <Card
                  key={idx}
                  hoverable
                  style={{
                    width: 240,
                  }}
                >
                  <p>userName:<b style={{ marginLeft: '10px' }}>{data.userName}</b></p>
                  <p>password:<i style={{ marginLeft: '10px' }}>{data.password}</i></p>
                  <Button onClick={() => handleDelete(data.id)}
                    type="primary" style={{ marginTop: '5px' }} danger><FontAwesomeIcon icon={faTrash} /></Button>
                </Card>
              </div>
            );
          })}
      </div>
    </React.Fragment>
  );
}

export default Dashboard;