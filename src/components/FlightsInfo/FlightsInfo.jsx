import React from 'react';
import { Leg } from '../Leg/Leg';
import styled from 'styled-components';

export const FlightsInfo = ({itinerarie}) => {
  return <InfoWrapper>
    <div>
      {itinerarie.legs.map(leg => <Leg key={leg.id} leg={leg}/>)}
    </div>
    <InfoFooter>
      <div>
        <div className='price'>{itinerarie.price}</div>
        <div className='agent'>{itinerarie.agent}</div>
      </div>
      <div>
        <SkyScannerBtn>Select</SkyScannerBtn>
      </div>
    </InfoFooter>
  </InfoWrapper>;
};

const InfoWrapper = styled.div`
  background-color: white;
  box-shadow: 0px 0px 4px grey;
  padding: 10px;
  margin: 15px;
  border-radius: 7px;
`;

const InfoFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
  
  .price {
    font-size: 36px;
    color: black;
    margin-bottom: 13px;
  }
`

const SkyScannerBtn = styled.div`
  display: inline-block;
  background-color: #19a598;
  color: white;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 8px;
`

