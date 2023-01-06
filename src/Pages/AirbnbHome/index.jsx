import React from 'react'
import './Airhome.css'
import Box from '@mui/material/Box'
import{BiHomeHeart} from 'react-icons/bi'
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import {FaRupeeSign} from 'react-icons/fa';
import {FaAirbnb} from 'react-icons/fa';
import {flexCenter} from '../../themes/commonStyles';
import Typography from '@mui/material/Typography'
import {pink} from '@mui/material/colors';

const AirbnbHome = () => {
  return (
    <>
    <Box className="maindiv">
    <FaAirbnb size={40} color={pink[500]}/>
   
   {/* <img className="maindiv__image1" src='logo.jpg' alt="logo"/> */}
   <Box className='maindiv__ready'>Ready to airbnb it?
   </Box>
   <Box className='maindiv__setup'>
    <Button sx={{backgroundColor:'rgb(237, 9, 47)',color:'white'}}> <BiHomeHeart/>Airbnb Setup</Button>
   </Box>
   <Box className='maindiv__earn'>
    Air bnb it.<br></br>
    <p className='maindiv__para'>you cloud earn</p>
    </Box>
    <Box className='maindiv__number'>
    <FaRupeeSign/> 3,145
    </Box>
    <Box className='maindiv__estimation'>
    1 night at an estimated ₹3,147 a night
    </Box>
    <Box width={400} >
      {/* <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      /> */}
      <Slider className="maindiv__slider" defaultValue={3147} style={{color:'black'}} aria-label="Default" valueLabelDisplay="auto"  />
    </Box>
    </Box>
   {/* <div className='maindiv'>
   <img className='maindiv__image1'  src='logo.jpg' alt="logo"/>
   <div className='maindiv__ready'>Ready to airbnb it?
   </div>
   <div className='maindiv__setup'>
    <button className='maindiv__setupbutton'> <BiHomeHeart/>Airbnb Setup</button> </div>
   </div>
   <div className='maindiv__earn'>
    Air bnb it.<br></br>
    <p className='maindiv__para'>you cloud earn</p>
     </div> */}
    </>
  )
}

export default AirbnbHome