import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import VideocamIcon from '@mui/icons-material/Videocam';
import { Avatar } from '@mui/material';
import HotAccount from './HotAccount';

export default function SideBar() {
  return (
    <List sx={{ width: '100%', height: '100%' }}>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon sx={{color:'#FE2C55'}}/>
        </ListItemIcon>
        <ListItemText disableTypography primary="For You"
        style={{color:'#FE2C55', fontWeight:'bold', fontSize:18, fontFamily:'cursive'}}/>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <PeopleIcon sx={{color:'#161823'}}/>
        </ListItemIcon>
        <ListItemText disableTypography primary="Following" 
        style={{ color:'#161823', fontWeight:'bold', fontSize:18, fontFamily:'cursive'}}/>
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
          <VideocamIcon sx={{color:'#161823'}}/>
        </ListItemIcon>
        <ListItemText disableTypography primary="LIVE" 
        style={{ color:'#161823', fontWeight:'bold', fontSize:18, fontFamily:'cursive'}}/>
      </ListItemButton>
      
      <List sx={{ width: '100%', height: '100%' }}
        subheader={
          <ListSubheader disableTypography style={{fontWeight:'bold', fontSize:13}}>
            Suggested accounts
          </ListSubheader>
        }>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
        <HotAccount/>
      </List>
    </List>
  );
}
