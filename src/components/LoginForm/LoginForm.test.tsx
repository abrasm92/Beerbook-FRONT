import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it's rendered and user write at all the inputs", () => {
    test("Then it shuold show the user text on input box", () => {
      const expectTextUser = "brahams";
      const expectTextPassword = "1234";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <LoginForm />
          </Provider>
        </BrowserRouter>
      );
      const inputUser = screen.getByLabelText("Usuario");
      const inputPassword = screen.getByLabelText("Contraseña");
      userEvent.type(inputUser, "brahams");
      userEvent.type(inputPassword, "1234");

      expect(inputUser).toHaveAttribute("value", expectTextUser);
      expect(inputPassword).toHaveAttribute("value", expectTextPassword);
    });
  });
});
