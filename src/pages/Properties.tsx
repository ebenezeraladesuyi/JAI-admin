/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import DashLayout from "../layout/DashLayout"

const Properties = () => {

  const [, setImage] = React.useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);


  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      const imageUrl = URL.createObjectURL(selectedImage);
      setPreviewUrl(imageUrl);
    }
  };


  // const handleUploadImage = () => {
  //   // Here you can implement your logic for uploading the image
  //   console.log('Image uploaded:', image);
  //   // Reset image state after uploading
  //   setImage(null);
  //   setPreviewUrl(null);
  // };


  return (
    <DashLayout>
        <div className="bg-blac min-h-screen w-[90%] flex flex-col gap-5 ">
          <h6 className='font-bold text-[20px] text-center'>Upload Properties</h6>

          <form action="" className="w-full flex flex-col gap-3">
            <div>
              <h6 className="mb-[5px] font-bold">Location</h6>
              <input type="text" className="w-full h-[37px] rounded-md border-gray-400 border-[1px] p-2" />
            </div>

            <div>
              <h6 className="mb-[5px] font-bold">Price</h6>
              <input type="text" className="w-full h-[37px] rounded-md border-gray-400 border-[1px] p-2" />
            </div>

            <div>
              <h6 className="mb-[5px] font-bold">Image</h6>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className='w-full h-[37px rounded-md border-gray-400 border-[1px] p-  cursor-pointer'
              />
              {/* <button onClick={handleUploadImage} disabled={!image} className='cursor-pointer'>
                Upload Image
              </button> */}
              {previewUrl && (
                <div>
                  <h2>Preview:</h2>
                  <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
                </div>
              )}
            </div>
          </form>
        </div>
    </DashLayout>
  )
}

export default Properties;