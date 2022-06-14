import styled from "styled-components";

const NotFoundPageStyled = styled.div`
  height: 100vh;
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 2rem 0rem;
    min-width: 90%;
    font-size: 2rem;
  }

  img {
    width: 300px;
  }

  @media (min-width: 900px) {
    img {
      width: 700px;
    }
  }
`;

const NotFoundPage = (): JSX.Element => {
  return (
    <NotFoundPageStyled>
      <h1 className="text-center">Ups... página no encontrada</h1>
      <img src="../../images/404.webp" alt="Imagen de página de error" />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
