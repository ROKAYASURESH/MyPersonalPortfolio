import { render, screen, fireEvent, act } from "@testing-library/react";
import ScrollReveal from "./ScrollReveal";

const originalObserver = window.IntersectionObserver;
const originalMatchMedia = window.matchMedia;
let enter, changePreference, observer;

beforeEach(() => {
  observer = { observe: jest.fn(), disconnect: jest.fn() };
  window.IntersectionObserver = jest.fn((callback) => {
    enter = callback;
    return observer;
  });
  window.matchMedia = jest.fn(() => ({
    matches: false,
    addEventListener: jest.fn((type, callback) => {
      changePreference = callback;
    }),
    removeEventListener: jest.fn(),
  }));
});
afterEach(() => {
  window.IntersectionObserver = originalObserver;
  window.matchMedia = originalMatchMedia;
});

test("reveals a group once on entry and releases its observer", () => {
  render(
    <ScrollReveal as="section" aria-label="Work">
      Project notes
    </ScrollReveal>,
  );
  const group = screen.getByRole("region", { name: "Work" });
  expect(group).toBeVisible();
  act(() => enter([{ isIntersecting: false }]));
  expect(group).not.toHaveClass("is-revealed");
  act(() => enter([{ isIntersecting: true }]));
  expect(group).toHaveClass("is-revealed");
  expect(observer.disconnect).toHaveBeenCalled();
});

test("keyboard focus immediately finishes a reveal", () => {
  render(
    <ScrollReveal>
      <a href="/portfolio">Work</a>
    </ScrollReveal>,
  );
  act(() => enter([{ isIntersecting: true }]));
  const link = screen.getByRole("link");
  fireEvent.focusIn(link);
  expect(link.parentElement).not.toHaveClass("is-revealed");
  expect(link).toBeVisible();
});

test("reduced motion never starts an observer", () => {
  window.matchMedia = jest.fn(() => ({ matches: true }));
  render(<ScrollReveal>Visible content</ScrollReveal>);
  expect(window.IntersectionObserver).not.toHaveBeenCalled();
  expect(screen.getByText("Visible content")).toBeVisible();
});

test("switching to reduced motion cancels an active reveal", () => {
  render(<ScrollReveal>Visible content</ScrollReveal>);
  act(() => enter([{ isIntersecting: true }]));
  act(() => changePreference({ matches: true }));
  expect(screen.getByText("Visible content")).not.toHaveClass("is-revealed");
});

test("missing IntersectionObserver preserves visible content", () => {
  window.IntersectionObserver = undefined;
  render(<ScrollReveal>Visible content</ScrollReveal>);
  expect(screen.getByText("Visible content")).toBeVisible();
});

test("unmounting disconnects observation and preference listeners", () => {
  const preference = window.matchMedia();
  window.matchMedia.mockReturnValue(preference);
  const view = render(<ScrollReveal>Content</ScrollReveal>);
  view.unmount();
  expect(observer.disconnect).toHaveBeenCalled();
  expect(preference.removeEventListener).toHaveBeenCalledWith(
    "change",
    expect.any(Function),
  );
});
