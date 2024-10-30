/*
Tarea 2: Crea un componente llamado ProductCard
utilizando styled-components. Dale estilos 
personalizados al contenedor del producto, al nombre del 
producto y al botón de compra. Asegúrate de usar 
pseudoclases como :hover para agregar interactividad. 
*/

import React from 'react';
import styled from 'styled-components';
import funkoImage from '../img/funko.jpg';

const CardContainer = styled.div`
  border: none;
  padding: 25px;
  border-radius: 16px;
  max-width: 320px;
  margin: 30px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
  background-color: #ffffff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(240, 248, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%);
    transform: rotate(45deg);
    z-index: 0;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 12px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h2`
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 15px;
  font-weight: 600;
  position: relative;
  z-index: 1;
`;

const BuyButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: all 0.4s;
  }

  &:hover {
    background-color: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(52, 152, 219, 0.4);
  }

  &:hover::before {
    left: 100%;
  }
`;

const ProductCard = () => {
  return (
    <CardContainer>
      <ProductImage src={funkoImage} alt="Burbuja Poderosa" />
      <ProductName>Burbuja Poderosa - Funko</ProductName>
      <BuyButton>Comprar Ahora</BuyButton>
    </CardContainer>
  );
};

export default ProductCard;
