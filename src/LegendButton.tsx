import * as React from 'react';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function LegendButton({ legendType, setFilterOn }) {
  return (
    <Button
      variant="contained"
      startIcon={<LocationOnIcon />}
      onClick={setFilterOn}
      size="large"
    >
      {legendType}
    </Button>
  );
}

