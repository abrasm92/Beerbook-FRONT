import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { singleBeer } from "../../mocks/beerMocks";
import { store } from "../../redux/store/store";
import SingleBeer from "./SingleBeer";

describe("Given a SingleBeer component", () => {
  describe("When it's instantiated with a beer", () => {
    test("Then it should show heading with a name of beer", () => {
      const nameBeer = singleBeer.name;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <SingleBeer beer={singleBeer} />
          </Provider>
        </BrowserRouter>
      );
      const nameHeader = screen.getByRole("heading", { level: 2 });

      expect(nameHeader).toHaveTextContent(nameBeer);
    });
  });
});
