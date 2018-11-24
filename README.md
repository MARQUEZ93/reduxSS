# [youtubeAPI](https://marquez93.github.io/youtubeAPI/)

youtubeAPI is a React app inspired by [Youtube](https://www.youtube.com/) and Stephen Grider's [React](https://www.udemy.com/react-redux/) course.

<p align="center"><img src="https://i.imgur.com/lyZaIMD.png" cursor="default" width="800px" /></p>

## Features

* Acquire Youtube API key from Google's Developers Console.
* Make Youtube API searches based upon user input.
* Use Lodash's dbounce method. This function renders the app at an even pace, and prevents a glitchy user experience.

## Code Snippet

* This videoSearch function makes an API call using the YTSearch package. An API Key is passed as an argument.
* The entry component's state is set to a selected video and an array of videos.
* The function is passed down as a callback function. This callback method changes the state of the entry component. When a child component calls this function, the entry component re-renders, and subsequently re-renders all of its children. This is React 101.  

<p align="center"><img src="https://i.imgur.com/a9rZPc4.png" width="800px" /></p>

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework used
* [Lodash](https://lodash.com/) - JS library used
* [Youtube API](https://www.npmjs.com/package/youtube-api-search) - NPM package used
