# [youtubeAPI](https://marquez93.github.io/youtubeAPI/)

youtubeAPI is a React app inspired by [Youtube](https://www.youtube.com/) and Stephen Grider's [React](https://www.udemy.com/react-redux/) course.

<p align="center"><img src="https://i.imgur.com/qYMCdyN.png" width="800px" /></p>

## Features

* Acquire Youtube API key from Google's Developers Console.
* Make Youtube API searches based upon user input.
* Use Lodash's dbounce method. This function updates the app at an even pace. Dbounce prevents the app from re-rendering too many times, and prevents it from appearing glitchy to the user.
* Pass a callback method from the entry (index.js) component to a grandchild component (video_list_item.js). This callback method changes the state of the entry component. When the entry component's state changes, it renders, and subsequently renders all of its children (and thus, the entry component's grandchildren etc).

## Code Snippet
* This function sets the entry component's state to a selected video, and an array of videos.
* The videoSearch function makes an API call using YTSearch package. An API Key is passed an argument.
* This function returns an array of videos, and the first item is made the selected video in state along with the other videos.
* The function is passed down as a callback function. When a child (or grandchild etc), calls the function with a new term as an argument, then the entry component's state changes, and causes a re-render. This is React 101.

<p align="center"><img src="https://i.imgur.com/a9rZPc4.png" width="800px" /></p>

## Built With

* [React](https://reactjs.org/docs/getting-started.html) - The frontend framework used
* [Lodash](https://lodash.com/) - JS library used
* [Youtube API](https://www.npmjs.com/package/youtube-api-search) - NPM package used
