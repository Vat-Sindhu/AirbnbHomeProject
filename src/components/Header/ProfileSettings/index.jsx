
import React ,{useState}from 'react'
import Box from '@mui/material/Box'
import  {Link} from 'react-router-dom'
import Button  from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
//react Icons
import {BsGlobe}from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import {flexCenter} from '../../../themes/commonStyles';
import '../ProfileSettings/Profile.css'

const ProfileSettings = () => {
    const [profileOpen,setProfileOpen]=useState(false)
    const handleProfileOpen=()=>{
        setProfileOpen(!profileOpen);
    };
  return (
    <Box sx={flexCenter}>
   <Link to='/AirbnbHome' style={{textDecoration:'none'}}> <Button><Typography sx={{
                                color:'black',
                                fontWeight:'bold',
                               
                            }}>Airbnb Your Home</Typography>
                            </Button></Link>
                            <Stack>
            <Button variant="text">
                <BsGlobe size={24}/>

            </Button>
            <div className="Profile_DropDown">
            <Button variant="text" 
                sx={{
                    borderRadius:10,
                    border:'1px solid #ddd',
                }} onClick={handleProfileOpen}
                >
                 <Stack>
                    <AiOutlineMenu size={24}/>
                    <FaRegUserCircle size={24}/>
                    </Stack>   
            </Button>
            {profileOpen?(
                <ul className="Profile_menu">
                    <li className="Profile_menuItem"><Button  className="Profile_menu_Btn"><Typography sx={{ fontWeight:'bold', }} >SignUp</Typography></Button></li>
                    <li className="Profile_menuItem"><Button className="Profile_menu_Btn">Login</Button></li>
                    <Divider orientation="horizontal" flexItem/>
                    <li className="Profile_menuItem"><Button className="Profile_menu_Btn">Airbnb Your Home</Button></li>
                    <li className="Profile_menuItem"><Button className="Profile_menu_Btn">Host an Experience</Button></li>
                    <li className="Profile_menuItem"><Button className="Profile_menu_Btn">Help</Button></li>

                </ul>
            ):null}
            </div>

        </Stack>
        </Box>
    
  );
};

export default ProfileSettings