import * as React from "react";
import * as Leaflet from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { joinClassList } from "../../helpers";

Leaflet.Icon.Default.imagePath =
  "//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/";

export interface MapCoordinateProps {
  latitude: number;
  longitude: number;
}

export interface MinimapProps {
  /**
   * Must include latitude and longitude as numbers.
   */
  data: MapCoordinateProps;
  /**
   * Optionally show a marker with popup text over the location target
   */
  popup?: string;
  className?: string;
  /**
   * Adjusts the size (height) of the map.
   */
  size?: "small" | "normal" | "large";
  /**
   * Optionally include a text label below the Map.
   */
  label?: string;
}

export const Minimap: React.FunctionComponent<MinimapProps> = ({
  data,
  popup,
  className,
  size = "normal",
  label
}) => {
  const { latitude, longitude } = data;
  const zoom: number = 13;
  const classes = [`minimap`, `${className || ""}`, `minimap__${size}`];

  return (
    <div className={joinClassList(classes)}>
      <div className="minimap--module-wrapper">
        <Map
          center={[latitude, longitude]}
          zoom={zoom}
          className="minimap--module"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          {popup ? (
            <Marker
              position={[latitude, longitude]}
              className="minimap--marker"
            >
              <Popup className="minimap--popup">
                <span className="minimap--popup-label">{popup}</span>
              </Popup>
            </Marker>
          ) : null}
        </Map>
      </div>
      {label ? <div className="minimap--label">{label}</div> : null}
    </div>
  );
};

export default Minimap;
