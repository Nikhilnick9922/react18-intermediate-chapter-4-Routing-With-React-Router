import { LoginStatus } from "./Auth";
import useCounterStore from "./Counter/store";

const NavBar = () => {
  const counter = useCounterStore((s) => s.counter);

  console.log("render navbar");

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{counter}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
