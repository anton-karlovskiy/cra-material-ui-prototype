
import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

import ArrowIcon from 'components/Icons/SvgIcons/ArrowIcon';

const CustomBreadcrumbs = () => {
  const theme = useTheme();

  return (
    <Breadcrumbs separator={<ArrowIcon color={theme.palette.text.primary} />} aria-label='breadcrumb'>
      <Link color='primary' variant='h3' href='/'>
        Networks
      </Link>
      <Link color='primary' variant='h3' href='/'>
        Permian Basin
      </Link>
      <Link color='primary' variant='h3' href='/'>
        West Texas
      </Link>
      <Typography variant='h3' color='textPrimary'>
        Washington 10H Battery Oil
      </Typography>
    </Breadcrumbs>
  );
};

export default CustomBreadcrumbs;
