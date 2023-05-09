import React from 'react'
import stylesCard from '../../styles/ProductCard.module.scss';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const PizzaPage = () => {
  const [pizza,setPizza] = React.useState();
  const {id} = useParams();
  const navigate = useNavigate();
  React.useEffect(() => {
    async function getPizzaById () {
      try {
        const response = await axios.get(`https://644f4cf0b61a9f0c4d1fc869.mockapi.io/Products/`+id)
        setPizza(response.data);
      } catch (error) {
        alert('Ошибка при получении данных')
        console.log(error)
        navigate("/")
      }
    }
    getPizzaById();
  },[])
  if (!pizza){
    return (
    <div>Loading...</div>
    )
  }
  return (
    <div className={stylesCard.full_pizzaWrapper}>
      <img src={pizza.imageUrl} />
      <div>{pizza.title}</div>
      <div>{pizza.price}</div>
    </div>
  )
}

export default PizzaPage;
