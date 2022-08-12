import React from "react";
import FilterSort from "./../Components/FilterSort";
import MusicRecords from "./MusicRecords";
import styled from "styled-Components";
const Hompage = () => {
  return (
    <HomeWrapper>
      <Filter>
        <FilterSort />
      </Filter>
      <Music>
        <MusicRecords />
      </Music>
    </HomeWrapper>
  );
};

export default Hompage;

const HomeWrapper = styled.div`
  display: flex;
  gap: .5rem;
  width: 90%;
  margin: auto;
`;

const Filter = styled.div`
  width: 25%;
  margin: auto;
  border: 1px solid cyan;
`;
const Music = styled.div`
  width: 74%;
  margin: auto;
  border: 1px solid skyblue;
`;
