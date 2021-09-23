import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { useState } from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import HistoryIcon from '@material-ui/icons/History';
import Header from '../header';
import ReactDOM from 'react-dom';
import UserDetails from '../account';
import Payment from '../payment';
import Transactions from '../transactions';
import Home from '../home';
import Dashboard from '../dashboard';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    backgroundColor:"black",
    color:'white',
    opacity:'80%',
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },

}));
export default function Menu() {
  const classes = useStyles();
  const [page,setPage]=useState({});
  return (
  
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
          <Home />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {
             <ListItem button={true} key="Account" name="account" onClick={()=>{setPage({...page,currentPage:'account'})}}>
                <ListItemIcon> <PersonIcon style={{color: '#ff3333' }} /> </ListItemIcon>
                <ListItemText primary="Account" style={{color: 'white',textDecorationLine:'none' }} />
              </ListItem>
            }
            
             {
              <ListItem button={true} key="Payment" name="payment" onClick={()=>
            
              { console.log("entered"); setPage({...page,currentPage:'payment'})}} >
                <ListItemIcon> <SendIcon style={{color: '#ff3333' }}/> </ListItemIcon>
                <ListItemText primary="Make Payment" />
              </ListItem>
            }
             <Divider style={{color: '#ff3333' }} />
             {
              <ListItem button={true} key="Transactions" name="transactions"  onClick={()=>{setPage({...page,currentPage:'transactions'})}} >
                <ListItemIcon> <HistoryIcon style={{color: '#ff3333' }}/> </ListItemIcon>
                <ListItemText primary="Transactions" />
              </ListItem>
            }
          </List>
        
        </div>
      </Drawer>
      <main id="root" className={classes.content}>
            {page.currentPage=="account"?<Dashboard/>: <span></span>}
            {page.currentPage=="payment"?<Payment/>: <span></span>}
            {page.currentPage=="transactions"?<Transactions/>:<span></span>}
      </main>
    </div>
  );
}