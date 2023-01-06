import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
//components
import HeaderUp from '../HeaderUp'
import Logo from '../Header/Logo'
import LocationSearch from '../Header/LocationSearch';
import { flexBetweenCenter,dFlex, displayOnDesktop } from '../../themes/commonStyles'
import ProfileSettings from '../Header/ProfileSettings';
import MobileSearch from '../MobileSearch';
const Header = () => {
  return (
    <Box
        sx={{
            ...dFlex,
            minHeight:70,
            borderBottom:'1px solid #ddd',
            mt:-4,
        }}>
            <Container maxWidth="xl">
                <Box sx={{
                     ...flexBetweenCenter,
                     minHeight:90,
                     px:4,
                }}>
                  {/* <Box sx={displayOnDesktop}>
                    <HeaderUp/>
                    </Box> */}
                    <Box sx={displayOnDesktop}>
                    <Logo/>
                    </Box>
                    <Box sx={displayOnDesktop}>
                    <LocationSearch/> 
                        </Box>
                        <Box sx={displayOnDesktop}>
                         <ProfileSettings/> 
                        </Box>
                        <Box sx={{display:{xs:'flex',md:'none'}}}>
                        <MobileSearch/>
                        </Box>
                     
                    </Box>
            </Container>
    </Box>
   
  );
};

export default Header