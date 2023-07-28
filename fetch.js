class Fetch {
    async getCurrent(input) {
      const myKey = "60e5da5111c716abfc33405b3dd162e0";
  
      //make request to url
  
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
      );
  
      const data = await response.json();
  
      console.log(data);
  
      return data;
    }
  }