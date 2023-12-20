import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText
} from "@mui/material"

const Header = () => {
  const [mobile, setMobile] = useState({ left: false });

  const title = [
    {
      path: '/',
      display: 'Home'
    },
    {
      path: '/about',
      display: 'About'
    },
    {
      path: '/services',
      display: 'Services'
    }
  ];

  const NavBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }));

  const NavFond = styled(Typography)(() => ({
    fontSize: '18px',
    color: 'red',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: 'blue'
    }
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      display: "block"
    },
  }));

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setMobile({ ...mobile, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {title.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item.display} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{
        display: 'flex',
        alignItems: "center",
        justifyContent: "space-between",
        padding: '40px',
        maxWidth: 'auto',
        backgroundColor: '#FED801',
        marginLeft: '0px'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: "center",
          justifyContent: "space-between",
          gap: '1rem'
        }}>
          <CustomMenuIcon onClick={toggleDrawer('left', true)} />
          <NavBox>
            {title.map((item, index) => (
              <NavFond key={index}>
                <Typography>{item.display}</Typography>
              </NavFond>
            ))}
          </NavBox>
        </Box>

        <Box>
          <Typography>Signup</Typography>
        </Box>
      </Box>

      <Drawer
        anchor="left"
        open={mobile.left}
        onClose={toggleDrawer('left', false)}
      >
        {list('left')}
      </Drawer>
    </div>
  );
};

export default Header;
