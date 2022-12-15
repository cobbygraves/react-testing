import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import Form from "./Form";

describe("Form", () => {
  test("to enter username and password", async () => {
    user.setup();
    render(<Form />);
    const usernameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    await user.type(usernameElement, "cobbygraves");
    expect(usernameElement).toHaveValue("cobbygraves");

    const passwordElement = screen.getByLabelText("Password", {
      selector: "input",
    });
    await user.type(passwordElement, "rmeodesaint2357");
    expect(passwordElement).toHaveValue("rmeodesaint2357");
  });

  test("clicking the button renders empty username and password", async () => {
    user.setup();
    render(<Form />);
    const usernameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    const passwordElement = screen.getByLabelText("Password", {
      selector: "input",
    });
    const buttonElement = screen.getByRole("button", { name: "Send" });
    await user.click(buttonElement);
    expect(usernameElement).toHaveValue("failed");
    expect(passwordElement).toHaveValue("");
  });
});
