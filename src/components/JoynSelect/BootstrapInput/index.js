
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  input: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    ...theme.typography.h6,
    padding: theme.spacing(10/8, 26/8, 10/8, 12/8),
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderRadius: 4
    }
  }
}))(InputBase);

export default BootstrapInput;
