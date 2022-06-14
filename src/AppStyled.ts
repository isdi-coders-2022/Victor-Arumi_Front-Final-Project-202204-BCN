import styled from "styled-components";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 350px;

  @media (min-width: 1242px) {
    height: 106vh;
  }
`;

export default AppStyled;
