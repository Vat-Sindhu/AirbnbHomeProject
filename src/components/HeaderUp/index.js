import React,{useContext, useState} from 'react'
import Box from '@mui/material/Box'
import  Container  from '@mui/material/Container';
import {flexCenter,flexBetweenCenter,displayOnDesktop,dFlex} from '../../themes/commonStyles';
import Button from '@mui/material/Button'
import '../HeaderUp/LearnHead.css'
import { ThemeContext } from '../../Context/ThemeContextProvider';

import Typography from '@mui/material/Typography'
//This Component is for showprices top header
const HeaderUp = () => {
  const [Close, setClose] = useState(false);
  const {toggle} =useContext(ThemeContext);
  
  const handleClose = () => {
    setClose(!Close);
  }

  return (
    <Box
    sx={{
     
       borderBottom:'1px solid #ddd',
      mt:-5,
             mb:4,
              maxHeight:90
  }}>
      <Container maxWidth="xl">
          <Box sx={{
              
              mt:4,
               backgroundColor:toggle?'grey':'#FAF9F9',
            maxHeight:80,
              
          }}>
    <Box sx={{...displayOnDesktop,
    maxHeight:80,
      ...flexCenter,
      // backgroundColor:'white',
      // mb:2,
    }}>
      
        <Typography
        sx={{
            ml:1,
            color:(theme)=>theme.palette.secondary.primary,
            fontSize: '17px',
            fontWeight: 'bold',
           
            p:5,
        }}
        component="h3">Show total prices up front  </Typography>
        <Button onClick={handleClose}><Typography
        sx={{
           ml:-5,
            color:'black',
            fontWeight: 'bold',
            textDecoration:'underline'
        }}>Learn more</Typography></Button>
        
    </Box>
    </Box>
   </Container>
   {Close ? (
      <div className='learn' >
     <div class='text'>
       <button className='closeshowtotal' onClick={handleClose}>:x:</button>
       <img src='learnmore.webp' alt="learn" />
       <h1>one total<br></br> price up <br></br>,front</h1>
       <p className='para'> You can now see the total price<br></br> up front,<br></br>
         including all fees, before taxes.</p>
       <button className='tryitbutton'>try it now</button><br></br>
       <p className='para2'> may be later</p>
     </div>
     </div>
   ) : null}
    </Box>
   
  )
}

export default HeaderUp