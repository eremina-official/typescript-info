import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { styled } from '@mui/material/styles';
import { AppBar, Drawer, Stack, Box, MenuList, MenuItem, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from './assets/menu.svg?react';
import useMediaQuery from '@mui/material/useMediaQuery';
import RoutePaths from './router/RoutePaths';
import './App.css';

const appBarHeight = '70px';
const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
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

const menuItems: { label: string; path: string }[] = [
  { label: 'Overview', path: RoutePaths.HOME },
  { label: 'Data types', path: RoutePaths.DATA_TYPES },
  { label: 'Generics', path: RoutePaths.GENERICS },
  { label: 'Record', path: RoutePaths.RECORD },
  { label: 'as const', path: RoutePaths.AS_CONST },
  { label: 'Extends', path: RoutePaths.EXTENDS },
];

function App({ children }: { children?: React.ReactNode }): React.JSX.Element {
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
          <Typography>TypeScript Features</Typography>
        </AppBar>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row' },
            minHeight: 'calc(100vh - 70px)',
          }}
        >
          <Drawer
            open={isDrawerOpened}
            variant="persistent"
            sx={{
              // display: { xs: 'none', sm: 'block' },
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                mt: appBarHeight,
                backgroundColor: 'inherit',
              },
            }}
          >
            <Box
              sx={{
                flex: '0 0 250px',
              }}
            >
              <Stack direction="row" sx={{ py: 2, width: '100%' }}>
                <MenuList
                  sx={{
                    p: 1,
                    width: '100%',
                    '& .MuiMenuItem-root': {
                      mb: 1,
                      borderRadius: 1,
                      '&:hover, &.Mui-selected, &.Mui-selected:hover': {
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                      },
                      '&:where(:hover, .Mui-selected) a': {
                        color: 'primary.contrastText',
                      },
                    },
                  }}
                >
                  {menuItems.map((item) => (
                    <MenuItem
                      sx={{
                        width: '100%',
                        p: 0,
                        '& a': {
                          display: 'block',
                          width: '100%',
                          padding: '8px 16px',
                          textDecoration: 'none',
                          color: 'primary.main',
                          fontWeight: 'bold',
                        },
                      }}
                      key={item.label}
                      selected={
                        window.location.pathname === `${import.meta.env.BASE_URL.replace(/\/$/, '')}${item.path}`
                      }
                    >
                      <NavLink to={item.path}>{item.label}</NavLink>
                    </MenuItem>
                  ))}
                </MenuList>
              </Stack>
            </Box>
          </Drawer>

          <Main
            open={isDrawerOpened}
            sx={{
              padding: '24px',
              marginTop: appBarHeight,
              minHeight: 'calc(100vh - 70px)',
              maxHeight: 'fit-content',
              width: isDrawerOpened ? 'calc(100vh - 70px)' : '100%',
              flexGrow: 1,
            }}
          >
            {children}
          </Main>
        </Box>
      </Box>
    </>
  );
}

export default App;
