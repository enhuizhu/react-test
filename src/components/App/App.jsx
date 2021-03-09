import React, { useEffect, useState } from 'react';
import Header from '../Header';
import STYLES from './App.scss';
import { ApiService } from '../../service/ApiService';
import { FlightsInfo } from '../FlightsInfo/FlightsInfo'

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [itineraries, setItineraries] = useState([]);

  useEffect(() => {
    ApiService.getAllFlightData().then(result => {
      const legsMap = result.legs.reduce((legsMap, leg) => {
        legsMap[leg.id] = leg;
        return legsMap;
      }, {})
      
      const newItineraries = result.itineraries.map(itinerarie => {
        const legs = itinerarie.legs.map(id => legsMap[id]);
        return {
          ...itinerarie,
          legs
        }
      })

      setItineraries(newItineraries);
    }).catch(console.error);
  }, []);

 return <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      {
        itineraries.map((itinerarie, index) => 
          <FlightsInfo 
            key={index} 
            itinerarie={itinerarie}/>
        )
      }
    </main>
  </div>
}

export default App;
