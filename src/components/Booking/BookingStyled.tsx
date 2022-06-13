import styled from "styled-components";

const BookingStyled = styled.div`
  width: 345px;
  height: 235px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  color: #1974b6;
  margin-bottom: 20px;

  .booking-info-container {
    display: flex;
    flex-direction: column;
    margin: 5px 0px 5px 50px;
    width: 250px;
    padding-top: 5px;
  }

  .data-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
    margin-bottom: 10px;
    height: 100%;
    justify-content: flex-end;
    font-size: 1.2rem;

    &_item {
      display: flex;
      align-items: left;
      margin-top: 5px;

      span {
        display: flex;
        align-items: center;
        width: 25px;
        justify-content: space-around;
      }

      p {
        margin-left: 5px;
      }
    }
  }
  .club-container {
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;
    align-items: center;
    height: 100px;

    h3 {
      color: black;
      font-size: 2rem;
      font-weight: bold;
      margin-right: 5px;
    }
  }

  .booking-buttons-container {
    display: flex;
    flex-direction: column;
    width: 50px;
    margin: 10px 10px;
    justify-content: space-between;
    font-size: 2.2rem;

    &--not-owner {
      justify-content: center;
    }
  }
`;

export default BookingStyled;
