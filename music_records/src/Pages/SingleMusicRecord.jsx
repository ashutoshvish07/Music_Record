import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMusicRecord } from "../Redux/AppReducer/action";
import styled from "styled-Components";
const SingleMusicRecord = () => {
  // some data in the params
  // get id from the params
  // filter the music album based on the id
  // gegt the album pertaining to that particulr id
  const dispatch = useDispatch();
  const { id } = useParams();
  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);

  const [currentMusic, setcurrentMusic] = useState({});
   const {img,name,artist,year,genre,} =currentMusic
  useEffect(() => {
    if (musicRecords.length === 0) {
      dispatch(getMusicRecord());
    }
  }, []);

  useEffect(() => {
    if (id) {
      //console.log(musicRecords)
      const currentMusicAlbum = musicRecords.find((album) => album.id === id);
      currentMusicAlbum && setcurrentMusic(currentMusicAlbum);
    }
  }, [id, musicRecords]);
  console.log(currentMusic);

  return (
    <div >
    <Link to={"/"} >
      <button>Go Back</button>
    </Link>
      <h1 style={{textAlign:'center'}}>Songs Details</h1>
       <div style={{width :"20%",margin:"auto"}}>
         <img src={img} />
         <h3>Artist : <span>{artist}</span></h3>
         <h4>Song Name : {name}</h4>
         <p>Song type : {genre}</p>
          <p>Release Year :{year}</p>
       </div>

    </div>
  );
};

export default SingleMusicRecord;

