import { useEffect, useState } from "react";

function ItemTest() {
  const [dataSound, setDataSound] = useState([]);

  const fetchApi = async () => {
    const response = await fetch("https://forworkspace-api.onrender.com/sounds");
    const result = await response.json();
    setDataSound(result);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  // console.log(dataSound);
  

  return (
    <>
      <div>
        {dataSound && (
          <div>
            {dataSound.map((item) => (
              <div key={item.id}>
                <p>{item.subtitle}</p>
                <span className="svg">
                  <img src= {item.svgLink} alt= {item.slug} />
                </span>
                <span>
                  <audio controls className="mt-4 w-2xl">
                    <source src={item.audioLink} type="audio/ogg" />
                    Trình duyệt của bạn không hỗ trợ thẻ audio.
                  </audio>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default ItemTest;