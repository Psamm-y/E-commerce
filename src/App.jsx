import { useState } from 'react';
import Nav from './Navigation/Nav';
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //Input filter
  const [query, setQuery] = useState('');

  const handleInputChange = e = {
    setQuery(e.target.value);
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
