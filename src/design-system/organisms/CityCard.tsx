import styled from '@emotion/styled';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {City} from '../../model/city';
import {Button} from '../atoms/Button';

export const cards = [
  {
    city: 'Novi Sad',
    country: 'Serbia',
    temp: '12°C',
  },
  {
    city: 'Belgrade',
    country: 'Serbia',
    temp: '12°C',
  },
  {
    city: 'Paris',
    country: 'France',
    temp: '20°C',
  },
  {
    city: 'Budapest',
    country: 'Hungary',
    temp: '15°C',
  },
  {
    city: 'Barcelona',
    country: 'Spain',
    temp: '32°C',
  },
];

const maps: {[key: string]: string} = {
  RS: 'Serbia',
  FR: 'France',
  HU: 'Hungary',
  ES: 'Spain',
};

type CityCardProps = Pick<City, 'name' | 'country'> & {temp: string};

export const CityCard: React.FC<CityCardProps> = ({name, country, temp}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/forecast/${name}`)}
      style={{
        backgroundColor: '#fff',
        borderRadius: '10px',
        textAlign: 'center',
        minHeight: '200px',
      }}
    >
      <div
        style={{
          paddingTop: '16px',
          fontWeight: 'bold',
        }}
      >
        {name}
      </div>
      <div style={{paddingTop: '10px', fontSize: '12px'}}>{maps[country]}</div>
      <div
        style={{
          paddingTop: '20px',
          fontSize: '28px',
          fontWeight: 'bold',
        }}
      >
        {temp}°C
      </div>
      <ButtonStyled
      // style={{
      //   width: '70%',
      //   marginTop: '28px',
      //   backgroundColor: '#04353C',
      //   color: '#fff',
      //   fontSize: '12px',
      //   borderRadius: '10px',
      //   textTransform: 'capitalize',
      // }}
      >
        View City
      </ButtonStyled>
    </div>
  );
};

const ButtonStyled = styled(Button)`
  width: 70%;
  margin-top: 28px;
  background-color: #04353c;
  color: #fff;
  font-size: 12px;
  border-radius: 10px;
`;
