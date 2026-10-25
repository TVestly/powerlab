import { afterEach, describe, expect, it } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { HashRouter } from "react-router-dom";
import { App } from "./App";

const mount = () =>
  render(
    <HashRouter>
      <App />
    </HashRouter>,
  );

afterEach(() => {
  cleanup();
  window.history.replaceState(null, "", "/");
});

describe("static hosting links", () => {
  it.each([
    ["three-phase-systems", "Three-Phase Systems"],
    ["transformers", "Transformers"],
    ["transmission-lines", "Transmission Lines"],
    ["electric-machines", "Electric Machines"],
  ])(
    "opens the copied hash link for %s as an unfinished preview",
    (id, title) => {
      window.history.replaceState(null, "", `/#/modules/${id}`);
      mount();

      expect(
        screen.getByRole("heading", { name: title, level: 1 }),
      ).toBeVisible();
      expect(screen.getByText("Coming soon")).toBeVisible();
      expect(screen.getByText(/not implemented yet/)).toBeVisible();
      expect(screen.getByRole("link", { name: /All modules/ })).toHaveAttribute(
        "href",
        "#/modules",
      );
    },
  );

  it("keeps navigation in the hash and supports browser history", async () => {
    const user = userEvent.setup();
    window.history.replaceState(null, "", "/#/");
    mount();

    await user.click(screen.getByRole("link", { name: /Browse modules/ }));
    await user.click(screen.getByRole("link", { name: /Transformers/ }));
    expect(window.location.pathname).toBe("/");
    expect(window.location.hash).toBe("#/modules/transformers");

    window.history.back();
    expect(
      await screen.findByRole("heading", {
        name: "Learning modules",
        level: 1,
      }),
    ).toBeVisible();
    expect(window.location.hash).toBe("#/modules");

    window.history.forward();
    expect(
      await screen.findByRole("heading", { name: "Transformers", level: 1 }),
    ).toBeVisible();

    await user.click(screen.getByRole("link", { name: "Dashboard" }));
    expect(window.location.hash).toBe("#/");
    expect(
      screen.getByRole("heading", { name: "A place to understand.", level: 1 }),
    ).toBeVisible();
  });

  it("retains a direct topic link and both theme choices when remounted", async () => {
    const user = userEvent.setup();
    window.history.replaceState(null, "", "/#/modules/electric-machines");
    let view = mount();

    for (const theme of ["dark", "light"]) {
      await user.click(
        screen.getByRole("button", { name: `Switch to ${theme} theme` }),
      );
      await waitFor(() =>
        expect(localStorage.getItem("powerlab.theme")).toBe(theme),
      );
      view.unmount();
      view = mount();
      expect(document.documentElement.dataset.theme).toBe(theme);
      expect(window.location.hash).toBe("#/modules/electric-machines");
      expect(
        screen.getByRole("heading", { name: "Electric Machines", level: 1 }),
      ).toBeVisible();
    }
  });
});
