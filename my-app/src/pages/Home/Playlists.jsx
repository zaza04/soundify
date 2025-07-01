import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { NextIcon, PrevIcon } from "../../components/icon";
import { useState, useEffect } from "react";

// const slideItems = [
//   {
//     id: 1,
//     name: "re",
//   },
//   {
//     id: 2,
//     name: "ss",
//   },
//   {
//     id: 3,
//     name: "qư",
//   },
//   {
//     id: 4,
//     name: "ẻgvv",
//   },
//   {
//     id: 6,
//     name: "8909",
//   },
//   {
//     id: 7,
//     name: "sdsc",
//   },
//   {
//     id: 8,
//     name: "slivbccde1",
//   },
//   {
//     id: 9,
//     name: "cvcd",
//   },
//   {
//     id: 10,
//     name: "dsdsd",
//   },
//   {
//     id: 11,
//     name: ";p'ơ'ơ'",
//   },
//   {
//     id: 12,
//     name: "090k",
//   },
// ];

function Playlists() {
  const [playlists, setPlaylists] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  });

  const fetchData = async () => {
    const response = await fetch("https://soundify-api.onrender.com/playlists");
    const result = await response.json();
    setPlaylists(result);
  }

  // console.log(playlists);
  

  useEffect(() => {
    fetchData();
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div className="relative">
        <div className="overflow-hidden h-auto" ref={emblaRef}>
          {playlists && (
            <div className="flex h-30 gap-x-3">
              {playlists.map((item) => (
                <div
                  key={item.id}
                  className="flex-none flex-center w-[150px] md:w-[180px] lg:w-[200px] transition-color ease-in-out duration-300 rounded-3xl bg-[#ffffff26] hover:bg-[#ffffff4d] cursor-pointer"
                >
                  <div className="flex-center flex-col">
                    <img src={item.icon} alt="icon"/>
                    <p className="mt-2">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>  
          )}
        </div>
        <button
          className="absolute backdrop-blur-lg flex-center top-1/2 left-1 -translate-y-1/2 bg-[#0000000a] p-2 rounded-2xl shadow-box"
          onClick={scrollPrev}
        >
          <PrevIcon />
        </button>
        <button
          className="absolute backdrop-blur-lg flex-center top-1/2 right-1 -translate-y-1/2 bg-[#0000000a] p-2 rounded-2xl shadow-box"
          onClick={scrollNext}
        >
          <NextIcon />
        </button>
      </div>
    </>
  );
}

export default Playlists;
