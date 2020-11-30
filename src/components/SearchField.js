import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';



const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    margin: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Искать"
          inputProps={{ 'aria-label': 'search' }}
        />
        <IconButton type="submit" className={classes.iconButton} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Fab size="small" color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </div>
  );
}
