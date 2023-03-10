import { vi, it, describe } from "vitest";
import { screen, render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("test app", () => {
  it("should render app", () => {
    render(<App />);

    expect(screen.getByText("Vite + React")).toBeInTheDocument();
  });
});
