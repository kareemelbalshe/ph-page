import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import { useDispatch, useSelector } from "react-redux";
import Image from "react-bootstrap/esm/Image";
import { clear, deleteFromCart } from "./rtk/slices/cart-slice.js";


export default function Cart() {
  const cart = useSelector(state => state.cart);
  const dispatch =useDispatch()
  const totalPrice=cart.reduce((acc, product)=>{
    acc+=product.price * product.quantity
    return acc
  },0)
  return (
    <Container>
      <h1 className="py-5">welcome to cart</h1>
      <Button variant="primary" onClick={()=>dispatch(clear())}>clear cart</Button>
      <h5>total price: {totalPrice.toFixed(2)} $</h5>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>img</th>
            <th>price</th>
            <th>quantity</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image src={product.image} style={{ width: "100px" }} />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <Button variant="danger" onClick={()=>dispatch(deleteFromCart(product))}>delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
