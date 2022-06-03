import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import LoginFormPage from "../../pages/LoginPage/LoginFormPage";
import CheckNotLogged from "./CheckNotLogged";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Given", () => {
  describe("When", () => {
    test("Then", () => {
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
            <CheckNotLogged>
              <LoginFormPage />
            </CheckNotLogged>
          </Provider>
        </BrowserRouter>
      );

      expect(mockedUsedNavigate).toHaveBeenCalled();
    });
  });
});
