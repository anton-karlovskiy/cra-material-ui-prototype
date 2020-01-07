
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

import BootstrapInput from 'components/LabeledSelect/BootstrapInput';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(0, 1),
    position: 'unset',
    display: 'inline-flex',
    alignItems: 'center'
  },
  inputLabel: {
    color: theme.palette.text.primary,
    marginRight: theme.spacing(1),
    ...theme.typography.h6,
    fontWeight: theme.typography.fontWeightBold
  },
  nativeSelect: {
    minWidth: 89
  }
}));

const LabeledSelect = ({ label }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const onChangeHandler = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      { label && (
        <InputLabel
          classes={{root: classes.inputLabel}}
          htmlFor='labeled-select'>
          {label}
        </InputLabel>
      ) }
      <NativeSelect
        id='labeled-select'
        value={value}
        classes={{select: classes.nativeSelect}}
        onChange={onChangeHandler}
        input={<BootstrapInput />}>
        <option value='' />
        <option value='oil'>Oil</option>
        <option value='gas'>Gas</option>
      </NativeSelect>
    </div>
  );
}

export default LabeledSelect;
