import { useState } from "react";
import { NavbarPage } from "./components/NavbarPage";
import { MainSection } from "./components/MainSection";
import Button from '@mui/material/Button';
// import { ReveneuCard } from "./components/RevenueCard";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function App() {
  const [input, setInput] = useState("");
  console.log(input);
  return (
    <>
    {/* <NavbarPage/>
    <MainSection/> */}
    <Button>Primary</Button>
    <TextField id="outlined-basic" onChange={(value)=>{
      setInput(value.target.value)
    }
    } label="Outlined" variant="outlined" />
    
    </>
  );
}

export default App;
