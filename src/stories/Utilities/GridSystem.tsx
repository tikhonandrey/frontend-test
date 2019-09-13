import * as React from "react";

export const GridSystem = () => (
  <div className="story-gridsystem">
    <h2>Grid System</h2>
    <p>
      This is a VERY simple and light implementation of a CSS 12 column grid
      using css-grid. It uses the bootstrap style grid naming pattern.
    </p>
    <pre>
      {`
  <div className="grid">
    <div className="col-8"></div>
    <div className="col-4"></div>
  </div>
      `}
    </pre>
    <h3>Simple Example</h3>
    <div className="grid">
      <div className="col-8"></div>
      <div className="col-4"></div>
    </div>
    <h3>Complex Example</h3>
    <div className="grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div className="grid">
      <div className="col-3"></div>
      <div className="col-3"></div>
      <div className="col-3"></div>
      <div className="col-3"></div>
      <div className="col-6"></div>
      <div className="col-3"></div>
      <div className="col-3 row-2 m-auto"></div>
      <div className="col-2 row-2"></div>
      <div className="col-6"></div>
      <div></div>
      <div className="col-2"></div>
      <div className="col-8"></div>
    </div>
  </div>
);
