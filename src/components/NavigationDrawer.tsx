import { Drawer, Box, Stack, MenuList, MenuItem } from '@mui/material';
import { NavLink } from 'react-router';
import { menuItems, APP_BAR_HEIGHT, DRAWER_WIDTH } from '../constants';

interface NavigationDrawerProps {
  open: boolean;
}

const NavigationDrawer = ({ open }: NavigationDrawerProps) => {
  return (
    <Drawer
      open={open}
      variant="persistent"
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          mt: APP_BAR_HEIGHT,
          backgroundColor: 'inherit',
        },
      }}
    >
      <Box
        sx={{
          flex: `0 0 ${DRAWER_WIDTH}px`,
        }}
      >
        <Stack direction="row" sx={{ py: 2, width: '100%' }}>
          <MenuList
            sx={{
              px: 1,
              width: '100%',
              '& .MuiMenuItem-root': {
                mb: 0.5,
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
                  window.location.pathname ===
                  `${import.meta.env.BASE_URL.replace(/\/$/, '')}${item.path}`
                }
              >
                <NavLink to={item.path}>{item.label}</NavLink>
              </MenuItem>
            ))}
          </MenuList>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;
