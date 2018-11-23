import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
//cannot make api keys public for real projects
const API_KEY = "AIzaSyDY3mv3Elr4lPshOg9vXZfm3ld71YgrgAA";

class App extends Component {

  constructor(props){

    super(props);

    this.state = { videos: [], selectedVideo: null };
    this.videoSearch('react redux'); //default search
  }

  videoSearch(term) {
    if (term.trim() == ''){
      term = 'react redux';
    }
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState( { videos: videos, selectedVideo: videos[0] } );
    });
  }


  render() {

    const videoSearch = _.debounce( (term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it
//on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
