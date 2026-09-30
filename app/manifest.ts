import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Why You Matter — International Crisis Sanctuary",
    short_name: "Why You Matter",
    description:
      "A global sanctuary for moments of crisis, doubt, and exhaustion. 250+ countries crisis directory and grounding tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#070b14",
    theme_color: "#070b14",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
    ],
  };
}
