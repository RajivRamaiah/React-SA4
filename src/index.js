import './style.scss';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api.js';
import React, { Component } from 'react';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail';
import debounce from 'lodash.debounce';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.search('pixar');
    this.search = debounce(this.search, 300);
  }

  search(text) {
    youtubeSearch(text).then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }


  render() {
    if (!this.state.selectedVideo) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div id="searchbar">
          <SearchBar onSearchChange={text => this.search(text)} />
        </div>

        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
