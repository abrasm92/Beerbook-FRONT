import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { singleBeer } from "../../mocks/beerMocks";
import { store } from "../../redux/store/store";
import DetailBeer from "./DetailBeer";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a DetailBeer component", () => {
  describe("When it's rendered and user click on edit button", () => {
    test("Then it shold call navigate with", () => {
      const beer = singleBeer;
      const buttonName = "Editar";
      const expectPath = `/editar-cerveza/${singleBeer.id}`;

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailBeer beer={beer} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: buttonName });
      userEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalledWith(expectPath);
    });
  });

  describe("When it's rendered and user click on delete button", () => {
    test("Then it shold call navigate with", () => {
      const beer = singleBeer;
      const buttonName = "Eliminar";
      const mockId = 1;
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
          page: mockId,
        }),
      }));

      render(
        <BrowserRouter>
          <Provider store={store}>
            <DetailBeer beer={beer} />
          </Provider>
        </BrowserRouter>
      );

      const button = screen.getByRole("button", { name: buttonName });
      userEvent.click(button);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
