import React from 'react';
import ProfileCard from './components/ProfileCard';
import ProductCard from './components/ProductCard';
import Card from './components/Card';
import Header from './components/Header'; 
import './styles.css'; 
import './tailwind.css'; 

function App() {
  return (
    <div className="App">
      <Header /> 
      <ProfileCard />
      <ProductCard />
      <Card />
    </div>
  );
}

export default App;
