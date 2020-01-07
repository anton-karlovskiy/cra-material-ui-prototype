
import { makeStyles } from '@material-ui/core/styles';

const commonUseStyles = makeStyles(theme => ({
  // TODO: update naming
  boxShadow: {
    boxShadow: `${theme.spacing(10/8, 20/8, 32/8, 0)} rgba(208, 235, 237, 0.3)`
  }
}));

export default commonUseStyles;
