import React from "react";
import GifThumbnail from "./gifThumbnail";

import '../styles/gifs-thumbnail.css'

const Gif = () => {
  return (
    <section className="gif-wrapper">

      <div className="gif-data-container">
        <GifThumbnail
          source="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDUxODZlNzdmMWJmNDBmMjVmNWRmYTkwOTFhMTFhYzJkODAzYTQwZSZjdD1n/nzEDaU2mvgkXnEj6z6/giphy.gif"
          alt="faramove-1"
          cardTitle="Faramove Launch"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://vimeo.com/809298150"
        />

        <GifThumbnail
          source="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWY1ZjkxNzcxNjgzOTdiOGJhMWMwM2Y3YzhkZDVlYTE2ZjY4MDY3MiZjdD1n/r59kOdVKMiSdIFbb0k/giphy.gif"
          alt="Susan-1"
          cardTitle="Chocolate"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://vimeo.com/812895395"
        />

        <GifThumbnail
          source="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTc5YzZkMTkwZDZhNDgwODgyNTUxNThjMTQ1OTgyNDg5NTI4NDk1ZCZjdD1n/i4QlcRECPEDX04b2em/giphy.gif"
          alt="Susan-1"
          cardTitle="Faramove coming soon"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://vimeo.com/794137708"
        />
        
        <GifThumbnail
          source="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTcyNGZlMGY5NjIyYzQ5NTRiZjM4NGExYmEwNjFmODRhYTEwMzNkZiZjdD1n/jzyZtd9kBQLRU8ezRe/giphy.gif"
          alt="Susan-1"
          cardTitle="Jeetar"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://drive.google.com/file/d/1defBIv07oMoL0Srybno14ihrufIYQ-3S/view?usp=share_link"
        />
        <GifThumbnail
          source="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTVjZTk0ODA2NjZjZTBiMDBjMjBkZmM5N2ZjY2ZlMmU5ZjU2OWNhMiZjdD1n/5Tk8IoJFqctU73wArK/giphy.gif"
          alt="Susan-1"
          cardTitle="Desert king"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://drive.google.com/file/d/1O565ZIRTT_ny2nkjhQAn5GkjSI1Z3Q4N/view?usp=share_link"
        />
        <GifThumbnail
          source="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOTExNzc0NTEzZmYxOWZiMjUzMDMwYjkyY2ZjZjkxNzFmYjQ0YTg3ZiZjdD1n/O5ezTOsqzjJwyFDslw/giphy.gif"
          alt="Susan-1"
          cardTitle="Desert king"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://drive.google.com/file/d/1D42Jzr1cN5OCMYyQcw-Yz9BbVPdN3fwz/view?usp=sharing"
        />
        <GifThumbnail
          source="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZjBhZTZiYjM4ZmY2MGVkNjUxNmZmNzcyNjVkM2JkOTVmZjQ1NzU5NyZjdD1n/PMIqo5Wo2yr7KIa73J/giphy.gif"
          alt="Susan-1"
          cardTitle="Desert king"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://drive.google.com/file/d/1a-wF_AbbqcLSrVf5jfCL5FGexeJ7nG7J/view?usp=share_link"
        />
        <GifThumbnail
          source="https://media0.giphy.com/media/euM8jalRI4UkTwh7IG/giphy.gif"
          alt="Susan-1"
          cardTitle="Desert king"
          availability="available for 2weeks stay"
          distance="2345km away"
          amount="1MBT per night"
          url="https://drive.google.com/file/d/1kMQzro9cUMOPZFa0I1z0A9eNxS8ngIYb/view?usp=sharing"
        />
      </div>
    </section>
  );
};

export default Gif;