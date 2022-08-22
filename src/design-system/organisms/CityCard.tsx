import styled from '@emotion/styled';
import React from 'react';
import {useNavigate} from 'react-router-dom';

import {City} from '../../model/city';
import {Button} from '../atoms/Button';
import {Div} from '../atoms/Div';

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
    <Div
      onClick={() => navigate(`/forecast/${name}`)}
      backgroundcolor='#fff'
      borderradius='10px'
      textalign='center'
      minheight='200px'
    >
      <Div padding='16px 0 0 0' fontweight='bold'>
        {name}
      </Div>
      <Div padding='10px 0 0 0' fontsize='12px'>
        {maps[country]}
      </Div>
      <Div padding='20px 0 0 0' fontsize='28px' fontweight='bold'>
        {temp}°C
      </Div>
      <ButtonStyled>View City</ButtonStyled>
    </Div>
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
