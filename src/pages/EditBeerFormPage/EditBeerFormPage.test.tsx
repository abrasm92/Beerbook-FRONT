import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reactTestRenderer from "react-test-renderer";
import { groupOfBeer, singleBeer } from "../../mocks/beerMocks";
import { store } from "../../redux/store/store";
import EditBeerFormPage from "./EditBeerFormPage";

describe("Given a EditBeerFormPage component", () => {
  describe("When it's rendered", () => {
    test("Then it sould show button to editBeer", () => {
      const editForm = reactTestRenderer.create(
        <Provider store={store}>
          <EditBeerFormPage />
        </Provider>
      );

      expect(editForm).toMatchSnapshot();
    });

    test("Then it should call dispatch 1 time to get id by params", async () => {
      const beerMockSlice = createSlice({
        name: "beer",
        initialState: {
          page: 0,
          listOfBeers: groupOfBeer,
          singleBeer: singleBeer,
        },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { beer: beerMockSlice.reducer },
      });
      const mockId = `${singleBeer.id}`;
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useParams: () => ({
          id: mockId,
        }),
      }));
      const textButton = "Editar cerveza";

      await render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <EditBeerFormPage />
          </Provider>
        </BrowserRouter>
      );

      const buttonSendEdit = screen.getByRole("button", { name: textButton });

      expect(buttonSendEdit).toBeInTheDocument();
    });
  });
});
