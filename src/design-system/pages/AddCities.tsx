import React from 'react';
import {Button, FormControl, Grid, TextField} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styled from '@emotion/styled';
import '../../App.css';

import {PageTemplate} from '../templates/Template';
import {cards} from '../organisms/CityCard';

export const AddCities: React.FC = () => {
  return (
    <PageTemplate>
      <DivStyled fontWeight='bold'>Add Cities</DivStyled>
      <DivStyled>Add 5 cities whose temperature you want to track.</DivStyled>
      <FormControl style={{width: '100%'}} className='textfield-wrapper'>
        <TextFieldStyled
          className='cities-input'
          placeholder='Add a city...'
          InputProps={{
            startAdornment: <AddCircleIcon fontSize='large' />,
            endAdornment: (
              <ButtonStyled className='add-button'>Add</ButtonStyled>
            ),
          }}
        />
      </FormControl>

      <div style={{padding: '50px 0'}}>
        <Grid container justifyContent='space-between'>
          {cards.map((x: any, index: number) => (
            <Grid
              key={index}
              item
              xs={6}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                textAlign: 'center',
                minHeight: '200px',
                height: '210px',
                maxWidth: '48%',
                margin: '5px 0',
              }}
            >
              <div
                style={{
                  paddingTop: '16px',
                  fontWeight: 'bold',
                }}
              >
                {x.city}
              </div>
              <div style={{paddingTop: '10px', fontSize: '12px'}}>
                {x.country}
              </div>
              <div
                style={{
                  paddingTop: '20px',
                  fontSize: '28px',
                  fontWeight: 'bold',
                }}
              >
                {x.temp}
              </div>
              <Button
                style={{
                  width: '70%',
                  marginTop: '28px',
                  backgroundColor: '#04353C',
                  color: '#fff',
                  fontSize: '12px',
                  borderRadius: '10px',
                  textTransform: 'capitalize',
                }}
              >
                View City
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </PageTemplate>
  );
};

const DivStyled = styled.div<{fontWeight?: string}>`
  font-size: 16px;
  font-weight: ${({fontWeight}) => fontWeight};
  color: #fff;
  padding: 10px 0 20px 0;
  height: fit-content;
`;

const TextFieldStyled = styled(TextField)`
  background-color: #fff;
  .MuiOutlinedInput-input {
    padding-left: 10px;
  }
`;
const ButtonStyled = styled(Button)`
  text-transform: capitalize;
  color: white;
  background-color: #04353c;
`;
