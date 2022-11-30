import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <h1>My App</h1>
      <ul className="navlinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li className="cart">
          <a href="#">
            <h3>Cart</h3>
            <h6 className="cart-items">3</h6>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
