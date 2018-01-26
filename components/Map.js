import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import { default as FaSpinner } from "react-icons/lib/fa/spinner";

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    <style jsx>{`
      #map {
        border: 1px solid #eee;
        padding: 0;
        margin: 0;
        top: 0;
        left: 0;
        bottom: 0;
        left: 0;
      }
      h1 {
        font: 16px Helvetica, Arial;
        font-weight: bold;
        margin: 10px 0;
      }
    `}</style>
  </GoogleMap>
));

export default Map