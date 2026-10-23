import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";
import { modules } from "../modules/registry";
const mount = (path = "/") =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
describe("workspace", () => {
  it("discovers every registered module in the directory", () => {
    mount("/modules");
    for (const m of modules)
      expect(
        screen.getByRole("heading", { name: m.title }),
      ).toBeInTheDocument();
    expect(new Set(modules.map((m) => m.id)).size).toBe(modules.length);
  });
  it("navigates from the dashboard to a module and back", async () => {
    const user = userEvent.setup();
    mount();
    await user.click(screen.getByRole("link", { name: /Browse modules/ }));
    expect(
      screen.getByRole("heading", { name: "Learning modules" }),
    ).toBeInTheDocument();
    await user.click(screen.getByRole("link", { name: /Three-Phase Systems/ }));
    expect(
      screen.getByRole("heading", { name: "Three-Phase Systems" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/not implemented yet/)).toBeInTheDocument();
    await user.click(screen.getByRole("link", { name: /All modules/ }));
    expect(
      screen.getByRole("heading", { name: "Learning modules" }),
    ).toBeInTheDocument();
  });
  it("toggles and persists theme across remounts", async () => {
    const user = userEvent.setup();
    const view = mount();
    await user.click(
      screen.getByRole("button", { name: "Switch to dark theme" }),
    );
    expect(document.documentElement.dataset.theme).toBe("dark");
    view.unmount();
    mount();
    expect(
      screen.getByRole("button", { name: "Switch to light theme" }),
    ).toBeInTheDocument();
  });
  it("handles unknown module URLs", () => {
    mount("/modules/missing");
    expect(
      screen.getByRole("heading", { name: "Page not found" }),
    ).toBeInTheDocument();
  });
});
