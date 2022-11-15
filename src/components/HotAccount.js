import React from 'react'
import {ListItemButton, ListItemIcon, Avatar, ListItemText} from '@mui/material'

const HotAccount = () => {
  return (
    <ListItemButton>
        <ListItemIcon>
            <Avatar src='https://randomuser.me/api/portraits/men/27.jpg'/>
        </ListItemIcon>
        <ListItemText disableTypography style={{fontWeight:'bold', fontSize:14}} primary="datvilla94" />
    </ListItemButton>
  )
}

export default HotAccount