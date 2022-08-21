const cityApiKey =
  process.env.REACT_APP_CITY_API_KEY ||
  '9cGyrL1DtvEB5pUo5lJ1Iw==rJseX3amsEH7adV4';

const forecastApiKey =
  process.env.REACT_APP_FORECAST_API_KEY || 'THUDWH9998Q4PRNFG5C73TUGL';

export const getCityAndForecast = async (
  city: string,
  setDisabled: Function
) => {
  let cityRes, forecast;
  try {
    setDisabled(true);
    cityRes = await getCity(city);
    forecast = await getForecast(city);
  } catch (e) {
    throw e;
  } finally {
    setDisabled(false);
  }

  return {city: cityRes[0], forecast};
};
const getCity = async (city: string) => {
  const res = await fetch(`https://api.api-ninjas.com/v1/city?name=${city}`, {
    headers: {'X-Api-Key': cityApiKey},
  });
  const data = await res.json();

  return data;
};
const getForecast = async (city: string) => {
  return fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${forecastApiKey}&contentType=json`,
    {
      method: 'GET',
      headers: {},
    }
  )
    .then((response) => response.json())
    .catch((err) => {
      console.error(err);
      throw err;
    });
};
