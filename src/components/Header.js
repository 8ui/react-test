import React from 'react';
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router'
import { store } from 'core'

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';



const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Header = ({ history }) => {
  const classes = useStyles();
  const isIndex = !store.currentStructure.id
  const onBack = () => {
    if (store.breadcrumbs.length === 1) {
      history.push('/');
    } else {
      const item = store.breadcrumbs[store.breadcrumbs.length - 2];
      history.push(`/project/${store.projectId}/structure/${item.id}`);
    }
  }

  return (
    <AppBar position="sticky">
      <Toolbar>
        {!isIndex && (
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={onBack}
          >
            <ArrowBackIcon />
          </IconButton>
        )}
        <Typography variant="h6" className={classes.title}>
          {(store.projectId
            ? store.currentStructure.title
            : 'Проекты'
          )}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
}

export default withRouter(observer(Header))
