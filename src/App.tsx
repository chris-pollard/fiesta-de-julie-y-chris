import * as React from 'react';
import { useState, useMemo } from 'react';
import { render } from 'react-dom';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  ScaleControl,
  MapProvider,
} from 'react-map-gl';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { isMobile } from 'react-device-detect';
import CssBaseline from '@mui/material/CssBaseline';
import Legend from './Legend';
import ControlPanel from './ControlPanel';
import Pin from './Pin';
import POINTS_OF_INTEREST from './pointsOfInterest.json';

export const theme = createTheme({
  typography: {
    fontFamily: 'Square Peg',
    body1: {
      fontFamily: 'Roboto',
      marginBottom: '1rem',
    },
    button: {
      fontFamily: 'Roboto',
    },
    h2: {
      marginTop: '2rem',
    },
  },
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#007bb2',
    },
  },
});

const { MAPBOX_TOKEN } = process.env;

export default function App() {
  const [popupInfo, setPopupInfo] = useState(null);
  const [filterOn, setFilterOn] = useState('All');

  const pins = useMemo(
    () => POINTS_OF_INTEREST.filter((p) => {
      if (filterOn !== 'All') {
        return p.type === filterOn;
      }
      return p.type !== 'All';
    }).map((point) => {
      const {
        longitude, latitude, type, name,
      } = point;

      return (
        <Marker
          key={name}
          longitude={longitude}
          latitude={latitude}
          anchor="bottom"
        >
          <Pin
            onClick={() => setPopupInfo(point)}
            pinType={type}
          />
        </Marker>
      );
    }),
    [filterOn],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MapProvider>
        <Map
          initialViewState={{
            latitude: isMobile ? 40.05 : 39.95943934708656,
            longitude: isMobile ? 4.1 : 4.1503385399740695,
            zoom: isMobile ? 13 : 10,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          minZoom={6}
          maxZoom={15}
        >
          {
            isMobile
              ? ''
              : (
                <NavigationControl
                  position="top-left"
                  showCompass={false}
                />
              )
          }

          { isMobile
            ? ''
            : (

              <ScaleControl
                maxWidth={250}
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.75',
                  padding: '5px 5px',
                  borderColor: '#007bb2',
                  position: 'absolute',
                  bottom: '3rem',
                  marginBottom: 0,
                }}
              />
            )}

          {pins}

          {popupInfo && (
            <Popup
              longitude={Number(popupInfo.longitude)}
              latitude={Number(popupInfo.latitude)}
              onClose={() => setPopupInfo(null)}
              closeOnClick={false}
            >
              <h3>
                {popupInfo.name}
              </h3>
              <div>
                {popupInfo.region}
              </div>
              <div>
                {popupInfo.type}
              </div>
              <img
                width="100%"
                src={popupInfo.image}
                alt={popupInfo.name}
              />
            </Popup>
          )}
        </Map>
        <ControlPanel />
        <Legend filterOn={filterOn} setFilterOn={setFilterOn} isMobile={isMobile} />
      </MapProvider>
    </ThemeProvider>
  );
}

export function renderToDom(container) {
  render(<App />, container);
}
