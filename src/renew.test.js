import React from "react";
import { render, screen } from "@testing-library/react";
import {RenewForm} from "./components/pages/RenewForm";
import { BrowserRouter } from "react-router-dom";

test("renew form", () => {
    render(<BrowserRouter><RenewForm/></BrowserRouter>);
    const title = screen.queryByText("Renew your Certificate");
    const aliasName = screen.queryAllByTestId("alias-element");
    const renewYear = screen.queryAllByTestId("year-element");
    const button = screen.queryAllByTestId("button-element");
    expect(title).toBeDefined();
    expect(aliasName).toBeDefined();
    expect(renewYear).toBeDefined();
    expect(button).toBeDefined();
});