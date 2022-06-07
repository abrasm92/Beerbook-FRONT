import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import EditBeerFormPage from "./EditBeerFormPage";

describe("Given a EditBeerFormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it sould show button to editBeer", () => {
      const buttonName = "Editar cerveza";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <EditBeerFormPage />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button", {
        name: buttonName,
      });

      expect(button).toBeInTheDocument();
    });
  });
});
