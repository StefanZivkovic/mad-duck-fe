export const setLocalstorage = (key: string, data: any) =>
  localStorage.setItem(key, JSON.stringify(data));

export const getLocalstorage = <T>(key: string): T => {
  const data = localStorage.getItem(key);
  return data && JSON.parse(data);
};
