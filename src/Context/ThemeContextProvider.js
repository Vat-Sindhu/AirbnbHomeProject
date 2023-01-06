import React,{createContext,useState} from 'react';

const ThemeContext=createContext();

const ThemeContextProvider = (props) => {
    const [toggle,setToggle]=useState(false);
    const [tgle,setTgle]=useState(true);
    const togglefunction=(cond)=>{
      if(cond){
        setToggle(toggle=>!toggle);
      }
      else{
        setTgle(false);
      }
    };
  return (
    <div>
       <ThemeContext.Provider value={{toggle,togglefunction}}>
        {props.children}
       </ThemeContext.Provider>
        </div>
  )
}

export {ThemeContext, ThemeContextProvider};

