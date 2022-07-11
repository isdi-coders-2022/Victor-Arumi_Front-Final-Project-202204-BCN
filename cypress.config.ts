import { defineConfig } from "cypress";

export default defineConfig({
  videoCompression: 20,
  env: {
    base_url:
      "https://victor-arumi-front-final-project-202204-bcn.netlify.app/",
  },
  e2e: {
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome" && browser.isHeadless) {
          launchOptions.args.push("--window-size=1920,1080");

          launchOptions.args.push("--force-device-scale-factor=1");
        }

        if (browser.name === "electron" && browser.isHeadless) {
          launchOptions.preferences.width = 1920;
          launchOptions.preferences.height = 1080;
        }

        if (browser.name === "firefox" && browser.isHeadless) {
          launchOptions.args.push("--width=1920");
          launchOptions.args.push("--height=1080");
        }

        return launchOptions;
      });
    },
  },
});
