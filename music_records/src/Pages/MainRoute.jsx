import React from "react";
import { Routes, Route } from "react-router-dom";
import MusicRecords from "./MusicRecords";
import SingleMusicRecord from "./SingleMusicRecord";
import EditMusicRecord from "./EditMusicRecord";
import Login from "./Login";
import Hompage from "./Hompage";
import RequreAuth from "../Components/RequreAuth";
const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />
      <Route
        path="/music/:id"
        element={
          <RequreAuth>
            <SingleMusicRecord />
          </RequreAuth>
        }
      />
      <Route path="/music/:id/edit" element={<EditMusicRecord />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoute;
