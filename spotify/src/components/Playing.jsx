import { useContext } from 'react';
import { Songs } from '../Context';
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const Playing = () => {
  const { DataSongs, song, handleSetSong } = useContext(Songs);
  console.log(DataSongs)
  const handleClickNext = () => {
    if (song.id === (DataSongs.length - 1)) {
      handleSetSong(0)
    }
    else {
      handleSetSong(song.id + 1);
    }
  }
  const handleClickPre = () => {
    if (song.id >= 1) {
      handleSetSong(song.id - 1);
    } else {
      handleSetSong(DataSongs.length - 1);
    }
  }
  return (
       <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPre}
        onEnded={() => handleSetSong(song.id + 1)}
      />
    </div>
  )
}

export default Playing;