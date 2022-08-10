import { Outlet } from "react-router-dom";
import styled from "styled-components";

// import DashboardLayout from "../../layouts/Dashboard";
const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;

const Bigger = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: yellow;
`;

export default function Page() {
  return (
    <Bigger>
      <Container>
        <Outlet />
      </Container>
    </Bigger>
  );
}
