
const BASE_URL = `https://swapi.dev/api/starships/`;
const show = async (number) => {
    try {
      const queryString = `${number}`;
      const res = await fetch(BASE_URL + queryString);
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

export { show };