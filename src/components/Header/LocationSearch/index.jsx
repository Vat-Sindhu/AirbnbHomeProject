import React,{useContext} from 'react'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
//react Icons
import {IoSearchCircleSharp} from 'react-icons/io5';
import {pink} from '@mui/material/colors'
import { Button, Link } from '@mui/material'
import { fontWeight } from '@mui/system'
import { ThemeContext } from '../../../Context/ThemeContextProvider'

const choices=[
    {id:1,text:'Anywhere'},
    {id:2,text:'Anyweek'},
    {id:3,text:'Add guest',withIcon:true},
];

const LocationSearch = () => {
    const {toggle,togglefunction}=useContext(ThemeContext)

  return (
    <Paper sx={{
        borderRadius:20,ml:15,
        
    }}elevation={3}
    >
        <Stack sx={{
            borderRadius:20,pl:2 ,
            backgroundColor:toggle?'grey':'white',
        }}divider={<Divider orientation="vertical" flexItem/>}
        >
             {/* <Typography sx={{
                                color:(theme)=>theme.palette.text.primary,
                                fontWeight:'bold',
                                
                            }} */}
                            
            {/* <Button to='/'>Anywhere</Button>
            <Button to='/'>Anyweek</Button>
          
            <Button to='/'>Addguest <IoSearchCircleSharp color={pink[500]} size={30}/></Button>
            */}
             {choices.map((choice)=>{
                    return(
                        <Button  key={choice.id}>
                            <Typography sx={{
                                color:(theme)=>theme.palette.text.primary,
                                fontWeight:'bold',
                               
                            }}
                            >
                                 {choice.text}

                             </Typography> 
                            {
                                choice.withIcon &&(
                                  <Box sx={{
                                    ml:1,
                                    mt:1,
                                    mr:1,
                                    
                                }}
                                >
                                    <IoSearchCircleSharp onClick={togglefunction}  color={pink[500]} size={32}/>
                                </Box>
                            )}
                        </Button>
                    );
                })}
             
        </Stack>
    </Paper>
  );
};

export default LocationSearch