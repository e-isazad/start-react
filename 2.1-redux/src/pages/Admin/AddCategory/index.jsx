import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import style from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { CountryContextt, UserContext } from '../../../services/context';
import Swal from 'sweetalert2';
const AddCategory = () => {
  const [bira, setBira] = useState([]);

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBira(data));
  }, []);


  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'EBC',
      dataIndex: 'ebc',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.ebc - b.ebc,
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      filters: bira.map((item) => ({
        text: item.name,
        value: item.name,
      })),
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'DELETE',
      dataIndex: '',
      render: (_, record) => (
        <Button onClick={()=>{
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              alert('API özüm yazmadım deye delete ve edit işləmir')
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
        }} type="primary" danger> DELETE
          <FontAwesomeIcon style={{ marginLeft: '9px' }} icon={faTrash} />
        </Button>
      ),

    },
    {
      title: 'EDIT',
      dataIndex: '',
      render: (_, record) => (
        <Button style={{ backgroundColor: 'yellow' }} type="primary"  > <b>EDIT</b>
          <FontAwesomeIcon style={{ marginLeft: '9px' }} icon={faPen} />
        </Button>
      ),

    },

  ];

  return (
    <React.Fragment>
      <div className={style.boxTable}>
        <Table
          style={{ margin: '0 90px' }}
          columns={columns}
          dataSource={bira}
        />
      </div>
    </React.Fragment>
  );
};

export default AddCategory;