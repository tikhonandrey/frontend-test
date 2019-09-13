import * as React from "react";
import { times } from "lodash";

export class PixelsToRemChart extends React.Component {
  state = {
    result: 0
  };

  pixelsToRem(pixels: number) {
    return pixels / (16 * 1);
  }

  setRem = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ result: this.pixelsToRem(parseFloat(e.target.value)) });
  };

  renderTable = (count: number, start: number) => {
    let n = start;
    return (
      <table>
        <thead>
          <tr>
            <td>Pixels</td>
            <td>REM</td>
          </tr>
        </thead>
        <tbody>
          {times(count, () => {
            const p = n;
            n++;
            return (
              <tr key={`p-${p}`}>
                <td>{p}px</td>
                <td>{this.pixelsToRem(p)}rem</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  render() {
    return (
      <div>
        <p>
          This assumes the <code>:root</code> value is set to <code>16px</code>.
        </p>
        <div className="">
          <div>
            <label htmlFor="pixels">Value in Pixels: </label>
            <input
              type="number"
              id="pixels"
              onChange={this.setRem}
              placeholder="0"
            />
          </div>
          <div>
            <h4 className="uppercase">Result:</h4>
            <div>
              <pre>{this.state.result}rem</pre>
            </div>
          </div>
        </div>
        <h2>Quick Reference Chart</h2>
        <div className="grid">
          <div className="col-4">{this.renderTable(50, 1)}</div>
          <div className="col-4">{this.renderTable(50, 51)}</div>
        </div>
      </div>
    );
  }
}
