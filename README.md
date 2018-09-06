# youtubeAPI

youtubeAPI is a single page web app. It is part of Stephen Grider's https://www.udemy.com/react-redux/ course. <br/> <br/>
Live site: https://marquez93.github.io/youtubeAPI/

# Features

* Acquire youtube API key from Google's Developers Console.
* Install lodash & youtube api search as dependecies.
* Make youtube API searches based upon user input. 
* Use lodash's dbounce method. This function updates the app at an even pace, so as to prevent the app from re-rendering too many times and appearing glitchy as the user types in the search bar. 
* Pass a callback method from the top component to its child (videolist), and then pass this method to videolist's child (videolistItem). This callback method changes state of the top component. When the top component's state changes, it renders, and renders all of its children (and their children). 
