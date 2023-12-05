import axios from 'axios';

export const cloudinaryImageUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'zcut0jsj');
  const { data } = await axios.post(
    'https://api.cloudinary.com/v1_1/drahtawrd/image/upload',
    formData
  );
  return { publicId: data?.public_id, url: data?.secure_url };
};
