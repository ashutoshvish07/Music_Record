import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";
import { UPDATE_MUSIC_RECORD_SUCCESS } from "./../Redux/AppReducer/action.type";
import {
  getMusicRecord,
  updateMusicRecords,
} from "./../Redux/AppReducer/action";

const EditMusicRecord = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
 
  const [music, setmusic] = useState("");
  const [artist, setartist] = useState("");
  //console.log(musicRecords);

  useEffect(() => {
    // this useEffect will not lose the data when user refresh the page
    // it will remain the same as it was
    if (musicRecords.length === 0) {
      dispatch(getMusicRecord());
    }
  }, []);
  useEffect(() => {
    if (id) {
      //console.log(musicRecords)
      const currentMusicAlbum = musicRecords.find((album) => album.id === id);
      //console.log(currentMusicAlbum);
      if (currentMusicAlbum) {
        setmusic(currentMusicAlbum.name);
        setartist(currentMusicAlbum.artist);
      }
    }
  }, [id, musicRecords]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (music && artist) {
      const payload = {
        name: music,
        artist: artist,
      };
      dispatch(updateMusicRecords(id, payload)).then(() => {
        dispatch(getMusicRecord());
      });
    }
  };
  return (
    <div>
      <h1>Edit page</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label>Edit Music name</label>
          <input
            type="text"
            value={music}
            onChange={(e) => setmusic(e.target.value)}
          />
        </div>
        <div>
          <label>Edit artist name</label>
          <input
            type="text"
            value={artist}
            onChange={(e) => setartist(e.target.value)}
          />
        </div>

        <button type="submit">Update</button>
        <Link to={'/'}><button>Go back </button></Link>
      </form>
    </div>
  );
};

export default EditMusicRecord;
