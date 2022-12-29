import React from "react";
import { render, screen } from "@testing-library/react";
import {DownloadCertificateForm} from "./components/pages/DownloadCertificateForm";
import { BrowserRouter } from "react-router-dom";

test("renew form", () => {
    render(<BrowserRouter><DownloadCertificateForm/></BrowserRouter>);
    const title = screen.queryByText("Download your Certificate");
    const aliasName = screen.queryAllByTestId("alias-element");
    const button = screen.queryAllByTestId("button-element");
    expect(title).toBeDefined();
    expect(aliasName).toBeDefined();
    expect(button).toBeDefined();
});