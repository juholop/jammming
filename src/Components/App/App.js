import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults : [{name: 'name0', artist: 'artist0', album: 'album0', id: 1}, {name: 'name1', artist: 'artist1', album: 'album1', id: 2}, {name: 'name2', artist: 'artist2', album: 'album2', id: 3}],
      playlistName : "some name",
      playlistTracks : [{name: 'name3', artist: 'artist3', album: 'album3', id: 4}, {name: 'name4', artist: 'artist4', album: 'album4', id: 5}]
    }
  }

  

  render () {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
  )}
};

export default App;