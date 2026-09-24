import { render, screen, fireEvent, act } from "@testing-library/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollReveal from "./ScrollReveal";

const originalMatchMedia = window.matchMedia;
let triggerConfig;
let killMock;

beforeEach(() => {
  triggerConfig = null;
  killMock = jest.fn();
  jest.spyOn(ScrollTrigger, "create").mockImplementation((config) => {
    triggerConfig = config;
    return { kill: killMock };
  });
  window.matchMedia = jest.fn(() => ({
    matches: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
});
afterEach(() => {
  ScrollTrigger.create.mockRestore();
  window.matchMedia = originalMatchMedia;
});

test("reveals a group once on entry", () => {
  render(
    <ScrollReveal as="section" aria-label="Work">
      Project notes
    </ScrollReveal>,
  );
  const group = screen.getByRole("region", { name: "Work" });
  expect(group).not.toHaveClass("is-revealed");
  expect(ScrollTrigger.create).toHaveBeenCalledWith(
    expect.objectContaining({ start: "top 88%", once: true }),
  );
  act(() => triggerConfig.onEnter());
  expect(group).toHaveClass("is-revealed");
});

test("keyboard focus immediately finishes a reveal", () => {
  render(
    <ScrollReveal>
      <a href="/portfolio">Work</a>
    </ScrollReveal>,
  );
  const link = screen.getByRole("link");
  expect(link.parentElement).not.toHaveClass("is-revealed");
  fireEvent.focusIn(link);
  expect(link.parentElement).toHaveClass("is-revealed");
  expect(killMock).toHaveBeenCalled();
});

test("reduced motion never starts a trigger and keeps content visible", () => {
  window.matchMedia = jest.fn(() => ({
    matches: true,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  render(<ScrollReveal>Visible content</ScrollReveal>);
  expect(ScrollTrigger.create).not.toHaveBeenCalled();
  const content = screen.getByText("Visible content");
  expect(content).toHaveClass("is-revealed");
  expect(content).toBeVisible();
});

test("unmounting kills its trigger", () => {
  const view = render(<ScrollReveal>Content</ScrollReveal>);
  view.unmount();
  expect(killMock).toHaveBeenCalled();
});
