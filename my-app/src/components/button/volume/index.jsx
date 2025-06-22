import { useCallback, useEffect, useRef, useState } from "react";

function VolumeControl(props) {
  const {volume, onVolumeChange} = props;
  // hàm điều chỉnh âm thanh
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef(null);


  // Hàm cập nhật volume dựa trên vị trí con trỏ chuột
  const handleVolumeUpdate = useCallback((e) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const rect = slider.getBoundingClientRect();
    const newVolume = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    
    if(onVolumeChange) {
      onVolumeChange(newVolume);
    }
  }, [onVolumeChange]);


  // Bắt đầu quá trình kéo/click chuột để điều chỉnh giá trị âm thanh 
  const handleStartDrag = useCallback((e) => {
    setIsDragging(true);
    handleVolumeUpdate(e); // Cập nhật ngay khi nhấn chuột
  }, [handleVolumeUpdate]);

  
  // Lắng nghe sự kiện kéo và thả chuột trên toàn bộ trang
  useEffect(() => {
    const handleDrag = (e) => handleVolumeUpdate(e);
    const handleStopDrag = () => setIsDragging(false);

    if (isDragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleStopDrag);
    }

    return() => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleStopDrag);
    }
  }, [isDragging, handleVolumeUpdate]);


  return (
    <>
      <div className="flex-center gap-4 p-2 w-full">
        {/* Thanh trượt âm lượng tùy chỉnh */}
        <div 
          ref={sliderRef}
          onMouseDown={handleStartDrag}
          className="w-full h-5 flex items-center cursor-pointer"
        >
          {/* Thanh ray (Rail) */}
          <div className="w-full h-[3px] bg-white/50 rounded-full relative">
            {/* Vệt trượt (Track) - Phần đã đi qua */}
            <div className="h-[3px] bg-white rounded-full" style={{ width: `${volume * 100}%` }}></div>
            
            {/* Nút kéo (Thumb) */}
            <div 
              className="absolute top-1/2 h-4 w-4 bg-white rounded-full shadow-xs"
              style={{ 
                left: `${volume * 100}%`, 
                transform: 'translate(-50%, -50%)' // Căn nút kéo vào chính giữa
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VolumeControl;