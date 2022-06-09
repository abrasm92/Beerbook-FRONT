import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import SubHeader from "./Subheader";

describe("Given a SubHeader component", () => {
  describe("When it's instantiated", () => {
    test("Then it show it shoy a paragraph with a text", () => {
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
});
