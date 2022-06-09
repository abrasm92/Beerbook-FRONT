import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import SubHeader from "./Subheader";

describe("Given a SubHeader component", () => {
  describe("When it's instantiated", () => {
    test("Then it show it show a button to filter", () => {
      const textButton = "O/C";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SubHeader />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's instantiated and user clicks on button", () => {
    test("Then it show it show a button to submit filter", () => {
      const textButton = "O/C";
      const expectedTextButton = "Filtrar";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SubHeader />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: textButton });
      userEvent.click(button);
      const buttonSubmit = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(buttonSubmit).toBeInTheDocument();
    });
  });
});
