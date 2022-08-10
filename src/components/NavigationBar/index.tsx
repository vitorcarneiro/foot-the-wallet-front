import { useLocation } from "react-router-dom";
import NavButton from "./NavigationButton";
import NavBar from "./style";

function NavigationBar() {
  const location = useLocation();

  function isActive(type: string) {
    if (`/${type}` === location.pathname) return true;

    return false;
  }

  return (
    <NavBar>
      <img src="./logo-white-bg.png" alt="logo with white bg" />
      <NavButton type="home" isActive={isActive("home")} />
      <NavButton type="wallet" isActive={isActive("wallet")} />
      <NavButton type="graphs" isActive={isActive("graphs")} />
      <NavButton type="friends" isActive={isActive("friends")} />
      <NavButton type="settings" isActive={isActive("settings")} />
    </NavBar>
  );
}

export default NavigationBar;
