import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";

import store from "./redux/store";

const localStorageMock = (() => {
  let store: { [key: string]: any } = {};
  return {
    getItem(key: string) {
      return store[key];
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
  };
})();

const gettinUpLocalStorage = localStorageMock;

const saveToStorage = (value: string) => {
  window.localStorage.setItem("token", value);
};

Object.defineProperty(window, "localStorage", {
  value: gettinUpLocalStorage,
});

describe("Given an App component", () => {
  describe("When its invoked with a Login Page and with a real token already in the local storage", () => {
    saveToStorage(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTg5NGMzMTVjMDJjZTFjNDM2Mzk5YSIsIm5hbWUiOiJwYXVsYSIsInVzZXJuYW1lIjoiUGF1bGEgQmFkb3NhIiwicHJvZmlsZVBpY3R1cmUiOiIxNjU1MjE1Mjk4NTE4QmFkb3NhLndlYnAiLCJwcm9maWxlUGljdHVyZUJhY2t1cCI6Imh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcGFkZWxib29raW5ncy03NTE1Mi5hcHBzcG90LmNvbS9vLzE2NTUyMTUyOTg1MThCYWRvc2Eud2VicD9hbHQ9bWVkaWEmdG9rZW49NjdmYTM5NDEtN2MyYi00ODFmLTgyYmEtYTk4YjhmMjczZjdlIiwiaWF0IjoxNjU1MjM5MTE5fQ.Z_b3qaz8xDZu6bjkzPXLOPLce96_NISe_LI0JXE_ZeY"
    );

    test("Then it should render with a token in its local storage and dispatch a login action that will decrypt the token with the user information and that data will be in the store", () => {
      const expectedTokenData = {
        booking: {
          booking: {
            club: "",
            courtType: "",
            date: "",
            hour: "",
            id: "",
            open: true,
            owner: "",
            players: [],
          },
          playersUsernames: [],
        },
        bookings: [],
        user: {
          iat: 1655239119,
          id: "62a894c315c02ce1c436399a",
          logged: true,
          name: "paula",
          profilePicture: "1655215298518Badosa.webp",
          profilePictureBackup:
            "https://firebasestorage.googleapis.com/v0/b/padelbookings-75152.appspot.com/o/1655215298518Badosa.webp?alt=media&token=67fa3941-7c2b-481f-82ba-a98b8f273f7e",
          username: "Paula Badosa",
        },
      };

      render(
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      );

      const getStoreActionState = store.getState();

      expect(window.localStorage.getItem("token")).toBe(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTg5NGMzMTVjMDJjZTFjNDM2Mzk5YSIsIm5hbWUiOiJwYXVsYSIsInVzZXJuYW1lIjoiUGF1bGEgQmFkb3NhIiwicHJvZmlsZVBpY3R1cmUiOiIxNjU1MjE1Mjk4NTE4QmFkb3NhLndlYnAiLCJwcm9maWxlUGljdHVyZUJhY2t1cCI6Imh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvcGFkZWxib29raW5ncy03NTE1Mi5hcHBzcG90LmNvbS9vLzE2NTUyMTUyOTg1MThCYWRvc2Eud2VicD9hbHQ9bWVkaWEmdG9rZW49NjdmYTM5NDEtN2MyYi00ODFmLTgyYmEtYTk4YjhmMjczZjdlIiwiaWF0IjoxNjU1MjM5MTE5fQ.Z_b3qaz8xDZu6bjkzPXLOPLce96_NISe_LI0JXE_ZeY"
      );
      expect(getStoreActionState).toStrictEqual(expectedTokenData);
    });
  });
});
