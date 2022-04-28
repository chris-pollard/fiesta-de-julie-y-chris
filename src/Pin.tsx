import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

function Pin({ onClick, pinType }: {onClick: () => void; pinType: string}) {
  return (
    <ThemeProvider theme={theme}>
      <IconButton onClick={onClick}>
        <LocationOnIcon
          color={pinType === 'Wedding' ? 'primary' : 'secondary'}
          fontSize="large"
        />
      </IconButton>
    </ThemeProvider>

  );
}

export default React.memo(Pin);
