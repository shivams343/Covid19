import axios from 'axios'

const url='https://covid19.mathdro.id/api';

export const fetchData =async(country)=>{
    let changeableUrl=url;
    if(country && country!=='global'){
        changeableUrl=`${url}/countries/${country}`;
    }
    //console.log(changeableUrl)
    try {
        const {data :{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeableUrl);
        //console.log(confirmed);
        return {confirmed,recovered,deaths,lastUpdate};
    } catch (error) {
        console.log(error)
    }
}
export const fetchCountries = async()=>{
    try {
        const {data:{countries}}= await axios.get(`${url}/countries`)
        //console.log(countries);
        return countries.map((country)=> country.name);
    } catch (error) {
        console.log(error)
    }
}
/*
export const fetchDailyData = async()=>{
   try {
       const response = await axios.get(`${url}/daily`)
       console.log(response)
       return response;
   } catch (error) {
       console.log(error)
   }
}*/