import { BrowserRouter } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import TestRenderer from "react-test-renderer";
const { render, screen } = require("@testing-library/react");

describe("Given a HomePage component", () => {
  describe("When it's invoked)", () => {
    test("Then it should render a the HomePage component with two buttons elements", () => {
      const expectedText = "Ups... página no encontrada";

      render(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      const selectedText = screen.getByText(expectedText);

      expect(selectedText).toBeInTheDocument();
    });

    test("Then it should always match with this snapshot", () => {
      const NotFoundPageRender = TestRenderer.create(
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      );

      expect(NotFoundPageRender).toMatchSnapshot();
    });
  });
});
