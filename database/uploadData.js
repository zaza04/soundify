// uploadData.js
// dùng để hosting data bằng Cloudinary  

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
require('dotenv').config(); // Nạp các biến môi trường từ file .env

// Cấu hình Cloudinary
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

/**
 * Hàm này sẽ duyệt qua một thư mục cục bộ và tải tất cả các file lên Cloudinary
 * @param {string} localFolder - Đường dẫn đến thư mục cục bộ (ví dụ: './data')
 * @param {string} cloudinaryFolder - Tên thư mục gốc trên Cloudinary (ví dụ: 'soundify_data')
 */
const uploadFolder = async (localFolder, cloudinaryFolder) => {
  try {
    // Đọc tất cả các mục trong thư mục cục bộ
    const items = fs.readdirSync(localFolder);

    for (const item of items) {
      const localPath = path.join(localFolder, item);
      const stat = fs.statSync(localPath);

      // Nếu là thư mục, gọi đệ quy để xử lý thư mục con
      if (stat.isDirectory()) {
        await uploadFolder(localPath, `${cloudinaryFolder}/${item}`);
      } 
      // Nếu là file, tiến hành upload
      else {
        console.log(`Đang tải lên file: ${localPath}`);
        
        // Tùy chọn upload
        const options = {
          folder: cloudinaryFolder, // Sắp xếp vào thư mục trên Cloudinary
          public_id: path.parse(item).name, // Dùng tên file làm public_id
          resource_type: "auto" // Tự động nhận diện loại file (image, video, raw)
        };

        const result = await cloudinary.uploader.upload(localPath, options);
        console.log(`  => Tải lên thành công! URL: ${result.secure_url}`);
      }
    }
  } catch (error) {
    console.error(`Đã xảy ra lỗi khi xử lý thư mục ${localFolder}:`, error);
  }
};

// --- Bắt đầu thực thi ---
console.log("Bắt đầu quá trình tải dữ liệu lên Cloudinary...");

// Gọi hàm để tải thư mục 'data' lên thư mục 'soundify_data' trên Cloudinary
uploadFolder('./data', 'soundify_data').then(() => {
  console.log("Hoàn tất quá trình tải dữ liệu!");
});