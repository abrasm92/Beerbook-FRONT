import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store/store";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's instanciated", () => {
    test("Then it should show an image with a logo", () => {
      const imageAltText = "Beerbook logo";

      render(
        <Provider store={store}>
          <Header />
        </Provider>
      );
      const image = screen.getByAltText(imageAltText);

      expect(image).toBeInTheDocument();
    });
  });
});
