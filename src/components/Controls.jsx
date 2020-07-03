import React from "react";

const Controls = ({ handleChange, animation }) => {
  const {
    duration,
    initialColor,
    initialHeight,
    initialWidth,
    initialRotation,
    initialScale,
    initialShape,
    finalColor,
    finalHeight,
    finalWidth,
    finalRotation,
    finalScale,
    finalShape,
    resetAnimation,
    randomAnimation,
  } = animation;
  return (
    <section className="inputControl">
      <form className="initial__input inputs">
        <label htmlFor="duration">Duration</label>
        <input
          type="range"
          id="duration"
          min="1"
          max="20"
          value={duration}
          onChange={handleChange}
        />
        <label htmlFor="initialHeight">Starting Height</label>
        <input
          type="range"
          id="initialHeight"
          min="1"
          max="300"
          value={initialHeight}
          onChange={handleChange}
        />
        <label htmlFor="initialWidth">Starting Width</label>
        <input
          type="range"
          id="initialWidth"
          min="1"
          max="300"
          value={initialWidth}
          onChange={handleChange}
        />
        <label htmlFor="initialRotation"> Rotation</label>
        <input
          type="range"
          id="initialRotation"
          min="0"
          max="360"
          onChange={handleChange}
          value={initialRotation}
        />
        <label htmlFor="initialColor">Starting Color</label>
        <select
          name="initialColor"
          id="initialColor"
          className="colors"
          value={initialColor}
          onChange={handleChange}
        >
          <option value="#3399FF">blue</option>
          <option value="#FF3333">red</option>
          <option value="#FA6900">orange</option>
          <option value="#FEAE2D">yellow</option>
          <option value="#00CC99">green</option>
          <option value="#9A12B3">purple</option>
          <option value="black">black</option>
          <option value="white">white</option>
        </select>
        <label htmlFor="initialScale">Starting Scale</label>
        <input
          type="range"
          id="initialScale"
          min="0"
          max="2"
          step=".1"
          value={initialScale}
          onChange={handleChange}
        />
        <label htmlFor="initialShape">Starting Shape</label>
        <input
          type="range"
          id="initialShape"
          min="0"
          max="100"
          step="1"
          value={initialShape}
          onChange={handleChange}
        />
      </form>
      <form className="final__input inputs">
        <label htmlFor="finalHeight"> Final Height</label>
        <input
          type="range"
          id="finalHeight"
          min="1"
          max="300"
          value={finalHeight}
          onChange={handleChange}
        />
        <label htmlFor="finalWidth">Final Width</label>
        <input
          type="range"
          id="finalWidth"
          min="1"
          max="300"
          value={finalWidth}
          onChange={handleChange}
        />
        <label htmlFor="finalRotation">Final Rotation</label>
        <input
          type="range"
          id="finalRotation"
          min="0"
          max="360"
          value={finalRotation}
          onChange={handleChange}
        />
        <label htmlFor="finalColor">Final Color</label>
        <select
          name="finalColor"
          id="finalColor"
          className="colors"
          value={finalColor}
          onChange={handleChange}
        >
          <option value="#3399FF">blue</option>
          <option value="#FF3333">red</option>
          <option value="#FA6900">orange</option>
          <option value="#FEAE2D">yellow</option>
          <option value="#00CC99">green</option>
          <option value="#9A12B3">purple</option>
          <option value="black">black</option>
          <option value="white">white</option>
        </select>
        <label htmlFor="finalScale">Final scale</label>
        <input
          type="range"
          id="finalScale"
          min="0"
          max="2"
          step=".1"
          value={finalScale}
          onChange={handleChange}
        />
        <label htmlFor="finalShape">Final Shape</label>
        <input
          type="range"
          id="finalShape"
          min="0"
          max="100"
          step="1"
          value={finalShape}
          onChange={handleChange}
        />
        <button className="randomAnimation" onClick={randomAnimation}>
          Random
        </button>
        <button className="resetAnimation" onClick={resetAnimation}>
          Reset
        </button>
        {/* <button className="save" onClick={fbUpload.bind(this)}>
          Save
        </button> */}
      </form>
    </section>
  );
};

export default Controls;
