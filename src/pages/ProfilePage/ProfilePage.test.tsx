import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ProfilePage from "./ProfilePage";

describe("Givwn a ProfilePage component", () => {
  describe("When it's rendered with a userData on state", () => {
    test("Then it should show a profile image", () => {
      const altTextImage = "imagen de perfil";
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
      const mockStore = configureStore({
        reducer: {
          user: mockuserSlice.reducer,
        },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <ProfilePage />
          </Provider>
        </BrowserRouter>
      );

      const image = screen.getByAltText(altTextImage);

      expect(image).toBeInTheDocument();
    });
  });
});
