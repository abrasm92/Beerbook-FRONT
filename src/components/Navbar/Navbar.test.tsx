import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it's instantiated", () => {
    test("Then it sould show 3 image", () => {
      const expectTotalImage = 3;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Navbar />
          </Provider>
        </BrowserRouter>
      );
      const imagesLength = screen.getAllByRole("img");

      expect(imagesLength).toHaveLength(expectTotalImage);
    });
  });
});
