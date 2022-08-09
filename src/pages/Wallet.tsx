import styled from "styled-components";
import { BsGridFill } from "react-icons/bs";
// BsGridFill BsGrid
import { IoWalletOutline } from "react-icons/io5";
// IoWallet IoWalletOutline
import { RiLightbulbLine, RiSettings3Line } from "react-icons/ri";
// RiLightbulbFill RiLightbulbLine RiSettings3Fill RiSettings3Line

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #023047, rgba(33, 158, 188, 1));
  padding: 10px;

  display: flex;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  overflow: hidden;
`;

const NavBar = styled.nav`
  width: 80px;
  height: 100%;
  padding: 10px;

  border: 2px solid red;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  * {
    color: white;
  }

  img {
    width: 50px;
  }
`;

function Wallet() {
  return (
    <Container>
      <NavBar>
        <img src="./logo-white-bg.png" alt="logo with white bg" />
        <BsGridFill size={40} />
        <IoWalletOutline size={40} />
        <RiLightbulbLine size={40} />
        <RiSettings3Line size={40} />
      </NavBar>
      <div>Hello, Vitor!</div>
    </Container>
  );
}

export default Wallet;
