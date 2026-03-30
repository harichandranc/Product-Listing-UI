import React from 'react';

function FilterBar({ setCategory, setSearch, setMaxPrice }) {
  return (
    <div style={styles.container}>
      
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Footwear">Footwear</option>
      </select>

      <input
        type="number"
        placeholder="Max Price"
        onChange={(e) => setMaxPrice(e.target.value)}
      />

    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    gap: 10,
    marginBottom: 20
  }
};

export default FilterBar;
