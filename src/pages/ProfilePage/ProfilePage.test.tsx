import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ProfilePage from "./ProfilePage";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Givwn a ProfilePage component", () => {
  describe("When it's rendered with a userData on state", () => {
    test("Then it should call navigate", () => {
      const buttonText = "Agregar una cerveza";
      const mockuserSlice = createSlice({
        name: "user",
        initialState: {
          id: "1234",
          data: {
            name: "admin",
          },
        },
        reducers: {},
      });
      const uiMockSlice = createSlice({
        name: "ui",
        initialState: {
          loading: false,
        },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: {
          user: mockuserSlice.reducer,
          ui: uiMockSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <ProfilePage />
          </Provider>
        </BrowserRouter>
      );

      const buttonToAgree = screen.getByRole("button", { name: buttonText });
      userEvent.click(buttonToAgree);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's rendered without a userData on state", () => {
    test("Then it should call navigate", () => {
      const altImage = "404";
      const mockuserSlice = createSlice({
        name: "user",
        initialState: {
          id: "1234",
          data: {},
        },
        reducers: {},
      });
      const uiMockSlice = createSlice({
        name: "ui",
        initialState: {
          loading: false,
        },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: {
          user: mockuserSlice.reducer,
          ui: uiMockSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <ProfilePage />
          </Provider>
        </BrowserRouter>
      );

      const buttonToAgree = screen.getByAltText(altImage);

      expect(buttonToAgree).toBeInTheDocument();
    });
  });
});
