import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given a Header component", () => {
  describe("When it's instanciated", () => {
    test("Then it should show an image with a logo", () => {
      const imageAltText = "Beerbook logo";
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "", id: "", logged: false },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const image = screen.getByAltText(imageAltText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it's instantiated with user logged", () => {
    test("Then it should show button with 'Cerrar sesión' on content text", () => {
      jest.spyOn(Storage.prototype, "setItem").mockReturnThis();
      const expectButtonText = "Cerrar sesión";
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "admin", id: "1234", logged: true },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const buttonText = screen.getByRole("button", {
        name: expectButtonText,
      });

      expect(buttonText).toHaveTextContent(expectButtonText);
    });
  });

  describe("When it's instantiated with unlogged user", () => {
    test("Then it should show button with 'Iniciar sesión' on content text", () => {
      const expectButtonText = "Iniciar sesión";
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "", id: "", logged: false },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const buttonText = screen.getByRole("button", {
        name: expectButtonText,
      });
      userEvent.click(buttonText);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });

  describe("When it's instantiated with logged user", () => {
    test("Then it should show button with 'Iniciar sesión' on content text", () => {
      const expectButtonText = "Cerrar sesión";
      const userMockSlice = createSlice({
        name: "user",
        initialState: { name: "admin", id: "1234", logged: true },
        reducers: {},
      });
      const mockStore = configureStore({
        reducer: { user: userMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );
      const buttonText = screen.getByRole("button", {
        name: expectButtonText,
      });
      userEvent.click(buttonText);

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
