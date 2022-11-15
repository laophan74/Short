import React from 'react'
import LogedoutAppBar from '../components/LogedoutAppBar'
import SideBar from '../components/SideBar'
import { Box } from '@mui/system'
import { Button, Container, List, ListItem } from '@mui/material'
import VideoCard from '../components/VideoCard'

const Home = () => {
  return (
    <Box sx={{ width: 1, }}>
      {/* AppBar */}
      <LogedoutAppBar/>
      <Box style={{marginTop:65, height: '100%'}} sx={{flexDirection:'row', display:'flex', justifyContent:'center'}}>
        {/* SideBar */}
        <Box style={{ width:'20%', zIndex:1}} sx={{overflow:"auto",scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {width: '0.4em'},
          '&::-webkit-scrollbar-track': {background: "#f1f1f1"},
          '&::-webkit-scrollbar-thumb': {backgroundColor: 'lightgray'}}}>
          <SideBar/>
        </Box>
        <Box style={{ width: '58%'}} 
          sx={{overflow:"auto",scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {width: '0.4em',},
          '&::-webkit-scrollbar-track': {background: "#f1f1f1"},
          '&::-webkit-scrollbar-thumb': {backgroundColor: 'lightgray'}}}>
          <List sx={{height:'100%', width:'100%'}}>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
          </List>
        </Box>
      </Box>
    </Box>
  )
}



export default Home