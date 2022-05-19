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
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Legend from './Legend';
import ControlPanel from './ControlPanel';
import Pin from './Pin';
import POINTS_OF_INTEREST from './pointsOfInterest.json';
import Airport from './assets/airport.jpeg';

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
    h3: {
      marginTop: isMobile ? '1rem' : '2rem',
    },
  },
  palette: {
    primary: {
      main: '#f06292',
    },
    secondary: {
      main: '#00838f',
    },
  },
});

const popupImages = [Airport];

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
            latitude: isMobile ? 40.06 : 40,
            longitude: isMobile ? 4.1 : 4.1503385399740695,
            zoom: isMobile ? 13 : 10,
            bearing: 0,
            pitch: 0,
          }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
          minZoom={6}
          maxZoom={isMobile ? 17 : 15}
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
              <Typography variant="h4">
                {popupInfo.name}
              </Typography>
              {
                popupInfo.website
                  ? (
                    <Chip
                      color="secondary"
                      label="website"
                      component="a"
                      href={popupInfo.website}
                      variant="outlined"
                      clickable
                      sx={{ fontFamily: 'Roboto' }}
                    />
                  )
                  : ''
              }

              <img
                width="100%"
                src={popupImages[popupInfo.image]}
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
