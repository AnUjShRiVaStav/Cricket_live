import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';


export default function Navbar(){
    return(
        <div>
          <AppBar position="static">
           
         <Toolbar>
             <IconButton color="inherit">
                 <MenuIcon  />
             </IconButton>
             <Typography variant = 'h5'>
                 Cricket Live
             </Typography>
         </Toolbar>

        </AppBar>
        </div>
    )
}