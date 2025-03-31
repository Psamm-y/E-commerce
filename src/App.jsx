import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import products from './db/data';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');
  //----------Input filter-----------

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase) !== -1
  );

  //----------Radio filter-----------
  const handleInputChange = (e) => setSelectedCategory(e.target.value);

  //----------Buttons filter-----------
  const handleClick = (e = setSelectedCategory(e.target.value));

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    //filtering input items
  }
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
