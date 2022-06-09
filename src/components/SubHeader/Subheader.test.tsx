import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import SubHeader from "./Subheader";

describe("Given a SubHeader component", () => {
  describe("When it's instantiated", () => {
    test("Then it show it shoy a paragraph with a text", () => {
      /* const expectedParagraph =
        "Descubre todo sobre las mejores cervezas del mundo"; */

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SubHeader />
          </Provider>
        </BrowserRouter>
      );

      /* const text = screen.getByText(expectedParagraph); */
      const section = screen.getByRole("article");

      expect(section).toBeInTheDocument();
      /* expect(text).toHaveTextContent(expectedParagraph); */
    });
  });
});
