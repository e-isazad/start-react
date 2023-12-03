import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import style from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { CountryContextt, UserContext } from '../../../services/context';
import Swal from 'sweetalert2';
const Category = () => {
  const [bira, setBira] = useState([]);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { user, setUser } = useContext(UserContext);
  let { country, setCountry } = useContext(CountryContextt)
  const [basket, setBasket] = useState([]);
  const handleDetailsClick = (record) => {
    setSelectedProduct(record);
    navigate(`/details/${record.id}`);
  };
  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((data) => setBira(data));
  }, []);

  const handleBasketClick = (id, name) => {
    if (user) {
      setBasket((prevBasket) => [...prevBasket, { id, name }]);
      localStorage.setItem('basket', JSON.stringify([...basket, { id, name }]));
      const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
      setBasket(storedBasket);
      setCountry(storedBasket.length);
      Swal.fire({
        icon: 'success',
        title: 'Added to Basket!',
        text: `Item "${name}" has been added to your basket.`,
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Authentication Required',
        text: 'Please log in to add items to your basket.',
      });
    }
  };

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
      title: 'Basket',
      dataIndex: '',
      render: (_, record) => (
        <Button
          onClick={() => handleBasketClick(record.id, record.name)}
          disabled={!user}
        >
          <FontAwesomeIcon icon={faBasketShopping} />
        </Button>
      ),

    },
    {
      title: 'detalis',
      dataIndex: '',
      render: (_, record) => (
        <Link to={`/details/${record.id}`} onClick={() => handleDetailsClick(record)}>
          <Button>
            detalis
          </Button>
        </Link>
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

export default Category;