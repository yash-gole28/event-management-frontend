import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Box, Typography } from '@mui/material';

const today = dayjs();

const shouldDisableDateAfterToday = (date: Dayjs) => date.isAfter(today, 'day');

const AddEvent = () => {
  const [selectedDate, setSelectedDate] = React.useState<Dayjs | null>(today);
  const [selectedDateTime, setSelectedDateTime] = React.useState<Dayjs | null>(today);
  const formattedDate = selectedDate?.toISOString()

  const handleDateChange = (newValue: Dayjs | null) => {
    setSelectedDate(newValue);
  };

  const handleDateTimeChange = (newValue: Dayjs | null) => {
    setSelectedDateTime(newValue);
  };

  return (
    <>
      <div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DateTimePicker']}>
            <DemoItem label="DatePicker">
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                shouldDisableDate={shouldDisableDateAfterToday}
              />
            </DemoItem>
            <DemoItem label="DateTimePicker">
              <TimePicker
                value={selectedDateTime}
                onChange={handleDateTimeChange}
              />
            </DemoItem>
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <Box>
        <Typography onClick={() => console.log(formattedDate)} variant="h6">Selected Date: {selectedDate ? formattedDate : 'None'}</Typography>
        <Typography variant="h6">Selected Time: {selectedDateTime ? selectedDateTime.format('h:mm A') : 'None'}</Typography>
        <Typography variant="h6">{dayjs(formattedDate).format('h:mm A')}</Typography>
      </Box>
    </>

  )
}

export default AddEvent