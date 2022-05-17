import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import LegendButton from './LegendButton';

const style = {
  position: 'absolute' as 'absolute',
  left: '50%',
  top: 5,
  transform: 'translate(-50%, 0%)',
  width: '90%',
  p: 2,
  bgcolor: '#dcd5bf',
  border: 'thick double #e91e63',
  borderRadius: 2,
  boxShadow: 24,
  color: '#141001',
};

function Legend({ setFilterOn, isMobile, filterOn }) {
  const legendTypes = ['Wedding', 'Port', 'Accomodation', 'Beach', 'Bar', 'Landmark', 'All'];

  const handleChange = (event: SelectChangeEvent) => {
    setFilterOn(event.target.value);
  };

  if (!isMobile) {
    return (
      <ButtonGroup
        variant="outlined"
        aria-label="outlined primary button group"
        className="legend"
        color="primary"
      >
        { legendTypes.map((type) => (
          <LegendButton
            key={`${type}-legend-button`}
            legendType={type}
            setFilterOn={() => setFilterOn(type)}
          />
        ))}
      </ButtonGroup>
    );
  }

  return (
    <FormControl sx={style} color="secondary" size="medium" fullWidth>
      <InputLabel variant="filled">Filter on location</InputLabel>
      <Select
        value={filterOn}
        label="Filter location"
        onChange={handleChange}
        sx={{ margin: 0 }}
      >
        <MenuItem value="Wedding">Wedding</MenuItem>
        <MenuItem value="Port">Port</MenuItem>
        <MenuItem value="Accomodation">Accomodation</MenuItem>
        <MenuItem value="Beach">Beach</MenuItem>
        <MenuItem value="Bar">Bar</MenuItem>
        <MenuItem value="Landmark">Landmark</MenuItem>
        <MenuItem value="All">Show all</MenuItem>
      </Select>
    </FormControl>
  );
}

export default React.memo(Legend);
