import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a list element", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <HomePage />
          </Provider>
        </BrowserRouter>
      );

      const listElement = screen.getByRole("list");

      expect(listElement).toBeInTheDocument();
    });
  });
});
