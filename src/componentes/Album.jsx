import React from "react";
import "./album.css";
import Corazon from "./corazon";

const Album = () => {
  const songs = [
    {
      id: 1,
      name: "Billie Jean",
      artist: "Michael Jackson",
      album: "Thriller",
      year: 1982,
      like: false,
      genre: "Pop",
      cover_url: "/01.png",
    },
    {
      id: 2,
      name: "Sweet Child o' Mine",
      artist: "Guns N' Roses",
      album: "Appetite for Destruction",
      year: 1987,
      like: false,
      genre: "Rock",
      cover_url: "/02.png",
    },
    {
      id: 3,
      name: "Like a Prayer",
      artist: "Madonna",
      album: "Like a Prayer",
      year: 1989,
      like: false,
      genre: "Pop",
      cover_url: "/03.png",
    },
    {
      id: 4,
      name: "Smells Like Teen Spirit",
      artist: "Nirvana",
      album: "Nevermind",
      year: 1991,
      like: false,
      genre: "Grunge",
      cover_url: "/04.jpg",
    },
    {
      id: 5,
      name: "Wonderwall",
      artist: "Oasis",
      album: "(What's the Story) Morning Glory?",
      year: 1995,
      like: false,
      genre: "Britpop",
      cover_url: "/05.jpg",
    },
    {
      id: 6,
      name: "Smooth",
      artist: "Santana ft. Rob Thomas",
      album: "Supernatural",
      year: 1999,
      like: false,
      genre: "Rock",
      cover_url: "/06.jpg",
    },
    {
      id: 7,
      name: "Crazy in Love",
      artist: "Beyoncé ft. Jay-Z",
      album: "Dangerously in Love",
      year: 2003,
      like: false,
      genre: "R&B",
      cover_url: "/07.png",
    },
    {
      id: 8,
      name: "Hey There Delilah",
      artist: "Plain White T's",
      album: "All That We Needed",
      year: 2005,
      like: false,
      genre: "Pop Rock",
      cover_url: "/08.jpeg",
    },
    {
      id: 9,
      name: "Umbrella",
      artist: "Rihanna ft. Jay-Z",
      album: "Good Girl Gone Bad",
      year: 2007,
      like: false,
      genre: "R&B",
      cover_url: "/09.png",
    },
    {
      id: 10,
      name: "Rolling in the Deep",
      artist: "Adele",
      album: "21",
      year: 2010,
      like: false,
      genre: "Soul",
      cover_url: "/10.png",
    },
  ];

  return (
    <div className="box-container">
      {songs.map((song) => (
        <div className="box">
          <div className="box__img">
            <img src={song.cover_url} alt="" />
          </div>
          <div className="box__content">
            <h1 className="box__content__name">{song.name}</h1>
            <h2 className="box__content__artist">{song.artist}</h2>
            <h2 className="box__content__album">{song.album}</h2>
            <h2 className="box__content__year">({song.year})</h2>
            <div className="box__bottom">
              <h5 className="box__bottom__genre">
                <span className="box__bottom__genre__span">{song.genre}</span>
              </h5>
              <Corazon className="corazon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Album;
