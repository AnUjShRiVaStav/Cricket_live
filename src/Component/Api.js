   
    
    const API = 'UKj9VLewcwgidu6YhEfKyQZD1Zt1';


  export default function MatchData  ()  {
      
    const url = `https://cricapi.com/api/matches?apikey=${API}`;

        return fetch(url) 
        .then( (res) =>res.json())
        
        .catch( (err) => console.log('Error : ', err));
    }

   

