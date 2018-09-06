# youtubeAPI

youtubeAPI is a single page web app. It is part of Stephen Grider's https://www.udemy.com/react-redux/ course. <br/> <br/>
Live site: https://marquez93.github.io/youtubeAPI/

# Features

* Acquire youtube API key from Google's Developers Console.
* Install lodash & youtube api search as dependecies.
* Make youtube API searches based upon user input. 
* Use lodash's dbounce method. This function updates the app at an even pace. Dbounce prevents the app from re-rendering too many times, and prevents it from appearing glitchy to the user. 
* Pass a callback method from the entry component to its child (videolist). Pass this method to videolist's child (videolistItem). This callback method changes the state of the entry component. When the entry component's state changes, it renders, and subsequently renders all of its children (and their children etc). 
