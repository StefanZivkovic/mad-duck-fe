import styled from '@emotion/styled';
import './scroll.css';
import {Grid} from '@mui/material';
import {useParams} from 'react-router-dom';
import {CityForecast} from '../../model/city-forecast';
import {AwesomeSunIcon} from '../../svg/AwesomeSunIcon';
import {CloudyIcon} from '../../svg/CloudyIcon';
import {CloudyNightIcon} from '../../svg/CloudyNightIcon';
import {CloudySunIcon} from '../../svg/CloudySunIcon';
import {RainIcon} from '../../svg/RainIcon';
import {SmallSunIcon} from '../../svg/SmallSunIcon';
import {getLocalstorage} from '../../utils/localstorage';
import {PageTemplate} from '../templates/Template';

const enum iconType {
  clear_night = 'clear-night',
  partly_cloudy_night = 'partly-cloudy-night',
  clear_day = 'clear-day',
  partly_cloudy_day = 'partly-cloudy-day',
  rain = 'rain',
  cloudy = 'cloudy',
}

export const Forecast = () => {
  const {city} = useParams();

  const data = getLocalstorage<CityForecast>(city!);

  const formatHours = (datetime: string) => {
    const hour = datetime.slice(0, 2);
    const parsedNumber = parseInt(hour);
    return parsedNumber === 0 ? hour : parsedNumber;
  };

  const getIcon = (icon: string) =>
    (icon === iconType.rain && <RainIcon />) ||
    (icon === iconType.clear_day && <SmallSunIcon />) ||
    (icon === iconType.partly_cloudy_day && <CloudySunIcon />) ||
    (icon === iconType.partly_cloudy_night && <CloudyNightIcon />) ||
    (icon === iconType.clear_night && <CloudyIcon />) ||
    (icon === iconType.cloudy && <CloudyIcon />);

  return (
    <PageTemplate>
      <div>
        <OverviewInfo>
          <Grid container>
            <Grid item xs={4}>
              <div style={{fontSize: '20px', fontWeight: 'bold'}}>
                {data.city.name}
              </div>
              <div>{data.forecast.resolvedAddress}</div>
              <div>
                {data.forecast.latitude}° N, {data.forecast.longitude}° E
              </div>
            </Grid>
            <Grid item xs={4} textAlign='center'>
              <AwesomeSunIcon />
              <div style={{fontSize: '40px'}}>
                {data.forecast.currentConditions.temp}°C
              </div>
            </Grid>
            <Grid item xs={4} width='auto'>
              <div>
                <strong>Feels like</strong> {data.forecast.days[0].feelslike}°C
              </div>
              <div>
                <strong>Humidity</strong> {data.forecast.days[0].humidity}%
              </div>
              <div>
                <strong>Pressure</strong> {data.forecast.days[0].pressure} mbar
              </div>
              <div>
                <strong>Wind</strong> {data.forecast.days[0].windspeed} m/s SE
              </div>
              <div>
                <strong>UV index</strong> {data.forecast.days[0].uvindex}
              </div>
            </Grid>
          </Grid>
        </OverviewInfo>
        <HourlyInfo>
          {[
            data.forecast.days[0],
            data.forecast.days[1],
            data.forecast.days[2],
          ].map((day: any, index: number) => (
            <div key={index}>
              <div style={{fontWeight: 'bold', margin: '20px 0 10px 0'}}>
                {new Date(day.datetime).toString().slice(0, 10)}
              </div>
              <div
                style={{
                  display: 'flex',
                  overflowX: 'auto',
                }}
              >
                {day.hours.map((x: any, index: number) => (
                  <div
                    key={index}
                    style={{
                      flex: 1,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'space-between',
                    }}
                  >
                    <div style={{flex: 1}}>{formatHours(x.datetime)}h</div>
                    <div style={{margin: '20px 0 10px 0'}}>
                      {getIcon(x.icon)}
                    </div>
                    <div style={{flex: 1}}>{Math.floor(x.temp)}°</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </HourlyInfo>
      </div>
    </PageTemplate>
  );
};

const OverviewInfo = styled.div`
  border-radius: 16px;
  background-color: #fff;
  width: fit-content;
  padding: 20px;
`;
const HourlyInfo = styled.div`
  border-radius: 16px;
  background-color: #fff;
  padding: 20px;
  margin: 20px 0;
`;
