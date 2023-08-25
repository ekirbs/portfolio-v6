import { useEffect } from "react";
import "./variableStyle.css";

export default function VariableStyle() {
  useEffect(() => {
    const inputs = document.querySelectorAll(".controls input");

    function handleUpdate() {
      const suffix = this.dataset.sizing || "";

      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    inputs.forEach((input) => input.addEventListener("change", handleUpdate));
    inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));

    // Clean up event listeners when the component is unmounted
    return () => {
      inputs.forEach((input) =>
        input.removeEventListener("change", handleUpdate)
      );
      inputs.forEach((input) =>
        input.removeEventListener("mousemove", handleUpdate)
      );
    };
  }, []);

  return (
    <div id="variable-style" className="variable-style">
      <h2 className="variable-header">Update CSS Variables with <span className="hl">JS</span></h2>{" "}
      <div className="controls controls-top">
        <label htmlFor="spacing" className="var-label">Spacing:</label>

        <input
          id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          defaultValue="10"
          data-sizing="px"
          className="var-input"
        ></input>

        <label htmlFor="blur" className="var-label">Blur:</label>
        <input
          id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          defaultValue="5"
          data-sizing="px"
          className="var-input"
        ></input>

        <label htmlFor="base" className="var-label">Base Color:</label>
        <input
          id="base"
          type="color"
          name="base"
          defaultValue="#ffc600"
          className="var-input"
        ></input>
      </div>

      <img
        src="https://source.unsplash.com/7bwQXzbF6KE/800x500"
        className="var-img"
        alt="Variable Styles"
      ></img>

      <div className="controls controls-bottom">
        <label htmlFor="contrast" className="var-label">Contrast:</label>

        <input
          id="contrast"
          type="range"
          name="contrast"
          min="0"
          max="200"
          defaultValue="100"
          data-sizing="%"
          className="var-input"
        ></input>

        <label htmlFor="hue-rotate" className="var-label">Hue:</label>
        <input
          id="hue-rotate"
          type="range"
          name="hue-rotate"
          min="0"
          max="360"
          defaultValue="0"
          data-sizing="deg"
          className="var-input"
        ></input>

        <label htmlFor="opacity" className="var-label">Opacity:</label>
        <input
          id="opacity"
          type="range"
          name="opacity"
          min="0"
          max="100"
          defaultValue="100"
          data-sizing="%"
          className="var-input"
        ></input>
      </div>

    </div>
  );
}
