/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './rtk/slices/products-slice.js';
import { addToCart } from './rtk/slices/cart-slice.js';

export default function Products() {
  const products =useSelector((state)=>state.products)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  console.log(products);
  return (
    <div>
      <Container className='py-5'>
        <div className='row py-5'>
          {products.map((product)=>(
            <div className='col' key={product.id}>
            <Card style={{ width: '18rem' ,marginBottom:"20px"}}>
              <Card.Img style={{height:"300px"}} variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                  {product.description.slice(0,50)}
                </Card.Text>
                <Card.Text>
                  {product.price} $
                </Card.Text>
                <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add to cart</Button>
              </Card.Body>
            </Card>
          </div>
          ))}
        </div>
      </Container>
    </div>
  )
}
