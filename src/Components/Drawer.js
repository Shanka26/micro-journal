import React,{useState}from 'react'
import {Box,Slide} from '@mui/material'
import DrawerItem from './DrawerItem'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const arrowStyle={
    color:'#ffff'
}
const Drawer = () => {
    let [drawerOpen, setDrawerOpen]=useState(true)

    const drawerStyle={
        boxShadow:drawerOpen?4:0,
        // backgroundColor:'primary.dark',
        height:'100vh',
        width:'25vw',
        display:'flex',
        flexDirection:'row'

    }
  return (
    <Box sx={drawerStyle}>
        <Slide direction="right" in={drawerOpen} mountOnEnter unmountOnExit>
            <Box width={0.8}>
                <DrawerItem/>
                <DrawerItem/>
                <DrawerItem/>
                <DrawerItem/>
            </Box>
        </Slide>
        
        <Box width={0.2} display='flex' justifyContent='flex-end'>
            <Box onClick={()=>setDrawerOpen(!drawerOpen)}>
                {drawerOpen?<ArrowBackIcon sx={arrowStyle}/>:<ArrowForwardIcon sx={arrowStyle}/>}
            </Box>
        </Box>

        <Box>


        </Box>
    </Box>
  )
}

export default Drawer