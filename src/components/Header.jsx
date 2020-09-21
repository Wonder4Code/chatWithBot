import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../actions/logout'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: 18,
    textTransform: 'uppercase',
    fontFamily: 'Roboto',
    margin: '0 5px',
    padding: 0,
  },
  btn: {
    
  }
}));

function Header() {
  const classes = useStyles();
  const login = useSelector(state => state.login)
  const dispatch = useDispatch()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Чат c {login.isLogin ? login.name : 'гостем'}
          </Typography>
          <Link to="/chats" className={classes.link}>
            <Button className={classes.link}>Чат</Button>
          </Link>
          {login.isLogin
            ?
            <Button color="inherit" className={classes.link} onClick={() => dispatch(logout())}>Выйти</Button>
            :
            <Link to="/" className={classes.link}>
              <Button className={classes.link}>Войти</Button>
              </Link>
          }
        </Toolbar>
      </AppBar>
    </div>
    // <div>
    //   <Link to="/">home</Link>
    //   <Link to="/test">test</Link>
    // </div>
  )
}

export default Header
