
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

import BootstrapInput from 'components/JoynSelect/BootstrapInput';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 1),
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

const JoynSelect = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const onChangeHandler = event => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.root}>
      <InputLabel classes={{root: classes.inputLabel}} htmlFor='joyn-select'>Value</InputLabel>
      <NativeSelect
        id='joyn-select'
        value={value}
        classes={{select: classes.nativeSelect}}
        onChange={onChangeHandler}
        input={<BootstrapInput />}>
        <option value='' />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </NativeSelect>
    </div>
  );
}

export default JoynSelect;
