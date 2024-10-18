'use client';

import * as React from "react";
import mapboxgl from "mapbox-gl";



//creating our component
function MapboxMap() {
  //creating a state variable called map and a function setMap to update it using React's useState hook.
  //The initial value is set to null, meaning that before the map is created and initialized, there is no map instance
  const [map, setMap] = React.useState(null);
  // using React's useRef hook to create a reference (mapNode) to the DOM element where the Mapbox map will be rendered.
  //The reference is initialized with null, meaning it's not pointing to any DOM element yet. When React renders your component, it will assign the actual DOM element (the <div> where the map will be displayed) to mapNode.current.
  //This reference (mapNode) is used to pass the container (the div) into Mapbox’s initialization process so that the map knows where to render.
  const mapNode = React.useRef(null);
  //accesstoken key 
  const mapboxAccessToken = 'pk.eyJ1IjoiaW5lc2NodnowMSIsImEiOiJjbHhjZzVpc2UwMnRzMmtxMHNlcms0czlvIn0.qiMdou5pWmvz_29oTINtcg';

  React.useEffect(() => {
    const node = mapNode.current;
    if (typeof window === "undefined" || node === null) return;

    // Initialize the map
    const mapboxMap = new mapboxgl.Map({
      container: node,
      accessToken: mapboxAccessToken,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [-78.6382, 35.7796], // Raleigh's coordinates
      zoom: 10, 
    });

    // Add the polygon GeoJSON data as a source
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
                  [
                    -78.63444425457965,
                    38.684089400085405
                  ],
                  [
                    -78.99887566066842,
                    38.66956358933577
                  ],
                  [
                    -79.35937241713171,
                    38.62614361783072
                  ],
                  [
                    -79.71205721066029,
                    38.554299516878025
                  ],
                  [
                    -80.05316578498264,
                    38.454806906770294
                  ],
                  [
                    -80.37909952274956,
                    38.328735593649895
                  ],
                  [
                    -80.68647354140802,
                    38.17743407884608
                  ],
                  [
                    -80.9721591995686,
                    38.00251041946838
                  ],
                  [
                    -81.23332020019711,
                    37.805809958389055
                  ],
                  [
                    -81.46744178881723,
                    37.58939049281399
                  ],
                  [
                    -81.67235285483268,
                    37.355495472988345
                  ],
                  [
                    -81.84624103077931,
                    37.106525818017474
                  ],
                  [
                    -81.98766113105131,
                    36.845010907919985
                  ],
                  [
                    -82.09553746728446,
                    36.57357926472584
                  ],
                  [
                    -82.16916071682844,
                    36.29492937616903
                  ],
                  [
                    -82.20818010367564,
                    36.01180104882346
                  ],
                  [
                    -82.21259168228542,
                    35.72694760848084
                  ],
                  [
                    -82.18272350150399,
                    35.443109198472875
                  ],
                  [
                    -82.1192183775885,
                    35.16298736482545
                  ],
                  [
                    -82.02301493213974,
                    34.88922106287925
                  ],
                  [
                    -81.8953274620959,
                    34.624364174603244
                  ],
                  [
                    -81.7376251133285,
                    34.37086458966912
                  ],
                  [
                    -81.55161073380631,
                    34.131044876142376
                  ],
                  [
                    -81.33919969207528,
                    33.907084547549495
                  ],
                  [
                    -81.1024988656172,
                    33.70100392093041
                  ],
                  [
                    -80.84378593365359,
                    33.51464955393287
                  ],
                  [
                    -80.5654890510358,
                    33.34968124666312
                  ],
                  [
                    -80.2701669338672,
                    33.20756059455706
                  ],
                  [
                    -79.96048935254754,
                    33.08954108081156
                  ],
                  [
                    -79.63921800262035,
                    32.996659699948175
                  ],
                  [
                    -79.30918770647594,
                    32.92973010713664
                  ],
                  [
                    -78.97328788786001,
                    32.88933729048183
                  ],
                  [
                    -78.63444425457965,
                    32.87583376530737
                  ],
                  [
                    -78.29560062129929,
                    32.88933729048183
                  ],
                  [
                    -77.95970080268336,
                    32.92973010713664
                  ],
                  [
                    -77.62967050653894,
                    32.996659699948175
                  ],
                  [
                    -77.30839915661176,
                    33.08954108081154
                  ],
                  [
                    -76.9987215752921,
                    33.20756059455706
                  ],
                  [
                    -76.70339945812349,
                    33.34968124666313
                  ],
                  [
                    -76.4251025755057,
                    33.51464955393287
                  ],
                  [
                    -76.16638964354209,
                    33.70100392093041
                  ],
                  [
                    -75.92968881708401,
                    33.907084547549495
                  ],
                  [
                    -75.71727777535297,
                    34.13104487614237
                  ],
                  [
                    -75.53126339583078,
                    34.37086458966911
                  ],
                  [
                    -75.3735610470634,
                    34.624364174603244
                  ],
                  [
                    -75.24587357701954,
                    34.88922106287925
                  ],
                  [
                    -75.1496701315708,
                    35.16298736482544
                  ],
                  [
                    -75.0861650076553,
                    35.443109198472875
                  ],
                  [
                    -75.05629682687386,
                    35.72694760848084
                  ],
                  [
                    -75.06070840548365,
                    36.01180104882346
                  ],
                  [
                    -75.09972779233085,
                    36.29492937616903
                  ],
                  [
                    -75.17335104187482,
                    36.57357926472584
                  ],
                  [
                    -75.281227378108,
                    36.845010907919985
                  ],
                  [
                    -75.42264747837997,
                    37.106525818017474
                  ],
                  [
                    -75.5965356543266,
                    37.355495472988345
                  ],
                  [
                    -75.80144672034207,
                    37.58939049281399
                  ],
                  [
                    -76.03556830896218,
                    37.805809958389055
                  ],
                  [
                    -76.2967293095907,
                    38.00251041946838
                  ],
                  [
                    -76.58241496775126,
                    38.17743407884608
                  ],
                  [
                    -76.88978898640974,
                    38.328735593649895
                  ],
                  [
                    -77.21572272417664,
                    38.454806906770294
                  ],
                  [
                    -77.55683129849898,
                    38.554299516878025
                  ],
                  [
                    -77.90951609202756,
                    38.62614361783072
                  ],
                  [
                    -78.27001284849088,
                    38.66956358933577
                  ],
                  [
                    -78.63444425457965,
                    38.684089400085405
                  ]
                ]
              ]
            }
          }
        ]
    };

    // Once the map loads, add the GeoJSON source and layer for the polygon
    mapboxMap.on('load', () => {
      // Add GeoJSON source to the map
      mapboxMap.addSource('polygon', {
        type: 'geojson',
        data: geoJsonData
      });

      // Add a new layer to visualize the polygon
      mapboxMap.addLayer({
        id: 'polygon-layer',
        type: 'fill',
        source: 'polygon', // reference the GeoJSON source
        layout: {},
        paint: {
          'fill-color': '#0080ff', // Fill color of the polygon
          'fill-opacity': 0.5
        }
      });

      // Add a border to the polygon
      mapboxMap.addLayer({
        id: 'polygon-outline',
        type: 'line',
        source: 'polygon',
        layout: {},
        paint: {
          'line-color': '#000',
          'line-width': 2
        }
      });
    });

    // Set the map instance to the state
    setMap(mapboxMap);

    // Cleanup on component unmount
    return () => {
      mapboxMap.remove();
    };
  }, []);

  return <div ref={mapNode} className="w-full h-full" />;
}

export default MapboxMap;
