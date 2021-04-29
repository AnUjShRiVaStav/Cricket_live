
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import MatchData from './Component/Api';
import CartData from './Component/CardData';
import { Grid } from '@material-ui/core';




function App() {

  const[matches,setMatches] = useState([])
  

  useEffect( ()=> {
    MatchData()
    .then( (data) => setMatches(data.matches))
    // console.log(matches)
      .catch();
  }, []);

  


  return (
  
    <div className="App">
     <Navbar />
    <h1>Cricket T20 Calendar</h1>
   
      <Grid container>
    <Grid sm = '3'> </Grid>
    <Grid sm = '6'>
    {matches.map( (match) =>( 
      <>
        {match.type == 'Twenty20'? (
          <CartData key = {match.unique_id} match = {match} />
        
        ) : (
          ''
        )}
      </>
   
   ))}
    </Grid>
  </Grid>

  


    </div>
  );
}

export default App;
