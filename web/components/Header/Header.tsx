import Nav from "./Nav";
import "./style.css";

export default function Header() {
  return (
    <header className="h-header">
      <div className="h-container h-header__container">
        <div></div>
        <Nav />
      </div>
    </header>
  );
}
