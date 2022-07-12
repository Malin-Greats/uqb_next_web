import PropTypes from 'prop-types';
import React from 'react';

// next image
import Image from 'next/image';

// next Link
import Link from '@mui/material/Link';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  AppBar as MuiAppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger
} from '@mui/material';

// project imports
const MainLogo = '/assets/images/landing/UniqBksLogo.svg';

// assets
import MenuIcon from '@mui/icons-material/Menu';

// mui icons
import ShopIcon from '@mui/icons-material/Shop';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import FeedIcon from '@mui/icons-material/Feed';
import InfoIcon from '@mui/icons-material/Info';

function ElevationScroll({ children, window }) {
  const theme = useTheme();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });
  const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

  return React.cloneElement(children, {
    elevation: trigger ? 2 : 0,
    style: {
      backgroundColor: theme.palette.background.default,
      borderBottom: trigger ? 'none' : '1px solid',
      borderColor: trigger ? '' : darkBorder,
      color: theme.palette.text.dark
    }
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.node,
  window: PropTypes.object
};

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
  const [drawerToggle, setDrawerToggle] = React.useState(false);

  /** Method called on multiple components with different event types */
  const drawerToggler = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerToggle(open);
  };

  return (
    <ElevationScroll {...others}>
      <MuiAppBar>
        <Container>
          <Toolbar sx={{ height: 64}}>
            <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
              <Link href='/'>
                <Image src={MainLogo} alt="logo" width={165} height={33.93} />
              </Link>
            </Typography>

            <Stack sx={{ margin: 0 }} alignItems="center">
              <Box sx={{ ml: -80, flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button sx={{ my: 1, color: 'black', display: 'block' }} variant="text" component={Link} href="/shop" color="secondary">
                  Shop
                </Button>
                <Button sx={{ my: 1, color: 'black', display: 'block' }} variant="text" component={Link} href="/services" color="secondary">
                  Services
                </Button>
                <Button sx={{ my: 1, color: 'black', display: 'block' }} variant="text" color="secondary" target="_blank">
                  Blog
                </Button>
                <Button sx={{ my: 1, color: 'black', display: 'block' }} variant="text" component={Link} href="/about"color="secondary">
                  About
                </Button>
              </Box>
            </Stack>

            <Stack direction="row" sx={{ display: { xs: 'none', sm: 'block' } }} spacing={2}>
              <Button
                sx={{ paddingRight: 5, paddingLeft: 5, borderRadius: 2.2 }}
                variant="outlined" color="primary" component={Link}
                href="/login"
                >
                Log In
              </Button>
              <Button
                sx={{
                  paddingRight: 4,
                  paddingLeft: 4,
                  borderRadius: 2.2,
                  background: '#545BE8',
                  '&:hover': {
                    background: '#545BE8',
                  }
                }}
                component={Link}
                href="/createaccount"
                disableElevation
                variant="contained"
                color="secondary"
              >
                Register
              </Button>
            </Stack>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                {drawerToggle && (
                  <Box sx={{ width: 'auto' }} role="presentation" onClick={drawerToggler(false)} onKeyDown={drawerToggler(false)}>
                    <List>
                      <Link style={{ textDecoration: 'none' }} href="/shop">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <ShopIcon />
                          </ListItemIcon>
                          <ListItemText primary="Shop" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/login">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <MiscellaneousServicesIcon />
                          </ListItemIcon>
                          <ListItemText primary="Services" />
                        </ListItemButton>
                      </Link>
                      <Link style={{ textDecoration: 'none' }} href="/">
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <FeedIcon />
                          </ListItemIcon>
                          <ListItemText primary="Blog" />
                        </ListItemButton>
                      </Link>
                      <Link
                        style={{ textDecoration: 'none' }}
                        href="/about"
                      >
                        <ListItemButton component="a">
                          <ListItemIcon>
                            <InfoIcon />
                          </ListItemIcon>
                          <ListItemText primary="About" />
                        </ListItemButton>
                      </Link>
                      <Stack direction="column" spacing={1} sx={{ width: 300, marginLeft: 2}}>
                        <Button
                          variant="outlined"
                          color="secondary"
                          component={Link}
                          href='/login'
                        >
                          Log In
                        </Button>
                        <Button
                          component={Link}
                          disableElevation
                          variant="contained"
                          href='/createaccount'
                          color="secondary"
                          sx={{
                            marginLeft: 2,
                            marginTop: 2,
                          }}
                        >
                          Register
                        </Button>
                      </Stack>
                    </List>
                  </Box>
                )}
              </Drawer>
            </Box>

          </Toolbar>
        </Container>
      </MuiAppBar>
    </ElevationScroll>
  );
};

export default AppBar;
