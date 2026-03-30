import React from 'react';

function ProductCard({ product }) {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    padding: 15,
    borderRadius: 10,
    width: 200,
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: 150,
    objectFit: 'cover'
  }
};

export default ProductCard;
