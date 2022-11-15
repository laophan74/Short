import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  border: '1px solid darkgray', 
  borderRadius: 5,
  backgroundColor: 'whitesmoke',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function LogedoutAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{background: 'white', height:65}}>
        <Toolbar sx={{ justifyContent: 'space-evenly' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, color: 'black', fontWeight: 'bold' }}
          >
            TOPTOP
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon style={{color:'gray'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              style={{color:'black'}}
            />
          </Search>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button sx={{marginRight:1, width:125, color: 'gray', borderColor: 'lightgray'}} variant="outlined" startIcon={<AddIcon />}>
                Upload
            </Button>
            <Button sx={{marginRight:1, width:125, color: 'white', backgroundColor:'#FE2C55', fontWeight:'bold'}} variant="contained">Log In</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
