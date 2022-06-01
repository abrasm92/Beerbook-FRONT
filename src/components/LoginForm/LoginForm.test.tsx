import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it's rendered and user write at all the inputs", () => {
    test("Then it shuold show the user text on input box", () => {
      const expectTextUser = "brahams";
      const expectTextPassword = "1234";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      const inputUser = screen.getByLabelText("Usuario");
      const inputPassword = screen.getByLabelText("Contraseña");
      userEvent.type(inputUser, "brahams");
      userEvent.type(inputPassword, "1234");

      expect(inputUser).toHaveAttribute("value", expectTextUser);
      expect(inputPassword).toHaveAttribute("value", expectTextPassword);
    });
  });

  describe("When it's rendered and user clicks buttom to submit the form", () => {
    test("Then it shuold call usertRegisterThunk and reset inputs writeds", () => {
      const expectTextUser = "";
      const expectTextPassword = "";
      const buttonName = "Iniciar sesión";

      render(
        <Provider store={store}>
          <LoginForm />
        </Provider>
      );
      const inputUser = screen.getByLabelText("Usuario");
      const inputPassword = screen.getByLabelText("Contraseña");
      const button = screen.getByRole("button", { name: buttonName });
      userEvent.type(inputUser, "brahams");
      userEvent.type(inputPassword, "1234");
      userEvent.click(button);

      expect(inputUser).toHaveAttribute("value", expectTextUser);
      expect(inputPassword).toHaveAttribute("value", expectTextPassword);
    });
  });
});
