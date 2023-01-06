import React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import HeaderUp from '../HeaderUp'
import Header from '../Header'
import OptionsTab from '../OptionsTab';
const index = () => {
  return (
    <React.Fragment>
    <CssBaseline>
    {/* backgroundColor:toggle?'grey':'white', */}
    {/* <div style={{backgroundColor:darkMode}}> */}
    <Box sx={{
      display: 'flex',
      flexDirection:'column',
      height: '100vh',
     
    }}><Box>
      <HeaderUp/>
    <Header/>
    <OptionsTab/>
    
    </Box>
    </Box>
    </CssBaseline>
    </React.Fragment>
  )
}

export default index