import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <nav className="">
        <NavLink to="/" className="">
          Home
        </NavLink>
        <NavLink to="/about" className="">
          About
        </NavLink>
        <NavLink to="/products" className="">
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
