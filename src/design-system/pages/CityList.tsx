import React, {useEffect, useState} from 'react';
import '../../Flex.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from '@emotion/styled';
import {PageTemplate} from '../templates/Template';
import {CityCard} from '../organisms/CityCard';
import {getCityAndForecast} from '../../api/api';
import {getLocalstorage, setLocalstorage} from '../../utils/localstorage';
import {CityForecast} from '../../model/city-forecast';
import {TextField} from '../molecules/TextField';
import {Button} from '../atoms/Button';
import {Div} from '../atoms/Div';

export const CityList = () => {
  const [cities, setCities] = useState<CityForecast[]>([]);
  const [searchCity, setSearchCity] = useState<string>('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const cityKeys = getLocalstorage<string[]>('cities');
    let data: CityForecast[] = [];
    cityKeys?.forEach((x) => {
      data.push(getLocalstorage<CityForecast>(x));
    });
    data?.length && setCities(data);
  }, []);

  const onAddCity = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await getCityAndForecast(searchCity, setDisabled);

    console.log('data', res);
    setLocalstorage(res.city.name, res);
    const ls_city = getLocalstorage<string[]>('cities');

    const setLScities: string[] = [];
    let alreadyExist = true;
    if (!ls_city?.length) {
      setLScities.push(res.city.name);
      alreadyExist = false;
    } else {
      setLScities.push(...ls_city);
      // don't push duplicates
      if (!ls_city.includes(res.city.name)) {
        setLScities.push(res.city.name);
        alreadyExist = false;
      }
    }
    setLocalstorage('cities', setLScities);
    const data = [...cities, res];
    !alreadyExist && setCities(data);
  };

  return (
    <PageTemplate>
      <FlexContainer className='input-flex-container'>
        <FlexItem className='input-flex-item'>
          <Div color='#fff' fontsize='16px' margin='20px 0'>
            <strong>Add Cities</strong>
            <br />
            <br />
            Add 5 cities whose temperature you want to track.
          </Div>

          <form className='input-margin' onSubmit={(e) => onAddCity(e)}>
            <TextField
              value={searchCity}
              placeholder='Add a city...'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchCity(e.target.value)
              }
              startAdornment={<AddCircleIcon fontSize='large' />}
              endAdornment={
                <Button
                  type='submit'
                  className='add-button'
                  disabled={disabled}
                >
                  Add
                </Button>
              }
            />
          </form>
        </FlexItem>
      </FlexContainer>
      <FlexContainer className='flex-container-card'>
        {cities.map((x: CityForecast, index: number) => (
          <div key={index} className='flex-item-card'>
            <CityCard
              name={x.city.name}
              country={x.city.country}
              temp={x.forecast.currentConditions.temp}
            />
          </div>
        ))}
      </FlexContainer>
    </PageTemplate>
  );
};

const FlexContainer = styled.div`
  display: flex;
`;
const FlexItem = styled.div``;
