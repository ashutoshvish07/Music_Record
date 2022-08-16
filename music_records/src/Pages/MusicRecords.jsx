import React, { useEffect } from "react";
import { getMusicRecord } from "../Redux/AppReducer/action";
import { useSelector, useDispatch } from "react-redux";
import searchParams from "../Components/FilterSort";
import style from "./MusicRecord.module.css";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const MusicRecords = () => {
  const dispatch = useDispatch();

  const musicRecords = useSelector((store) => store.AppReducer.musicRecords);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (location || musicRecords.length === 0) {
      const sortBy = searchParams.get("sortBy");
      const queryParams = {
        params: {
          genre: searchParams.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      dispatch(getMusicRecord(queryParams));
    }
  }, [location.search]);
  // console.log(location);
  return (
    <div>
      <div className={style.main}>
        {musicRecords.length > 0 &&
          musicRecords.map(({ id, name, img, year, genre }) => (
            <div className={style.record} key={id}>
              <Link to={`/music/${id}`}>
                <div>
                  <h4>{name}</h4>
                  <img src={img} alt={name} />
                  <p>Type: {genre}</p>
                  <p>Year : {year}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MusicRecords;
