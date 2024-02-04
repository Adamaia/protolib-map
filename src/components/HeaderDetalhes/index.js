import React from "react"

import { useHistory } from "react-router";
import { goToHome } from "../routes/coordinator";

import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { HomeIcon, SearchIcon }  from '@mui/icons-material';
// import SearchIcon from '@mui/icons-material/Search';
// import HomeIcon from '@mui/icons-material/HomeIcon';



export const HeaderDetalhes = () => {
    const history = useHistory();
    return(
        <div>
            <Button 
                size="small" 
                color="primary"
                // sx={history.goBack}
                onClick={history.goBack}
            >
                voltar
            </Button>
            <Typography>Detalhes</Typography>

            <IconButton 
                    type="button" 
                    sx= "sx" 
                    aria-label="3"
                    onClick={() => goToHome(history)}
                    >
                        <HomeIcon />
            </IconButton>
       </div>
    )

}