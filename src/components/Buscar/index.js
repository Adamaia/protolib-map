import React from 'react';
import { Icon } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export default function Buscar() {

    const divStyle = {
        // color: 'gray',
        maxWidth: '100%',
        backgroundColor: 'red',
        padding: '30px',
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      };
  
    return ( 

        <div 
            style={divStyle}
        >

    <Box
      component="form"
      sx={{
          '& > :not(style)': { m: 1, width: '70ch' },
        }}
        noValidate
        autoComplete="off"
        >

   




      <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
            >
            


            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Pesquisar Livro"
                inputProps={{ 'aria-label': 'search google maps' }}
                fullWidth="true"
                />


                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">

                <SearchIcon />
            </IconButton>

        </Paper>


    </Box>


   


        </div>

    )
}