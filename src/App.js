import React, { Component } from 'react';
import './App.css';
import CoronaImg from './img/covid19.jfif'
//import Cards from './components/Cards/Cards';
//import Charts from './components/Charts/Charts';
//import CountryPicker from './components/CountryPicker/CountryPicker';

import {Cards,Charts,CountryPicker} from './components';
import styles from './App.module.css'
import {fetchData} from './api/index';

class App extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       data:{},
       country:''
    }
  }
  handleCountryChange= async(country)=>{

    const fetchedData = await fetchData(country);
    
    this.setState({data:fetchedData,country:country});
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
    //console.log(data);
  }
  
  render(){
    const {data,country}=this.state;
    return (
      <div> 
        <div className={styles.container}><img src={CoronaImg} className={styles.img} alt="COVID19"/></div>
        <div className={styles.container}><Cards data={data}/></div> 
         <div className={styles.container}><CountryPicker handleCountryChange={this.handleCountryChange}/></div>
         <div className={styles.container}><Charts data={data} country={country}/></div>
      </div>
    );
  }
}

export default App;
