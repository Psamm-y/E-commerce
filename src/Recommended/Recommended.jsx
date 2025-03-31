import React from 'react';
import './recommended.css';
import '../index.css';
function Recommended() {
  return (
    <div>
      <h2 className="recommended-title">Recommended </h2>
      <div className="recommended-btns">
        <button>All Products</button>
        <button>Nike</button>
        <button>Adidas</button>
        <button>Puma</button>
        <button>Vans</button>
      </div>
    </div>
  );
}
export default Recommended;
