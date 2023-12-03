
import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import { CountryContextt, UserContext } from '../../../services/context';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const BasketPage = () => {
  const { user } = useContext(UserContext);
  const { country } = useContext(CountryContextt);
  const [basket, setBasket] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    if (user===null) {
      navigate('/login');
    }
  },[]);

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);
  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
    setBasket(storedBasket);
  }, []);

  const handleAdd = (id) => {
    const updatedBasket = basket.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };

  const handleRemove = (id) => {
    const updatedBasket = basket.map((item) =>
      item.id === id && item.quantity > 0
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };

  const handleClear = (id) => {
    const updatedBasket = basket.filter((item) => item.id !== id);
    setBasket(updatedBasket);
    localStorage.setItem('basket', JSON.stringify(updatedBasket));
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',

    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div>
          <Button  onClick={() => handleAdd(record.id)}>+</Button>
          <Button style={{marginLeft:'5px'}} onClick={() => handleRemove(record.id)}>-</Button>
          <Button style={{marginLeft:'5px'}} onClick={() => handleClear(record.id)}><FontAwesomeIcon style={{color:"red" }} icon={faTrash} /></Button>
        </div>
      ),
    },];

  return (
    <div>
      <Table dataSource={basket} columns={columns} />
    </div>
  );
};

export default BasketPage;
