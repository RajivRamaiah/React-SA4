// change require to es6 import style
import $ from 'jquery';
import './style.scss';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import youtubeSearch from './youtube-api.js';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    youtubeSearch('pixar').then(videos => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
// AIzaSyBaLEMEffxGezoLNKBfBGJoHg37iXSmP8o

// // The following code was inspired by http://stackoverflow.com/questions/10586890/increment-integer-by-1-every-1-second
// const App = () => {
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// };
//
ReactDOM.render(<App />, document.getElementById('main'));
