import './App.css';
import Navbar from './components/Navbar';
import DetailSong from './components/DetailSong';
import ListSongs from './components/ListSongs';
import { Songs } from './Context';
import DataSongs from './data/songs.json';
import Playing from './components/Playing';
import { useState } from 'react';
function App() {
  const [song, setSong] = useState(DataSongs[0]);
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong);
    if (!song) {
      setSong(DataSongs[0]);
    }
    else {
      setSong(song);
    }
    
  }
  return (
    <div className="">

      <Songs.Provider value={{ DataSongs, song , handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-3 h-screen-navbar-player bg-slate-700">
          <DetailSong />
          <ListSongs />
        </div>
        <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
