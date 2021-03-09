import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const timeFormat = 'HH:mm';

const getDuration = (durationMins) => {
  const hours = Math.floor(durationMins / 60);
  let mins = durationMins % 60;

  if (mins < 10) {
    mins = `0${mins}`;
  }

  return `${hours}h ${mins}`
}

export const Leg = ({leg}) => {
  return <LegWrapper>
    <div className='time-location'>
      <img src={`https://logos.skyscnr.com/images/airlines/favicon/${leg.airline_id}.png`}/>
      
      <div className='time-location-wrapper'>
        <div className='time-location-info'>
          <div className='time'>{moment(leg.departure_time).format(timeFormat)}</div>
          <div className='location'>{leg.departure_airport}</div>
        </div>
        <div className='arrow'>&rarr;</div>
        <div className='time-location-info'>
          <div className='time'>{moment(leg.arrival_time).format(timeFormat)}</div>
          <div className='location'>{leg.arrival_airport}</div>
        </div>
      </div>
    </div>

    <div className='duration-stops'>
      {getDuration(leg.duration_mins)}<br/>
      <span className={`${leg.stops === 0 ? 'primary' : 'secondary'}`}> 
        {leg.stops === 0 ? 'Direct' : `${leg.stops} ${leg.stops > 0 ? 'Stops' : 'stop'}`}
      </span>
    </div>
  </LegWrapper>
};

const LegWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  .primary {
    color: #19a598;
  }

  .secondary {
    color: #d8697c;
  }

  .duration-stops {
    text-align: right;
    margin-right: 2px;
    line-height: 1.5;
  }
  
  .time-location {
    display: flex;
    justify-content: flex-start;
    margin-left: 10px;

    img {
      width: 27px;
      margin-right: 15px;
    }

    .time-location-wrapper {
      display: flex;
      
      .arrow {
        margin: 0 20px;
        font-size: 30px;
        top: 16px;
        position: relative;
      }

      .time-location-info {
        line-height: 1.5;
        
        .time {
          font-weight: bold;
          color: black;
          font-size: 20px;
        }

        .location {
          font-size: 20px;
        }
      }
    }
  }
`
