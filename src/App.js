import React, {  useState, useEffect, Fragment } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';

import {getMatches} from './api/Api'; 
import { Grid } from '@material-ui/core';

// arrow function wrapped in () directly returns
// whereas wrapped in {} then use return keyword

function App() {

    const [matches, setMatches] = useState([]);
    
    useEffect(() => {  // useEffect is used with hooks in place of componentdidmount & componentdidupdate
      getMatches()
      .then((data) => setMatches(data.matches)) //assigning data fetched through api to state-Hook
      .catch((error) => alert("Can't load data"));
    }, []);

    return (
    <div className="App">
      <Navbar />
      <Grid container>
        <Grid sm="2"></Grid>
        <Grid sm="8">
          {
            matches.map((match) => {
              
              return(
              <Fragment>
                {
                  ((match["team-1"]=="Royal Challengers Bangalore" || 
                    match["team-1"]=="Chennai Super Kings" || 
                    match["team-1"]=="Rajasthan Royals"  ||
                    match["team-1"]=="Kings XI Punjab" || 
                    match["team-1"]=="Kolkata Knight Riders" || 
                    match["team-1"]=="Delhi Capitals"    ||
                    match["team-1"]=="Mumbai Indians" || 
                    match["team-1"]=="Sunrisers Hyderabad"
                  )?  
                  ( <MyCard key={match.unique_id} match={match} />) 
                  : (""))
                }
              </Fragment>);
            })
          }
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
