import React,{useContext} from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import HeaderUp from '../../components/HeaderUp'
import Header from '../../components/Header'
import OptionsTab from '../../components/OptionsTab';
import Container from '@mui/material/Container'
import LocationCards from '../../components/LocationCards';
import Footer from '../../components/Footer'
import FooterMenu from '../../components/FooterMenu'
import { displayOnDesktop } from '../../themes/commonStyles';
import MobileFooter from '../../components/MobileFooter'
import MapComponent from '../../components/MapComponent'
import { ThemeContext } from '../../Context/ThemeContextProvider'
const LandingPage = () => {
  const {toggle}=useContext(ThemeContext);
  return (
     
    <React.Fragment>
    <CssBaseline>
       {/* <div style={{backgroundColor:darkMode}}>  */}
     <Box sx={{
      display: 'flex',
      flexDirection:'column',
      height: '100vh',
      backgroundColor:toggle?'grey':'white',
    }}><Box>
      <HeaderUp/>
    <Header/>
    <OptionsTab/> </Box> 
    
  
  
   
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      flexGrow:1,
      height:100,
      overflowY:'scroll'

    }}>
<Container maxWidth="xl" sx={{mb:3}}>
      <LocationCards/>
      <Box sx={{
        display:{xs:'flex',md:'none'}
      }}>
        <MobileFooter/>
      </Box>
      </Container>
      </Box>
      
      <MapComponent/>
     
       
        <Box sx={{
            display:{
                xs:'flex',md:'none'
            }
        }}>
        <FooterMenu/>
        </Box>
        <Box sx={displayOnDesktop}>
        <Footer/>
        </Box>

       </Box>
      
     </CssBaseline>
   
   
    </React.Fragment>
  
        
   
   
  )
}

export default LandingPage