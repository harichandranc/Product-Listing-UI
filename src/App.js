import React, { useState } from 'react';
import productsData from './data/products';
import ProductCard from './components/ProductCard';
import FilterBar from './components/FilterBar';

function App() {
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const filteredProducts = productsData.filter(product => {
    return (
      (category === '' || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (maxPrice === '' || product.price <= maxPrice)
    );
  });

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Product Listing UI</h2>

      <FilterBar
        setCategory={setCategory}
        setSearch={setSearch}
        setMaxPrice={setMaxPrice}
      />

      <div style={styles.grid}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    gap: 20,
    flexWrap: 'wrap'
  }
};

export default App;
