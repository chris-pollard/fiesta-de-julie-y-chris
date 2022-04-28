import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Pin from './Pin';
import LegendButton from './LegendButton';

function Legend({ setFilterOn }) {
  const legendTypes = ['Wedding', 'Port', 'Accomodation', 'Beach', 'Bar', 'Landmark', 'All'];

  const color = {
    Wedding: '#d00',
    Port: 'blue',
    Accomodation: 'orange',
    Beach: 'yellow',
    Bar: 'brown',
    Landmark: 'grey',
  };

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined primary button group"
      className="legend"
      color="primary"
    >
      { legendTypes.map((type, index) => (
        <LegendButton
          key={`${index}-legend-button`}
          legendType={type}
          setFilterOn={() => setFilterOn(type)}
        />
      ))}
    </ButtonGroup>
  );
}

export default React.memo(Legend);
