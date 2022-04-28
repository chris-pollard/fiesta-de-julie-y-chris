import * as React from 'react';
import Container from '@mui/material/Container';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e91e63',
    },
    secondary: {
      main: '#007bb2',
    },
  },
});

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height: '75%',
  bgcolor: 'rgb(255, 255, 255,0.95)',
  border: 'thick double #e91e63',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  overflow: 'scroll',
  scrollbarColor: '#e91e63',
};

function ControlPanel() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs" className="control-panel">
        <Typography variant="h1">¡Hola! &#128075;</Typography>
        <Typography>
          Welcome to the little website of Julie and Chris.
          For those of you that will be attending, we hope this page
          gives you a sense of the island in relation to the wedding.
          {' '}
          <b>For more information</b>
          {' '}
          about travelling, accomodation and gifts, click the link below.
        </Typography>
        <div />
        <Button variant="contained" onClick={handleOpen} startIcon={<InfoIcon />}>Read more</Button>
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <h1>Fiesta De Julie y Chris</h1>
            <p>Here is some text for an introduction. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum deserunt, provident quis atque quasi illo harum doloribus a, nemo non aliquam dolor eaque perferendis nostrum quisquam. Architecto animi nam esse!</p>
            <img src="https://crispy-wedding.s3.ap-southeast-2.amazonaws.com/menorca-boat-sml.jpeg" alt="" style={{ width: 300 }} />
            <h2>Accomodation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt doloribus adipisci ab soluta, architecto voluptates optio vitae laudantium repudiandae facere nam unde! Odio aliquid at nemo ullam distinctio necessitatibus reiciendis.</p>
            <h2>Getting to the wedding</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis excepturi libero at maiores amet repudiandae error dignissimos omnis illum rerum ad similique, magnam autem nesciunt ratione eos quia. Facilis, quam.</p>
            <h2>Gifts</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, molestiae rerum explicabo ducimus deserunt, aperiam animi perferendis in dignissimos non eaque quas! Expedita molestiae aliquid alias odit sapiente veniam nihil.</p>
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
            <div style={{ display: 'flex', paddingTop: 20, justifyContent: 'flex-end' }}>
              <Button onClick={handleClose} variant="contained">Close</Button>
            </div>

          </Box>
        </Modal>
      </Container>
    </ThemeProvider>
  );
}

export default React.memo(ControlPanel);
