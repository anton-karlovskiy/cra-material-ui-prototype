
import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import InputLabel from '@material-ui/core/InputLabel';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import CalendarIcon from 'components/Icons/SvgIcons/CalendarIcon';

const useStyles = makeStyles(theme => ({
  root: props => ({
    display: 'inline-flex',
    padding: props.vertical ? theme.spacing(1, 0) : theme.spacing(0, 1),
    width: props.fullWidth ? '100%' : 'auto',
    flexDirection: props.vertical ? 'column' : 'row',
    alignItems: props.vertical ? 'flex-start' : 'center',
    '& .react-datepicker-wrapper': {
      width: props.fullWidth ? '100%' : 'auto'
    }
  }),
  inputLabel: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
    ...theme.typography.h6,
    fontWeight: theme.typography.fontWeightBold
  },
  customInput: props => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: theme.spacing(0, 10/8),
    minWidth: props.fullWidth ? '100%' : theme.spacing(127/8),
    minHeight: theme.spacing(4.5),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: props.greyBg ? theme.palette.background.default : theme.palette.background.paper
  }),
  calendarIcon: {
    position: 'absolute',
    top: '50%',
    right: 3,
    transform: 'translate(-50%, -50%)'
  }
}));

const CustomInput = React.forwardRef(({ value, onClick, greyBg }, ref) => {
  const classes = useStyles({greyBg});
  const theme = useTheme();

  return (
    <div ref={ref} className={classes.customInput} onClick={onClick}>
      <CalendarIcon className={classes.calendarIcon} color={theme.palette.secondary.main} />
      <Typography color='textPrimary' variant='h6'>{value}</Typography>
    </div>
  );
});

const LabeledDatePicker = ({ label, greyBg, vertical, fullWidth }) => {
  const [startDate, setStartDate] = useState(new Date());
  const classes = useStyles({greyBg, vertical, fullWidth});

  return (
    <div className={classes.root}>
      { label && (
        <InputLabel
          classes={{root: classes.inputLabel}}
          htmlFor='labeled-select'>
          {label}
        </InputLabel>
      ) }
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        customInput={<CustomInput greyBg={greyBg} />} />
    </div>
  );
};

export default LabeledDatePicker;
