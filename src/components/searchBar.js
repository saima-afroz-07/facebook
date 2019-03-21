import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import MoreIcon from '@material-ui/icons/MoreVert';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown'
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
      backgroundColor: "white",
      placeholder: "Search"
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: "black"
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem style={{fontSize: "80%"}} onClick={this.handleMenuClose}>New Groups</MenuItem>
        <Divider />
        <MenuItem style={{fontSize: "80%"}} onClick={this.handleMenuClose}>Advertising on Facebook</MenuItem>
        <Divider />
        <MenuItem style={{fontSize: "80%"}} onClick={this.handleMenuClose}>Activity log</MenuItem>
        <MenuItem style={{fontSize: "80%"}} onClick={this.handleMenuClose}>News Feed preferences</MenuItem>
        <MenuItem style={{fontSize: "80%"}} onClick={this.handleMenuClose}>Settings</MenuItem>
        <MenuItem style={{fontSize: "80%"}} onClick={this.handleMenuClose}>Log Out</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
        <img  style={{width: "24px", height: "24px"}} src="/images/fr2.png" />
          <p>Friend Request</p>
        </MenuItem>

        <MenuItem onClick={this.handleMobileMenuClose}>
        <img  style={{width: "24px", height: "24px"}} src="/images/m.png" />
          <p>Messenger</p>
        </MenuItem>

        <MenuItem onClick={this.handleMobileMenuClose}>
        <img  style={{width: "24px", height: "24px"}} src="/images/n.png" />
          <p>Notifications</p>
        </MenuItem>

        <MenuItem onClick={this.handleMobileMenuClose}>
        <img  style={{width: "24px", height: "24px"}} src="/images/h.png" />
          <p>Help</p>
        </MenuItem>      


        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            
            <IconButton>
              <img  style={{width: "30px", height: "30px"}} src="/images/fl.png" />
            </IconButton>

            <div  className={classes.search}>
              <div  className={classes.searchIcon}>
                <SearchIcon />
              </div>
              
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
                <Typography style={{padding: "20px", color: "white"}}>
                  Saima
                </Typography>
                <Typography style={{padding: "20px", color: "white"}}>
                  Home
                </Typography>
                <Typography style={{padding: "20px", color: "white"}}>
                  Create
                </Typography>
              <IconButton color="inherit">
               <img title="Friend Request" style={{width: "24px", height: "24px"}} src="/images/fr2.png" />
              </IconButton>

              <IconButton color="inherit">
               <img title="Messenger" style={{width: "24px", height: "24px"}} src="/images/m.png" />
              </IconButton>

              <IconButton color="inherit">
               <img title="Notification" style={{width: "24px", height: "24px"}} src="/images/n.png" />
              </IconButton>

              <IconButton color="inherit">
               <img title="help" style={{width: "24px", height: "24px"}} src="/images/h.png" />
              </IconButton>
              
              <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <ArrowDropDown />
              </IconButton>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PrimarySearchAppBar);
