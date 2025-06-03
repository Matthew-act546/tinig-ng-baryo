import Dropdown from 'react-bootstrap/Dropdown';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';


const drawerWidth = 240;

const tags = [
  'Announcement',
  'Lost and Found',
  'Theft',
  'Reports',
  'Event',
  'Emergency Alert',
  'Health Advisory',
];
function BaryoJoined({ window }) {
  const dummyPosts = [
  { id: 1, title: 'Water Interruption on Monday', tag: 'Announcement' },
  { id: 2, title: 'Wallet Found at Barangay Hall', tag: 'Lost and Found' },
  { id: 3, title: 'Cellphone Theft Reported', tag: 'Theft' },
  { id: 4, title: 'Barangay Cleanup Drive', tag: 'Event' },
];

  const [selectedTag, setSelectedTag] = React.useState(null);

  const filteredPosts = selectedTag
    ? dummyPosts.filter((post) => post.tag === selectedTag)
    : dummyPosts;

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Home', 'Announcement', 'Anonymous report'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      sdsa
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            baryo.name
          </Typography>
           <Dropdown className='ms-auto'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Your Account
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/AuthenticatedLogged">back to home</Dropdown.Item>
              <Dropdown.Item >Logout</Dropdown.Item>
              <Dropdown.Item  className='text-danger'>
              Leave Baryo
            </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          slotProps={{
            root: {
              keepMounted: true,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div >
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                style={{
                  padding: '5px 10px',
                  borderRadius: '20px',
                  border: '1px solid #007bff',
                  background: selectedTag === tag ? '#007bff' : 'white',
                  color: selectedTag === tag ? 'white' : '#007bff',
                  cursor: 'pointer',
                }}
              >
            {tag}
          </button>
        ))}
      </div>

      <h4 style={{ marginTop: '30px' }}>
        {selectedTag ? `Posts under "${selectedTag}"` : 'All Posts'}
      </h4>
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
      
      </Box>
    </Box>
  );
}


BaryoJoined.propTypes = {
  window: PropTypes.func,
};


export default BaryoJoined;