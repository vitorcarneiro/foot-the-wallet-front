import styled from "styled-components";

export default styled.div`
  background: linear-gradient(45deg, #212121, #383739);
  min-height: 100vh;
  width: 100%;
  padding: 20px 10px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 48px;

  & > * {
    text-align: center;
    box-sizing: border-box;
  }

  @media (max-width: 600px) {
    padding: 0;
  }
`;
