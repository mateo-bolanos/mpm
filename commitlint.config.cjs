module.exports = {
  extends: ["@commitlint/config-conventional"],
  ignores: [
    (message = "") =>
      [
        "Fixed CI file, removed long line of password validation in settings.py",
        "Update CI node:",
      ].includes(message.trim()),
  ],
};
