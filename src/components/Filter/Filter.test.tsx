import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../redux/store/store";
import { filterBeerThunk } from "../../redux/thunks/beerThunks";
import Filter from "./Filter";

describe("Given a Filter component", () => {
  describe("When user select an style on filter type", () => {
    test("Then it should change this value", () => {
      const selectName = "filterType";
      const option = "style";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const select = screen.getByTestId(selectName);
      userEvent.selectOptions(select, option);

      expect(select).toHaveProperty("value", option);
    });
  });

  describe("When user select an country on filter type", () => {
    test("Then it should change this value", () => {
      const selectName = "filterType";
      const option = "country";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const select = screen.getByTestId(selectName);
      userEvent.selectOptions(select, option);

      expect(select).toHaveProperty("value", option);
    });
  });

  describe("When user select an degrees on filter type", () => {
    test("Then it should change this value", () => {
      const selectName = "filterType";
      const option = "degrees";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const select = screen.getByTestId(selectName);
      userEvent.selectOptions(select, option);

      expect(select).toHaveProperty("value", option);
    });
  });

  describe("When user select an IBU on filter type", () => {
    test("Then it should change this value", () => {
      const selectName = "filterType";
      const option = "IBU";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const select = screen.getByTestId(selectName);
      userEvent.selectOptions(select, option);

      expect(select).toHaveProperty("value", option);
    });
  });

  describe("When user click on 'Filtrar' button", () => {
    test("Then it should call dispatch", () => {
      const buttonName = "Filtrar";
      const thunk = filterBeerThunk("hola", "hola", "0");
      const dispatch = jest.fn();

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );
      thunk(dispatch);
      const buttonFilter = screen.getByRole("button", { name: buttonName });
      userEvent.click(buttonFilter);

      expect(dispatch).toHaveBeenCalled();
    });
  });

  describe("When user select an IBU on filter type and filterValue '20", () => {
    test("Then it should change this value", () => {
      const selectName = "filterType";
      const option = "IBU";
      const selectNameValue = "filterValue-IBU";
      const optionValue = "20";

      render(
        <BrowserRouter>
          <Provider store={store}>
            <Filter />
          </Provider>
        </BrowserRouter>
      );

      const select = screen.getByTestId(selectName);
      userEvent.selectOptions(select, option);
      const selectValue = screen.getByTestId(selectNameValue);
      userEvent.selectOptions(selectValue, optionValue);

      expect(selectValue).toHaveProperty("value", optionValue);
    });
  });
});
