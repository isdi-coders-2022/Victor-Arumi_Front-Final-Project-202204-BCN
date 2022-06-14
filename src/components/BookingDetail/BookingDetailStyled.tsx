import styled from "styled-components";

const BookingDetailStyled = styled.div`
  width: 345px;
  height: 750px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1974b6;
  margin-bottom: 2rem;

  .non-detail-container {
    display: flex;
    width: 100%;
  }
  .detail-container {
    display: flex;
    flex-direction: column;
    width: 100%;

    .player-info {
      display: flex;
      width: 100%;
      align-items: center;

      &_player-name {
        width: 180px;
        margin-left: 60px;

        padding: 10px 0px 10px 25px;

        text-transform: capitalize;
      }

      &_player-picture {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: 1px solid #d1d5db;
        margin: 10px 0px 10px 15px;
      }
    }
  }
  .booking-info-container {
    display: flex;
    flex-direction: column;
    margin: 5px 0px 5px 50px;
    width: 300px;
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
      max-width: 100px;
    }
  }

  .booking-buttons-container {
    display: flex;
    flex-direction: column;
    width: 50px;
    margin: 10px 10px;
    justify-content: space-between;
    font-size: 2.2rem;
  }

  @media (min-width: 710px) {
    flex-direction: row;
    width: 690px;
    height: 450px;

    .separation-line {
      transform: rotate(90deg);
      padding: 0px;
      margin: 0px;
      width: 0px;
    }
    button {
      padding-top: 20px;
    }
    .non-detail-container {
      flex-direction: column;
      align-items: center;
      .booking-buttons-container {
        flex-direction: row;
        width: 150px;
      }

      .booking-info-container {
        width: 250px;
        margin-left: 80px;

        .data-container {
          width: 200px;
        }
      }
    }
  }
`;

export default BookingDetailStyled;
