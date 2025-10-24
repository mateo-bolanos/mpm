import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./specs",
  webServer: {
    command: "npm run dev",
    url: "http://127.0.0.1:5173",
    reuseExistingServer: !process.env.CI
  }
});
