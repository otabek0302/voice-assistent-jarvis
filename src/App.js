import alanBtn from "@alan-ai/alan-sdk-web";
import { useEffect, useState } from "react";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [country, setCountry] = useState(null);
  const [date, setDate] = useState(null);
  const [news, setNews] = useState(null);
  const [talk, setTalk] = useState(null);

  const apikey = process.env.REACT_APP_KEY;
  useEffect(() => {
    alanBtn({
      key: apikey,
      onCommand: ({ command, countryData, weatherData, timeData, article }) => {
        if (command === "findedCountry") {
          setCountry(countryData);
        } else if (command === "weather") {
          console.log(weatherData);
        } else if (command === "time"){
          console.log(timeData);
        } else if (command === "newHeadlines"){
          console.log(article);
        }
      },
    });
  }, []);

  if (country?.length) {
    console.log(country);
  }

  return (
    <main className="h-screen flex items-center justify-center">
      <h1> Hello world</h1>
    </main>
  );
};

export default App;
