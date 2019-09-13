import * as React from "react";

export const DefaultHeaders = () => (
  <div className="story-headers grid">
    <div className="col-8">
      <h1>H1 Header Style</h1>
      <pre>h1</pre>
      <hr />

      <h2>H2 Header Style</h2>
      <pre>h2</pre>
      <hr />

      <h3>H3 Header Style</h3>
      <pre>h3</pre>
      <hr />

      <h4>H4 Header Style</h4>
      <pre>h4</pre>
      <hr />

      <h5>H5 Header Style</h5>
      <pre>h5</pre>
    </div>
    <div className="col-4">
      <h3>Emphasis and Uppercase</h3>
      <p>Available for all header types:</p>

      <h3 className="emphasized">Header Style (emphasized)</h3>
      <pre>.emphasized</pre>
      <h3 className="uppercase">Header Style (uppercase)</h3>
      <pre>.uppercase</pre>
    </div>
  </div>
);
