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
      screen.getByRole("button", {
        name: "Play Mihiran - Shawty (Official Music Video)",
      }),
    );

    expect(
      screen.getByTitle(
        "Mihiran - Shawty (Official Music Video) video player",
      ),
    ).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/lhdVCGHgEl8?autoplay=1",
    );
  });

  it("plays a YouTube playlist inside its card", () => {
    render(<Portfolio />);

    fireEvent.click(
      screen.getByRole("button", {
        name: "Play Liyathambara Live In Concert 2022 (Popular Hits)",
      }),
    );

    expect(
      screen.getByTitle(
        "Liyathambara Live In Concert 2022 (Popular Hits) video player",
      ),
    ).toHaveAttribute(
      "src",
      "https://www.youtube-nocookie.com/embed/videoseries?list=PLXTyIKabLaztaTeI-O4ihytqiSjmEkjiq&autoplay=1",
    );
  });

  it("uses official titles instead of numbered placeholder names", () => {
    render(<Portfolio />);

    const playButtons = screen.getAllByRole("button", { name: /^Play / });

    expect(playButtons).toHaveLength(15);
    playButtons.forEach((button) => {
      expect(button).not.toHaveAccessibleName(
        /Play (Music Video|Live Sessions) \d+/,
      );
    });
  });

  it("keeps the external event in a separate events area", () => {
    render(<Portfolio />);

    const events = screen.getByRole("region", { name: "Events" });

    expect(
      within(events).getByRole("link", { name: /Aalakatha/ }),
    ).toHaveAttribute("href", "https://aalakatha.lk/");
  });
});
