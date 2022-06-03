import React, { useEffect, useState } from "react";
import { SingleView } from "./views/SingleView";
import JokesFooter from "./components/JokesFooter";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(null);

  // useEffect(() => {
  //   setIsLoaded(false);
  //   fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
  //     .then((result) => {
  //       return result.json();
  //     })
  //     .then((data) => setProgrammingJokes(data));
  //   setIsLoaded(true);
  // }, []);
  // console.log(programmingJokes);
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // } else if (!isLoaded) {
  //   return <div>One second bro...</div>;
  // } else {
  return (
    <>
      <SingleView />
      <JokesFooter />
    </>
  );
};

export default App;
