import * as React from 'react';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { isMobile } from 'react-device-detect';
import Fade from '@mui/material/Fade';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import MenorcaPanorama from './assets/menorca_pano.jpeg';
import Pano2 from './assets/pano_boats.jpeg';

const desktopStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : '60%',
  maxWidth: 700,
  p: 10,
  height: isMobile ? '90%' : '80%',
  bgcolor: '#faf6eb',
  border: 'thick double #e91e63',
  borderRadius: 2,
  boxShadow: 24,
  overflow: 'scroll',
  scrollbarColor: '#e91e63',
};

const mobileStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : 500,
  padding: '10px 20px 10px 20px',
  height: isMobile ? '90%' : '75%',
  bgcolor: '#faf6eb',
  border: 'thick double #e91e63',
  borderRadius: 2,
  boxShadow: 24,
  overflow: 'scroll',
  scrollbarColor: '#e91e63',
};

function ControlPanel() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePanelExpand = () => {
    setExpanded(true);
  };

  const handlePanelCollapse = () => {
    setExpanded(false);
  };

  return (
    <Container maxWidth={isMobile ? false : 'xs'} className="control-panel">

      { isMobile
        ? (
          <div style={{ display: 'flex', paddingTop: 20, justifyContent: 'space-between' }}>
            <Typography variant={isMobile ? 'h2' : 'h1'}>
              ¡Hola!
            </Typography>
            { expanded
              ? (<Button onClick={handlePanelCollapse}><ExpandMoreRoundedIcon fontSize="large" /></Button>)
              : (<Button onClick={handlePanelExpand}><ExpandLessRoundedIcon fontSize="large" /></Button>)}

          </div>
        )
        : (
          <Typography variant={isMobile ? 'h2' : 'h1'}>
            ¡Hola!
          </Typography>
        )}

      {
        isMobile && !expanded
          ? ''
          : (
            <div>
              <Typography variant="body1">
                Welcome to the little website of Julie and Chris.
                For those of you that will be attending, we hope this page
                gives you a sense of the island in relation to the wedding.
              </Typography>
              <Typography variant="body1">
                Click below for more information.
              </Typography>
              <Button variant="contained" onClick={handleOpen} startIcon={<InfoIcon />}>
                Read more
              </Button>
            </div>
          )
      }

      <Modal open={open} onClose={handleClose}>
        <Fade in={open}>
          <Box sx={isMobile ? mobileStyle : desktopStyle}>
            { isMobile
              ? (
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={handleClose} sx={{ margin: 0 }}>
                    <CloseRoundedIcon fontSize="large" sx={{ margin: 0 }} />
                  </Button>
                </div>
              )
              : ''}
            <Typography variant={isMobile ? 'h3' : 'h2'} gutterBottom>Fiesta de Julie y Chris</Typography>
            <Typography variant="body1">
              We are so excited that you can join us in Menorca in September. It’s been a long time coming for us, and now with two more on board we will also be doing a little naming ceremony for our children. We know it's a big journey for some of you. We'll do our best to make it special for all of us &#128149;.
            </Typography>
            <img
              src={MenorcaPanorama}
              alt="Menorca Panorama"
              style={{ width: '100%', borderRadius: 5 }}
            />
            <Typography variant="h3" gutterBottom>Event details</Typography>
            <Typography variant="body1">
              Location: Finca Santa Teresa, Camino del Faro de Cavalleria, Menorca
              Time: 12h30-midnight
              (check invite for date)
            </Typography>
            <Typography variant="h3" gutterBottom>Children</Typography>
            <Typography variant="body1">
              Children are more than welcome! We will have Teo and also a little one that is on the way, and we'd love them to celebrate with other children and maybe make some new friends. We will be mainly in the garden of a private house and are planning on accomodating a room for naps and rest time. We will have babysitters (depending on numbers and interest).
            </Typography>
            <Typography variant="h3" gutterBottom>Accomodation</Typography>
            <Typography variant="body1">
              There are a number of options, some of which are on the map, but we recommend staying reasonably close to the ceremony, which is in the north of the island. Most places are no more than 45 minutes away.
              On the map, the town of Fornells is the fisherman town nearby and Platjas de Fornells is a beachy town with more tourist accomodation.
            </Typography>
            <Typography variant="body1">
              For Hotel Tirant, there is an extra discount of the official rate during those days, you just email recep.tirant@trhhoteles.com with the subject 'JULIE&CHRIS EXTRA-5%'; you can use it as well for the meals.
            </Typography>
            <ButtonGroup color="primary" variant="contained" fullWidth>
              <Button
                href="https://www.tripadvisor.com.au/Tourism-g187464-Menorca_Balearic_Islands-Vacations.html"
                target="_blank"
              >
                TripAdvisor
              </Button>
              <Button
                href="https://www.airbnb.com.au/s/Menorca--Islas-Baleares/"
                target="_blank"
              >
                AirBnB
              </Button>
              <Button
                href="https://www.booking.com/"
                target="_blank"
              >
                Booking.com
              </Button>
            </ButtonGroup>
            <img
              src={Pano2}
              alt="Menorca Panorama"
              style={{ width: '100%', marginTop: '2rem', borderRadius: 5 }}
            />
            <Typography variant="h3" gutterBottom>Getting to the wedding</Typography>
            <Typography variant="body1">
              We recommend hiring a car for your stay so you can explore. To get to the wedding, we will warn a few taxi companies that know where the house is, so they are available for our guests.
            </Typography>
            <Typography variant="h3" gutterBottom>Dressing for the occasion</Typography>
            <Typography variant="body1">
              We are on an island and it will be warm, so think about something beachy, relaxed, with open shoes. We recommend avoiding fancy high heels as there are rocky paths and we will be dancing, eating and playing in the garden. It can cool down a bit at night. Don’t worry about dressing too formally!
              If you're feeling adventurous, you may want to bring swimwear as the ceremony will take place by the water.
            </Typography>
            <Typography variant="h3" gutterBottom>Gifts</Typography>
            <Typography variant="body1">
              Your presence is the greatest gift; however we know some of you may want to give us a wedding present. If so, click on the link below. Thanks in advance for your contribution, it means a lot to us.
            </Typography>
            <Button
              color="primary"
              variant="contained"
              href="https://juliechris.zankyou.com/"
              target="_blank"
            >
              Give a gift
            </Button>
            <Typography variant="h3" gutterBottom>Places we like</Typography>
            <Typography variant="body1">
              You will find some ideas of bars,  restaurants and beaches we like on the map. Happy exploring !
            </Typography>
            <Typography variant="body1">
              In addition, click below for the official tourism website (available in Spanish, French and English).
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              href="https://www.menorca.es/"
              target="_blank"
            >
              Official Menorca Tourism Website
            </Button>
            <div style={{ display: 'flex', paddingTop: 20, justifyContent: 'flex-end' }}>
              <Button onClick={handleClose} variant="contained">Close</Button>
            </div>

          </Box>

        </Fade>
      </Modal>
    </Container>
  );
}

export default React.memo(ControlPanel);
