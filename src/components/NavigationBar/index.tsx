import NavButton from "./NavigationButton";
import NavBar from "./style";

function NavigationBar() {
  return (
    <NavBar>
      <img src="./logo-white-bg.png" alt="logo with white bg" />
      <NavButton isActive type="home" />
      <NavButton isActive={false} type="wallet" />
      <NavButton isActive={false} type="light" />
      <NavButton isActive={false} type="setting" />
    </NavBar>
  );
}

export default NavigationBar;
