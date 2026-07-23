// @vitest-environment jsdom

import "@testing-library/jest-dom/vitest";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  within,
} from "@testing-library/react";
import { afterEach, beforeAll, describe, expect, it, vi } from "vitest";
import { Portfolio } from "./Portfolio";

beforeAll(() => {
  vi.stubGlobal(
    "IntersectionObserver",
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

afterEach(cleanup);

describe("Portfolio", () => {
  it("renders every media surface at 16:9", () => {
    render(<Portfolio />);

    const media = screen.getAllByTestId("portfolio-media");

    expect(media).toHaveLength(16);
    media.forEach((item) => {
      expect(item).toHaveStyle({ aspectRatio: "16 / 9" });
    });
  });

  it("plays an individual YouTube video inside its card", () => {
    render(<Portfolio />);

    fireEvent.click(
      screen.getByRole("button", { name: "Play Music Video 01" }),
    );

    expect(screen.getByTitle("Music Video 01 video player")).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/lhdVCGHgEl8?autoplay=1",
    );
  });

  it("plays a YouTube playlist inside its card", () => {
    render(<Portfolio />);

    fireEvent.click(
      screen.getByRole("button", { name: "Play Live Sessions 01" }),
    );

    expect(screen.getByTitle("Live Sessions 01 video player")).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/videoseries?list=PLXTyIKabLaztaTeI-O4ihytqiSjmEkjiq&autoplay=1",
    );
  });

  it("keeps the external event in a separate events area", () => {
    render(<Portfolio />);

    const events = screen.getByRole("region", { name: "Events" });

    expect(
      within(events).getByRole("link", { name: /Aalakatha/ }),
    ).toHaveAttribute("href", "https://aalakatha.lk/");
  });
});
