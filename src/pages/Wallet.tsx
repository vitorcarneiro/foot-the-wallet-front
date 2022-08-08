import styled from "styled-components";
import { BsGridFill } from "react-icons/bs";
// BsGrid
import { IoWallet } from "react-icons/io5";
// IoWalletOutline
import { RiLightbulbFill, RiSettings3Fill } from "react-icons/ri";
// RiLightbulbLine RiSettings3Line

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #023047, rgba(33, 158, 188, 1));

  display: flex;
`;

const NavBar = styled.nav`
  width: 150px;
  height: 100%;

  border: 2px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    color: white;
  }
`;

function Wallet() {
  return (
    <Container>
      <NavBar>
        <BsGridFill size={50} />
        <IoWallet size={50} />
        <RiLightbulbFill size={50} />
        <RiSettings3Fill size={50} />
      </NavBar>
      <div>Hello, Vitor!</div>
    </Container>
  );
}

export default Wallet;
