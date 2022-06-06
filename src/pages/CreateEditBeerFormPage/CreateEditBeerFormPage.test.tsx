import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import CreateEditBeerFormPage from "./CreateEditBeerFormPage";

describe("Given a CreateEditBeerFormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it sould show button to createBeer", () => {
      const buttonName = "Crear cerveza";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditBeerFormPage />
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
