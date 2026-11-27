import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const internalHost = process.env.TAURI_DEV_HOST ?? "localhost";

const nextConfig: NextConfig = {
  // Tauri hosts static web assets instead of running a Next.js server.
  output: "export",
  images: {
    // The Next.js image optimizer requires a server and is not available in
    // a static Tauri bundle.
    unoptimized: true,
  },
  // Ensure the Tauri webview can resolve scripts and styles from the dev
  // server while keeping production assets relative to the bundled app.
  assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
};

export default nextConfig;
