import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { styled } from '@mui/material/styles';
import { AppBar, Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from './assets/menu.svg?react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { APP_BAR_HEIGHT, DRAWER_WIDTH } from './constants';
import NavigationDrawer from './components/NavigationDrawer';
import './App.css';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

function App(): React.JSX.Element {
  const matches = useMediaQuery((currentTheme) => currentTheme.breakpoints.up('sm'));
  const [isDrawerOpened, setIsDrawerOpened] = useState<boolean>(true);

  useEffect(() => {
    if (matches) {
      setIsDrawerOpened(true);
    } else {
      setIsDrawerOpened(false);
    }
  }, [matches]);

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar
          sx={{
            position: 'fixed',
            p: 2,
            fontWeight: 'bold',
            flexDirection: 'row',
            alignItems: 'center',
            zIndex: (theme) => theme.zIndex.drawer + 1,
            height: APP_BAR_HEIGHT,
          }}
        >
          <IconButton
            aria-label="open drawer"
            onClick={() => setIsDrawerOpened((prev) => !prev)}
            edge="start"
            sx={[
              {
                mr: 2,
                ml: 1,
              },
            ]}
          >
            <MenuIcon width={16} height={16} />
          </IconButton>
          <Typography variant="h5" sx={{ color: 'primary.contrastText' }}>TypeScript Features</Typography>
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row' },
            minHeight: `calc(100vh - ${APP_BAR_HEIGHT})`,
          }}
        >
          <NavigationDrawer open={isDrawerOpened} />

          <Main
            open={isDrawerOpened}
            sx={{
              padding: '24px',
              marginTop: APP_BAR_HEIGHT,
              minHeight: `calc(100vh - ${APP_BAR_HEIGHT})`,
              maxHeight: 'fit-content',
              width: isDrawerOpened ? `calc(100vh - ${APP_BAR_HEIGHT})` : '100%',
              flexGrow: 1,
            }}
          >
            <Outlet />
          </Main>
        </Box>
      </Box>
    </>
  );
}

export default App;
