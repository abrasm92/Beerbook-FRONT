import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import RegisterForm from "./RegisterForm";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a RegisterForm component", () => {
  describe("When it's rendered and user write at all the inputs", () => {
    test("Then it shuold show the user text on input box", () => {
      const expectTextName = "abra";
      const expectTextUser = "brahams";
      const expectTextPassword = "1234";
      const expectTextEmail = "abra@abra.com";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const inputName = screen.getByLabelText("Nombre");
      const inputUser = screen.getByLabelText("Usuario");
      const inputEmail = screen.getByLabelText("E-mail");
      const inputPassword = screen.getByLabelText("Contraseña");
      userEvent.type(inputName, "abra");
      userEvent.type(inputUser, "brahams");
      userEvent.type(inputEmail, "abra@abra.com");
      userEvent.type(inputPassword, "1234");

      expect(inputName).toHaveAttribute("value", expectTextName);
      expect(inputUser).toHaveAttribute("value", expectTextUser);
      expect(inputEmail).toHaveAttribute("value", expectTextEmail);
      expect(inputPassword).toHaveAttribute("value", expectTextPassword);
    });
  });

  describe("When it's rendered and user clicks buttom to submit the form", () => {
    test("Then it shuold call usertRegisterThunk and reset inputs writeds", () => {
      const expectTextName = "";
      const expectTextUser = "";
      const expectTextPassword = "";
      const expectTextEmail = "";
      const buttonName = "Registrarse";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );
      const inputName = screen.getByLabelText("Nombre");
      const inputUser = screen.getByLabelText("Usuario");
      const inputEmail = screen.getByLabelText("E-mail");
      const inputPassword = screen.getByLabelText("Contraseña");
      const button = screen.getByRole("button", { name: buttonName });
      userEvent.type(inputName, "abra");
      userEvent.type(inputUser, "brahams");
      userEvent.type(inputEmail, "abra@abra.com");
      userEvent.type(inputPassword, "1234");
      userEvent.click(button);

      expect(inputName).toHaveAttribute("value", expectTextName);
      expect(inputUser).toHaveAttribute("value", expectTextUser);
      expect(inputEmail).toHaveAttribute("value", expectTextEmail);
      expect(inputPassword).toHaveAttribute("value", expectTextPassword);
    });
  });

  describe("When it's rendered and user clicks on text to redirect login", () => {
    test("Then it shuold call navigate hook", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <RegisterForm />
          </Provider>
        </BrowserRouter>
      );

      const linkToLogin = screen.getByTestId("link-login");
      userEvent.click(linkToLogin);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
