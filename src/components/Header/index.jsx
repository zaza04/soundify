import { useState } from "react";
import { Link } from "react-router-dom";
import VolumeControl from "../button/volume";
import UserAccount from "../account";
import ThemeMenu from "../../features/theme/Theme";
import { MuteSpeakerIcon, SpeakerIcon, TodosIcon } from "../icon";

function Header() {
  // mặc định volume là full (100%)
  const [currentVolume, setCurrentVolume] = useState(1);
  // lưu giá trị âm thanh lần cuối trước khi tắt
  const [lastVolume, setLastVolume] = useState(0);

  // bật tắt âm thanh
  const toggleMute = () => {
    if (currentVolume > 0) {
      setLastVolume(currentVolume);
      setCurrentVolume(0);
    } else {
      setCurrentVolume(lastVolume);
    }
  };

  // thay đổi âm thanh (tăng/giảm)
  const handleVolumeChange = (newVolume) => {
    setCurrentVolume(newVolume);
  };

  // console.log("Âm lượng hiện tại:", currentVolume.toFixed(2));

  return (
    <>
      <div className="w-full h-20 flex justify-between items-center shadow-bottom px-5">
        <div className="text-2xl font-bold">
          <Link to="/">Soundify</Link>
        </div>
        <div className="w-1/3 flex justify-end items-center gap-x-3 relative">
          {/* Volume Control */}
          <div className="flex-center gap-x-5 flex-row group">
            <div className="hovering w-42 h-auto max-lg:hidden">
              <VolumeControl
                onVolumeChange={handleVolumeChange}
                volume={currentVolume}
              />
            </div>
            <div className="">
              {currentVolume === 0 ? (
                <span className="button" onClick={toggleMute}>
                  <MuteSpeakerIcon />
                </span>
              ) : (
                <span className="button" onClick={toggleMute}>
                  <SpeakerIcon />
                </span>
              )}
            </div>
          </div>
          {/* Todos */}
          <div>
            <Link to="/todos" className="button">
              <TodosIcon />
            </Link>
          </div>
          {/* Theme */}
          <div>
            <ThemeMenu />
          </div>
          {/* Account */}
          <div>
            <UserAccount />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
