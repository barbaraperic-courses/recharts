import React, { useState, useEffect } from 'react';
import ChartGender from './Chart';

const Fetch = () => {
  const [gender, setGender] = React.useState([]);
  const [age, setAge] = React.useState([]);
  const [location, setLocation] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  const endpoint = "https://gitlab.com/-/snippets/2149167/raw/main/data.json";
  
  const myData = () => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => {
        setGender(data.profiles[0]);
        setAge(data.profiles[1]);
        setLocation(data.profiles[2]);
        setLoading(false);
      });
  };
 
  React.useEffect(() => {
    myData();
  }, []);
  
  if (loading === true) {
    return <p>loading</p>;
  }
  

  return (
    <>
      <ChartGender data={gender}/>
      <ChartGender data={age}/>
      <ChartGender data={location}/>
    </>
  );

}

export default Fetch;