import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(45deg, #023047, rgba(33, 158, 188, 1));

  display: flex;
`;

const NavBar = styled.nav`
  width: 20%;
  height: 100%;

  border: 2px solid red;
`;

function Wallet() {
  return (
    <Container>
      <NavBar />
      <div>Hello, Vitor!</div>
    </Container>
  );
}

export default Wallet;
