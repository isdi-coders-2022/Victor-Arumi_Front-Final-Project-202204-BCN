import styled from "styled-components";

const BookingStyled = styled.div`
  width: 350px;
  height: 250px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  border: 10px solid red;
  color: #1974b6;

  .booking-info-container {
    display: flex;
    flex-direction: column;
    margin: 5px 0px 5px 50px;
    border: 2px solid blue;
    width: 250px;
    padding: 5px 0px;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 30px;
    height: 100%;
    justify-content: space-around;

    &_item {
      display: flex;
      align-items: left;

      p {
        margin-left: 5px;
      }
    }
  }
  .club-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;

    h3 {
      color: black;
      margin-left: 5px;
    }
  }

  .booking-buttons-container {
    display: flex;
    flex-direction: column;
    border: 2px solid green;
    width: 50px;
    margin: 5px 5px;
    justify-content: space-between;
  }
`;

export default BookingStyled;
