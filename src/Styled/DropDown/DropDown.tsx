import { MenuItem, TextField } from '@mui/material';

const DropDown = ({ Array }: { Array: { value: string; label: string }[] }) => {
  return (
    <TextField select sx={{ width: '100%' }}>
      {Array.map((Obj) => (
        <MenuItem key={Obj.value} value={Obj.value}>
          {Obj.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
export default DropDown;
