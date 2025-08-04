// we can do with fetch also and react querry also, but we are using axios here
// Axios ek JavaScript library hai jo web browsers ya Node.js mein HTTP requests bhejne ke liye use hoti hai — jaise ke data GET, POST, PUT, DELETE karna kisi API se.
import axios from "axios";   

const api = axios.create({
    baseURL : "https://restcountries.com/v3.1",
});

// HTTP GET METHOD
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// HTTP GET METHOD for the indvi. country name
export const getCountryIndData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
