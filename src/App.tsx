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
import SantaTeresa from './assets/santa_teresa.jpeg';
import Platjes from './assets/platjes.jpeg';
import CiutadellaPort from './assets/port.jpeg';
import BinidaliBeachBar from './assets/binidali_beach_bar.jpeg';
import Chiringuito from './assets/chiringuito.jpeg';
import CalaMitjana from './assets/cala_mitjana.png';
import Lighthouse from './assets/lighthouse.png';
import HotelJeni from './assets/jeni.png';
import Xoroi from './assets/xoroi.png';
import SaBlanca from './assets/sablanca.jpeg';
import Yacht from './assets/yacht.jpeg';
import HotelMercadel from './assets/mercadel.jpeg';
import HotelM27 from './assets/m27.jpeg';
import HotelCarema from './assets/carema.jpeg';
import HotelTirant from './assets/tirant.jpeg';
import PortMahon from './assets/portdemahon.jpeg';
import Binidali from './assets/binidali.jpeg';
import Pregonda from './assets/pregonda.jpeg';
import Tortuga from './assets/tortuga.jpeg';

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

const popupImages = [
  SantaTeresa,
  Platjes,
  Airport,
  CiutadellaPort,
  BinidaliBeachBar,
  Chiringuito,
  CalaMitjana,
  Lighthouse,
  HotelJeni,
  Xoroi,
  SaBlanca,
  Yacht,
  HotelMercadel,
  HotelM27,
  HotelCarema,
  HotelTirant,
  PortMahon,
  Binidali,
  Pregonda,
  Tortuga,
];

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
            latitude: isMobile ? 39.9 : 39.97,
            longitude: isMobile ? 4.05 : 4.19,
            zoom: isMobile ? 9 : 10,
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
              anchor="center"
              style={{ borderRadius: 15 }}
            >
              <Typography variant="h4">
                {popupInfo.name}
              </Typography>
              <Typography variant="body1">
                {popupInfo.type}
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
                      sx={{ fontFamily: 'Roboto', marginBottom: '0.5rem' }}
                      target="_blank"
                      rel="noopener"
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
