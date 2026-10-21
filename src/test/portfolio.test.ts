import { describe, expect, it } from "vitest";
import { PROJECTS } from "@/lib/site";

describe("Client-supplied portfolio", () => {
  it("contains only the five supplied website destinations", () => {
    expect(PROJECTS.map((project) => project.url)).toEqual([
      "https://lumia-shooting-portfolio.vercel.app/",
      "https://sagesse-memeton-psi.vercel.app/",
      "https://genie-s1m3.vercel.app/",
      "https://warren-adjovi-two.vercel.app/",
      "https://paradise-abomey.lovable.app/",
    ]);
  });
});