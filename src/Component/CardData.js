import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";

  
  export default function CartData({match}){
     
    

      return(
         
        <Card style = {{ margin: '20', marginBottom: 12, background:'white'}}>
       <CardContent>
          <Grid container justify = 'center' alignItems='center'>
           
          <Grid >
          <Typography varient='h4'>
               {match["team-1"]} 
          </Typography>
           
          </Grid>
          <Grid >
          <img
          style = {{width: '50px'}}
          src = {'https://www.kindpng.com/picc/m/406-4066173_vs-logo-png-justin-bieber-challenge-tom-cruise.png'}
          alt = ''
          />  
          </Grid>
          <Grid >  <Typography varient='h4'>
          {match["team-2"]} 
          </Typography>
          </Grid>
          </Grid>
           <CardActions>
           
            <Grid container justify = 'center' style = {{marginLeft:50, marginTop:20}} >
            {/* <Button variant="contained" color = 'primary' style = { {borderRadius:'50px'}} 
              >
               Details
            </Button> */}
           <Button variant="contained" color = 'primary' style = { {borderRadius:'50px'}}>
           Start Time {new Date(match.dateTimeGMT).toLocaleString()}
           </Button>
            </Grid>
           
            
          
           </CardActions>
       </CardContent>

       </Card>
       
      )
  }