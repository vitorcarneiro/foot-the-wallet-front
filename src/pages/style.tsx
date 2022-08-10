import styled from "styled-components";

export const page = styled.div`
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

export const Big = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100vh - 80px);
    padding: 20px;
  }
`;
