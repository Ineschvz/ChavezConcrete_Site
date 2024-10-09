 'use client'
import * as React from "react";
import mapboxgl from "mapbox-gl";



function MapboxMap() {
  const [map, setMap] = React.useState(null);
  const mapNode = React.useRef(null);
  const mapboxAccessToken = 'pk.eyJ1IjoiaW5lc2NodnowMSIsImEiOiJjbHhjZzVpc2UwMnRzMmtxMHNlcms0czlvIn0.qiMdou5pWmvz_29oTINtcg';

  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: mapboxAccessToken, // Ensure the token is set in .env
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-80.7934, 35.7821], // Example coordinates for centering the map
      zoom: 5,
    }); 

    const marker1 = new mapboxgl.Marker()
    .setLngLat([-80.7934, 35.7821])
    .addTo(mapboxMap);

const geoJsonData = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Polygon",
          "coordinates": [
            [
              [-78.63444425457965, 38.684089400085405],
              [-78.99887566066842, 38.66956358933577],
              [-79.35937241713171, 38.62614361783072],
              [-79.71205721066029, 38.554299516878025],
              [-80.05316578498264, 38.454806906770294],
              [-78.63444425457965, 38.684089400085405] // Closing the polygon
            ]
          ]
        }
      }
    ]
  };


    setMap(mapboxMap);

    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} className="w-full h-full" />;

 

}


export default MapboxMap;
