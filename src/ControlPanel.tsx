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

const desktopStyle = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: isMobile ? '90%' : '60%',
  p: 4,
  height: isMobile ? '90%' : '75%',
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
  const [expanded, setExpanded] = useState(false);

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
            <Typography variant="h3" gutterBottom>Fiesta de Julie y Chris</Typography>
            <Typography variant="body1">
              We are so excited that you can join us in Menorca in September. It's been a long time coming for us, and we know it's a big journey for some of you. We'll do our best to make it special for all of us.
            </Typography>
            <img
              src="https://crispy-wedding.s3.ap-southeast-2.amazonaws.com/menorca-boat-sml.jpeg"
              alt=""
              style={{ width: isMobile ? '100%' : 300 }}
            />
            <Typography variant="h3" gutterBottom>Naming ceremony</Typography>
            <Typography variant="body1">
              Here is some text for an introduction. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt, provident quis atque quasi illo harum doloribus a, nemo non aliquam dolor eaque perferendis nostrum quisquam. Architecto animi nam esse!
            </Typography>
            <Typography variant="h3" gutterBottom>Accomodation</Typography>
            <Typography variant="body1">
              Here is some text for an introduction. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt, provident quis atque quasi illo harum doloribus a, nemo non aliquam dolor eaque perferendis nostrum quisquam. Architecto animi nam esse!
            </Typography>
            <ButtonGroup color="primary" fullWidth>
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
            <Typography variant="h3" gutterBottom>Getting to the wedding</Typography>
            <Typography variant="body1">
              We recommend
            </Typography>
            <Typography variant="h3" gutterBottom>Dressing for the occasion</Typography>
            <Typography variant="body1">
              We expect you to wear whatever you feel like. We are on an island and it will be warm, so think about things that flow, linen, nice open shoes. Not too formal.
            </Typography>
            <Typography variant="h3" gutterBottom>Gifts</Typography>
            <Typography variant="body1">
              The greatest gift is your presence, but if you would like to give us a gift, a contribution to our European trip and a couple of things on our wishlist would be much appreciated.
            </Typography>
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
