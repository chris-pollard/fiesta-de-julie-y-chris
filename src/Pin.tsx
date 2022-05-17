import * as React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import IconButton from '@mui/material/IconButton';

function Pin({ onClick, pinType }: {onClick: () => void; pinType: string}) {
  return (
    <IconButton onClick={onClick} size="large">
      <LocationOnIcon
        color={pinType === 'Wedding' ? 'primary' : 'secondary'}
        fontSize="large"
      />
    </IconButton>
  );
}

export default React.memo(Pin);
