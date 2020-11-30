import React from 'react';
import { observer } from 'mobx-react'
import { Link as RouterLink } from 'react-router-dom'
import { store } from 'core'

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  box: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  }
}));

const BreadcrumbsComponent = () => {
  const classes = useStyles();

  const renderItem = (item, i) => {
    const key = `structure-${item.id}`;

    if (i === store.breadcrumbs.length - 1) {
      return <Typography key={key} color="textPrimary">{item.title}</Typography>
    }
    return (
      <Link
        component={RouterLink}
        key={key}
        to={`/project/${store.projectId}/structure/${item.id}`}
      >
        {item.title}
      </Link>
    )
  }

  if (store.showBreadcrumbs) {
    return (
      <Box className={classes.box}>
        <Breadcrumbs
          className={classes.root}
          separator=""
          aria-label="breadcrumb"
        >
          {store.breadcrumbs.map(renderItem)}
        </Breadcrumbs>
      </Box>
    );
  }

  if (store.loading) {
    return (
      <LinearProgress />
    )
  }

  return null;
}

export default observer(BreadcrumbsComponent);
