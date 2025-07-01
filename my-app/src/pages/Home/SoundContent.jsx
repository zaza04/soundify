import { useEffect, useState } from "react";

function SoundContent() {
  const [sound, setSound] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("https://soundify-api.onrender.com/sounds");
    const result = await response.json();
    setSound(result);
  } 

  useEffect(() => {
    fetchApi();
  }, []);

  // console.log(sound);
  

  return (
    <>
      {sound && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {sound.map((sound) => (
            <div key={sound.id} className="flex-center flex-col">
              <img src={sound.svgLink} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default SoundContent;
