import React, { useState } from "react";
import JokeCardFlip from "./JokeCardFlip";

const JokesBody = () => {
  const [isLoaded, setIsLoaded] = useState(null);
  const [programmingJokes, setProgrammingJokes] = useState(null);
  const [darkJokes, setDarkJokes] = useState(null);
  const [punJokes, setPunJokes] = useState(null);
  const [miscJokes, setMiscJokes] = useState(null);
  const [jokes, setJokes] = useState(null)

  const progCall = () => {
    setIsLoaded(false);
    fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart")
      .then((result) => {
        return result.json();
      })
      .then((data) => setJokes(data));
    setIsLoaded(true);
    console.log(programmingJokes);
  };

  const darkCall = () => {
    setIsLoaded(false);
    fetch("https://v2.jokeapi.dev/joke/Dark?type=twopart")
      .then((result) => {
        return result.json();
      })
      .then((data) => setJokes(data));
    setIsLoaded(true);
    console.log(darkJokes);
  };

  const punCall = () => {
    setIsLoaded(false);
    fetch("https://v2.jokeapi.dev/joke/Pun?type=twopart")
      .then((result) => {
        return result.json();
      })
      .then((data) => setJokes(data));
    setIsLoaded(true);
    console.log(punJokes);
  };

  const miscCall = () => {
    setIsLoaded(false);
    fetch("https://v2.jokeapi.dev/joke/Misc?type=twopart")
      .then((result) => {
        return result.json();
      })
      .then((data) => setJokes(data));
    setIsLoaded(true);
    console.log(miscJokes);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row text-center list-none m-10 p-2 space-x-10 justify-center">
        <button
          className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl w-[164.09px]"
          onClick={() => progCall()}
        >
          Programming Jokes
        </button>
        <button
          className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl w-[164.09px]"
          onClick={() => darkCall()}
        >
          Dark Jokes
        </button>
        <button
          className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl w-[164.09px]"
          onClick={() => punCall()}
        >
          Pun Jokes
        </button>
        <button
          className="border-2 shadow-md shadow hover:shadow-xl hover:scale-105 duration-500 bg-[#FFCA3A] shadow-gray-600 border-black p-2 rounded-xl w-[164.09px]"
          onClick={() => miscCall()}
        >
          Misc Jokes
        </button>
      </div>
      <div className="flex justify-center">
        <JokeCardFlip
        jokes={jokes} />
      </div>
    </div>
  );
};

export default JokesBody;
