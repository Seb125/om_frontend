import { useContext, useState } from 'react';
import profileService from '../services/profile.service';
import Navbar from '../components/Navbar';
import { SelectedItemContext } from '../context/selectedItem.context';


function ProfilePage() {
  const [image, setImage] = useState("");
  const { profileImage, setProfileImage } = useContext(SelectedItemContext);



  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      if (!image) {
        console.log("Please select an image");
        return;
      }
      //console.log(image)
      const requestBody = new FormData();
      requestBody.append("image", image);
      const response = await profileService.uploadImage(requestBody);
      // Assuming your server responds with the image URL after successful upload
      setProfileImage(response.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleImage = (e) => {

    setImage(e.target.files[0])
  }


  return (
    <>
      <Navbar />
      <div className="flex flex-col item-center justify-center mt-20">
        {profileImage && <img src={profileImage} alt="Profile Image" className="w-15 h-15 rounded-full mx-auto" />}
        <form onSubmit={handleUpload} className="max-w-md mx-auto space-y-4 font-[sans-serif] text-[#333] mt-4">
          <div className="font-[sans-serif] max-w-md mx-auto">
            <label className="text-sm text-gray-500 mt-3 mb-4 block">Customize your profile page with any image of your choice to add a personal touch.</label>
            <input type="file"
              className="w-full text-gray-500 text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-indigo-400 rounded"
              onChange={handleImage}
            />
            <p className="text-xs text-gray-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
          </div>
          <button type="submit" className="!mt-8 px-6 py-2 text-sm bg-indigo-900 text-white rounded hover:bg-indigo-600 ">Upload Profile image</button>
        </form>
      </div>
    </>
  )
}

export default ProfilePage