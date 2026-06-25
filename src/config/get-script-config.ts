export const getScriptConfig = () => {

  const script =
    document.querySelector(
      "#crm-widget-script"
    ) as HTMLScriptElement | null;

  if (!script) {
    throw new Error(
      "Widget script não encontrado"
    );
  }

  return {
    key: script.dataset.key ?? "",
    position:
      script.dataset.position === "left"
        ? "left"
        : "right",
        debug:
 script.dataset.debug === "true"
  };
};