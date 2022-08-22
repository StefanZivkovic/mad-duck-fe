import styled from '@emotion/styled';
import './scroll.css';
import './grid.css';
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
import {dayRenderFormat} from '../../utils/date';

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

  const getGeneralDetails = () => (
    <>
      <div style={{margin: '5px 0'}}>
        <strong>Feels like</strong> {data.forecast.days[0].feelslike}°C
      </div>
      <div style={{margin: '5px 0'}}>
        <strong>Humidity</strong> {data.forecast.days[0].humidity}%
      </div>
      <div style={{margin: '5px 0'}}>
        <strong>Pressure</strong> {data.forecast.days[0].pressure} mbar
      </div>
      <div style={{margin: '5px 0'}}>
        <strong>Wind</strong> {data.forecast.days[0].windspeed} m/s SE
      </div>
      <div style={{margin: '5px 0'}}>
        <strong>UV index</strong> {data.forecast.days[0].uvindex}
      </div>
    </>
  );
  const cityInfo = () => (
    <>
      <div
        style={{
          fontSize: '20px',
          fontWeight: 'bold',
          margin: '0 0 10px 0',
        }}
      >
        {data.city.name}
      </div>
      <div style={{margin: '0 0 5px 0'}}>{data.forecast.resolvedAddress}</div>
      <div>
        {data.forecast.latitude}° N, {data.forecast.longitude}° E
      </div>
    </>
  );

  return (
    <PageTemplate>
      <OverviewInfo className='grid-container'>
        <div className='grid-item-1'>{cityInfo()}</div>
        <div className='grid-item-2'>
          <AwesomeSunIcon />
          <div style={{fontSize: '30px'}}>
            {data.forecast.currentConditions.temp}°C
          </div>
        </div>
        <div className='grid-item-3'>{getGeneralDetails()}</div>
      </OverviewInfo>
      <HourlyInfo>
        {[
          data.forecast.days[0],
          data.forecast.days[1],
          data.forecast.days[2],
        ].map((day: any, index: number) => (
          <div key={index}>
            <div style={{fontWeight: 'bold', padding: '20px 0 10px 0'}}>
              {dayRenderFormat(day.datetime)}
            </div>
            <div
              style={{columnGap: '20px', display: 'flex', overflowX: 'auto'}}
            >
              {day.hours.map((x: any, index: number) => (
                <div
                  key={index}
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'space-between',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>{formatHours(x.datetime)}h</div>
                  <div style={{margin: '20px 0 10px 0'}}>{getIcon(x.icon)}</div>
                  <div style={{margin: '0 0 20px 0'}}>
                    {Math.floor(x.temp)}°
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </HourlyInfo>
    </PageTemplate>
  );
};

const OverviewInfo = styled.div`
  border-radius: 16px;
  background-color: #fff;
  padding: 20px;
`;
const HourlyInfo = styled.div`
  border-radius: 16px;
  background-color: #fff;
  padding: 0 20px 20px;
  margin: 20px 0;
`;
