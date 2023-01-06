import React ,{useContext, useState} from 'react'
import Box from '@mui/material/Box'
import Tabs,{tabsClasses} from '@mui/material/Tabs'
import Tab from '@mui/material/Tab';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import  Typography  from '@mui/material/Typography';
//reacticons
import {FaFilter} from 'react-icons/fa';
import { locationsTab } from '../../Data/Icons-data';
import { ThemeContext } from '../../Context/ThemeContextProvider';

const OptionsTab = () => {
    const [value,setValue]=useState(0);
    const {toggle}=useContext(ThemeContext);
    const handleChange=(event,newValue)=>{
        setValue(newValue)
    }
  return (
    <Container maxWidth="xl">
        <Box sx={{
            display:'flex',
            flexGrow:1,
            px:{xs:0,md:2},
            alignItems:'center',
            mt:2,
            mb:2,

        }}
        >
            <Tabs
            value={value}
            onChange={handleChange}
            textColor='black'
            variant="scrollable"
            scrollButtons
            sx={{
                [`&.${tabsClasses.scrollButtons}`]:{
                    '&.Mui-disabled':{opacity:0.3},
                },
            }}
            >
                {locationsTab.map(tab=>{
                    return <Tab key={tab.id} icon={tab.icon} label={tab.label}/>;
                })}
            </Tabs>
            <Button to='#' sx={{
                display:{xs:'none',md:'block'},
                border:'1px solid #ddd',
                minWidth:90,
                justifyContent:'space-between',
                borderRadius:2,
                textTransform:'capitalize',
                py:1,
                color:'theme.palette.text.primary'
  

            }}><Typography sx={{
                color:(theme)=>theme.palette.text.primary,
                fontWeight:'bold',
               
            }}
            >
                <FaFilter/>Filters</Typography>
            </Button>
        </Box>
    </Container>
  )
};

export default OptionsTab