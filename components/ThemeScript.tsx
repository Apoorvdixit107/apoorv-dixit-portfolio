export function ThemeScript() {
  const script = `
    (function () {
      try {
        var stored = localStorage.getItem("portfolio-theme");
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        var theme = stored === "dark" || stored === "light" ? stored : prefersDark ? "dark" : "light";
        document.documentElement.dataset.theme = theme;
      } catch (e) {}
    })();
  `;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
