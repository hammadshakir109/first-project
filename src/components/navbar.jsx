import Button from "./button";
import "./navbar.css"
export default function Navbar() {
  return (
    <>
      <div className="main">
        <h1>IZAURASCENTS</h1>

        <div className="opt">
          <ul>
            <li>Blogs</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
          <Button />
      </div>
    </>
  );
}
