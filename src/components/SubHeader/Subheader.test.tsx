import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import SubHeader from "./Subheader";

describe("Given a SubHeader component", () => {
  describe("When it's instantiated", () => {
    test("Then it show it show a button to filter", () => {
      const filterButton = "icono de filtro";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SubHeader checkInHome={false} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByAltText(filterButton);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it's instantiated and user clicks on button", () => {
    test("Then it show it show a button to submit filter", () => {
      const filterButton = "icono de filtro";
      const expectedTextButton = "Filtrar";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SubHeader checkInHome={false} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByAltText(filterButton);
      userEvent.click(button);
      const buttonSubmit = screen.getByRole("button", {
        name: expectedTextButton,
      });

      expect(buttonSubmit).toBeInTheDocument();
    });
  });
});
