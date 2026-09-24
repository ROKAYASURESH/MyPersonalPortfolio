import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

beforeEach(() => {
  window.scrollTo = jest.fn();
  localStorage.clear();
});
const page = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

test("home exposes the introduction, projects, skills, and real experience", () => {
  page("/");
  expect(
    screen.getByRole("heading", { name: /Hi, I’m Suresh|Hi, I'm Suresh/ }),
  ).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Download résumé/ })).toHaveAttribute(
    "download",
  );
  expect(screen.getByText("Upveda Technology Pvt. Ltd")).toBeInTheDocument();
  expect(screen.queryByText("90%")).not.toBeInTheDocument();
});

test("mobile menu closes with Escape and restores keyboard focus", () => {
  page("/");
  const menu = screen.getByRole("button", { name: "Menu" });
  fireEvent.click(menu);
  expect(menu).toHaveAttribute("aria-expanded", "true");
  fireEvent.keyDown(document, { key: "Escape" });
  expect(menu).toHaveAttribute("aria-expanded", "false");
  expect(menu).toHaveFocus();
});

test("about preserves the education and experience sections", () => {
  page("/about");
  fireEvent.click(screen.getByRole("button", { name: "Education" }));
  expect(screen.getByText("University of Sunderland")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Experience" }));
  expect(screen.getByText("Upveda Technology Pvt. Ltd")).toBeInTheDocument();
});

test("project route keeps its screenshot and handles unknown projects", () => {
  const view = page("/portfoliodetails/Portfolio");
  expect(
    screen.getByRole("heading", { name: "Portfolio" }),
  ).toBeInTheDocument();
  expect(screen.getByAltText("Portfolio")).toHaveAttribute("src");
  view.unmount();
  page("/portfoliodetails/missing");
  expect(screen.getByText("Project not found")).toBeInTheDocument();
});

test("contact explains the email handoff and fields have accessible labels", () => {
  page("/contact");
  expect(screen.getByLabelText("Full Name")).toBeRequired();
  expect(screen.getByLabelText("Email Address")).toHaveAttribute(
    "type",
    "email",
  );
  expect(screen.getByLabelText("Your Message")).toBeRequired();
  expect(screen.getByText(/This form prepares a draft/)).toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Prepare email" }),
  ).toBeInTheDocument();
});

test("theme switch persists the chosen theme", () => {
  page("/");
  fireEvent.click(screen.getByRole("button", { name: "Toggle Theme" }));
  expect(document.documentElement).toHaveAttribute("data-theme", "dark");
  expect(localStorage.getItem("theme")).toBe("dark");
});
