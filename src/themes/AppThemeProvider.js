import React from 'react'
import {createTheme,ThemeProvider} from '@mui/material/styles'
import {pink} from '@mui/material/colors';
import {grey} from '@mui/material/colors';

const theme=createTheme({
    typography:{
        allVariants:{
            fontFamily:'Raleway',
            textTransform:'none',
            fontSize:15,
        },
    },
    palette:{
        primary:{
            main:grey[700]
        },
        secondary:{
            main:pink[500]
        }
    },
    components:{
        MuiTypography:{
            defaultProps:{
                sx:{
                    px:1,
                },
                variant:'subtitle2',
                textTransform:'capitalize',
            },
        },
        MuiStack:{
            defaultProps:{
                sx:{
                    px:2,
                    py:1,
                },
                spacing:2,
                direction:'row',
            },
        },
        MuiPaper:{
            defaultProps:{
                elevation:0
            }
        },
        MuiLink:{
            defaultprops:{
                sx:{
                    color:theme=>theme.palette.primary.main
                },
                underline:'none'
            }
        },
        MuiButton:{
            defaultProps:{
                size:'small',
                p:0,
                disableRipple:true,
    
            },variant:'text',
        },
        MuiTab:{
            defaultProps:{
                disableRipple:true,
            },
        },
    },
});
const AppThemeProvider = (prop) => {
  return <ThemeProvider theme={theme}>{prop.children}</ThemeProvider>
   
  
}
// const ThemeContext=createContext();
// const  ContextThemeProvider=(props)=>{
//      const [darkMode,setDarkMode]=useState('#ff0000');
//      return (
//         <ThemeContext.Provider value={{darkMode,setDarkMode}}>
//             {props.children}
//         </ThemeContext.Provider>
//      )

     
// }
export default AppThemeProvider