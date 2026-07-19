(function () {
  const STORAGE_KEY = "indoDataMode";
  const VALID_MODES = ["live", "mock"];

  let mode = "live";

  try {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get("api");

    if (requested && VALID_MODES.includes(requested)) {
      window.localStorage.setItem(STORAGE_KEY, requested);
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored && VALID_MODES.includes(stored)) {
      mode = stored;
    }
  } catch (_error) {
    mode = "live";
  }

  window.INDO_DATA_MODE = mode;

  if (mode === "mock" && window.INDONESIA_DATA_MOCK && typeof window.INDONESIA_DATA_MOCK === "object") {
    window.INDONESIA_DATA = window.INDONESIA_DATA_MOCK;
  }
})();
