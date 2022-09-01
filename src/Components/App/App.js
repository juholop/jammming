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
      playlistName : "",
      playlistTracks : [{name: 'name3', artist: 'artist3', album: 'album3', id: 4}, {name: 'name4', artist: 'artist4', album: 'album4', id: 5}]
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    } else {
      tracks.push(track);
      this.setState({playlistTracks : tracks});
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id);
    this.setState({playlistTracks : tracks});
  }

  updatePlaylistName(newName) {
    this.setState({ playlistName : newName })
  }

  render () {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} onNameChange={this.updatePlaylistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
        </div>
      </div>
    </div>
  )}
};

export default App;