import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import CreateEditBeerForm from "./CreateEditBeerForm";

describe("Given a CreateEditBeerForm component", () => {
  describe("When it's rendered and user write on name input", () => {
    test("Then it should show the user text on sceen input", () => {
      const expectTextName = "Nombre de Cerveza";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditBeerForm beer={null} />
          </Provider>
        </BrowserRouter>
      );
      const inputName = screen.getByLabelText("Nombre de la cerveza");
      userEvent.type(inputName, "Nombre de Cerveza");

      expect(inputName).toHaveAttribute("value", expectTextName);
    });
  });

  describe("When it's rendered and user write on description textarea", () => {
    test("Then it should show the user text on sceen camp", () => {
      const expectTextInput = "Nombre de Cerveza";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditBeerForm beer={null} />
          </Provider>
        </BrowserRouter>
      );
      const textarea = screen.getByPlaceholderText("Descripción");
      userEvent.type(textarea, "Nombre de Cerveza");

      expect(textarea).toHaveTextContent(expectTextInput);
    });
  });

  describe("When it's rendered and user click on 'Crear cerveza' button", () => {
    test("Then it should show the user text on sceen camp", () => {
      const expectTextInput = "";
      const buttonsubmit = "Crear cerveza";
      const expectTextName = "";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <CreateEditBeerForm beer={null} />
          </Provider>
        </BrowserRouter>
      );
      const button = screen.getByRole("button", { name: buttonsubmit });
      const textarea = screen.getByPlaceholderText("Descripción");
      const inputName = screen.getByLabelText("Nombre de la cerveza");
      userEvent.type(inputName, "Nombre de Cerveza");
      userEvent.type(textarea, "Nombre de Cerveza");
      userEvent.click(button);

      expect(textarea).toHaveTextContent(expectTextInput);
      expect(inputName).toHaveAttribute("value", expectTextName);
    });
  });
});
