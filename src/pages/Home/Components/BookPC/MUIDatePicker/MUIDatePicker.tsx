import React from 'react';
import { DatePicker } from '@material-ui/pickers';

function MUIDatePicker({ field, form, ...otherProps }: any) {
  const handleDateChange = (date: any) => {
    form.setFieldValue(field.name, date);
  };

  const errorText = form.touched[field.name] && form.errors[field.name];

  return (
    <DatePicker
      {...field}
      {...otherProps}
      format='MM/dd/yyyy'
      label='Select Date'
      value={field.value || null}
      onChange={handleDateChange}
      error={errorText !== undefined}
      helperText={errorText}
    />
  );
}

export default MUIDatePicker;
