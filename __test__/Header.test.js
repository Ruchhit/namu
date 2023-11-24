import { fireEvent, render , screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../src/utils/appStore";
import Header from "../src/Components/Header";
import "@testing-library/jest-dom";

test("should render a header component with a login isButtonElement",()=>{
    // this we need to do for all the test cases
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();
});

// we can even write regex in argument
test("should render a header component with a login isButtonElement",()=>{
    // this we need to do for all the test cases
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )
    const groceryButton = screen.getByText(/Gro/);
    expect(groceryButton).toBeInTheDocument();
});

// case when we click to login button and it changed to logout
test("should change login button to logout on click",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name : "login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name : "logout"});
    expect(logoutButton).toBeInTheDocument();
})