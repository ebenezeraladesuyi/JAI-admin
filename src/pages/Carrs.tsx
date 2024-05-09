import React from 'react';
import { UseAppDispatch } from '../global/Store';
import { useMutation } from '@tanstack/react-query';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { uploadCar } from '../utils/Apii';
import { User } from '../global/ReduxState';
import Swal from 'sweetalert2';
import DashLayout from '../layout/DashLayout';
import { useNavigate } from 'react-router-dom';
import { DatasIsaLoading } from './isLoading/DataIsLoading';

const validationSchema = yup.object({
  carName: yup.string().required('Name is required'),
  price: yup.string().required('Price is required'),
  carImage: yup.mixed().required('Image is required'),
});

const Carrs = () => {

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fileToBase64 = (file: File): Promise<any | null> => {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = reader.result as string;
          resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
      } catch (error) {
        reject(error);
      }
    });
  };

  
  const [previewUrl, setPreviewUrl] = React.useState<string | null>(null);

  const dispatch = UseAppDispatch();
  const navigate = useNavigate()
  
//   const mutation = useMutation(uploadCar: (data: user));
    // const posting = useMutation(uploadCar, {
    const posting = useMutation({
        mutationKey: ["jai"],
        mutationFn: uploadCar,

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onSuccess: (data: any) => {

            dispatch(User(data.data.data))

            // handle success
            if (data) {
                Swal.fire({
                    title: "car uploaded successfully",
                    text: "",
                    icon: "success"
                });
                navigate("/")
            }
        },
        onError: (error: Error) => {
        // handle error
            return error
        },
    });

  const formik = useFormik({
    initialValues: {
      carName: '',
      price: '',
      carImage: null as File | null,
    },
    validationSchema: validationSchema,

    onSubmit: async (values) => {
      // Dispatch Redux action to handle form submission
      dispatch(User({
        carName: values.carName,
        price: values.price,
      }));
    
      // Check if carImage is not null
      if (values.carImage) {
        // Convert carImage to base64 string
        const base64Image = await fileToBase64(values.carImage);
        if (base64Image) {
          // If conversion is successful, create a new object with updated carImage
          const updatedValues = { ...values, carImage: base64Image };
          
          // Call the mutation with the updatedValues object
          posting.mutate(updatedValues);
        } else {
          // Handle error if conversion fails
          console.error('Failed to convert carImage to base64');
          return;
        }
      } else {
        // If carImage is null, call the mutation with original values
        posting.mutate(values);
      }

      // posting.mutate(values);
    
      // Reset the form after submission
      formik.resetForm();
    
      console.log("data", values);
    },      
  });
  

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedImage = event.target.files && event.target.files[0];
  //   if (selectedImage) {
  //     formik.setFieldValue('carImage', selectedImage);
  //     const imageUrl = URL.createObjectURL(selectedImage);
  //   //   formik.setFieldValue('previewUrl', imageUrl);
  //     setPreviewUrl(imageUrl);
  //   }
  // };

const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImage = event.target.files && event.target.files[0];
    if (selectedImage) {
      formik.setFieldValue('carImage', selectedImage);
      const imageUrl = await fileToBase64(selectedImage);
      setPreviewUrl(imageUrl);
    }
  };

  return (
    <DashLayout>
      <div className="bg-blac min-h-screen w-[90%] flex flex-col gap-5 ">
        <h6 className="font-bold text-[20px] text-center">Upload Cars</h6>
        <form onSubmit={formik.handleSubmit} className="w-full flex flex-col gap-3">
          <div>
            <h6 className="mb-[5px] font-bold">Name</h6>
            <input
              type="text"
              className="w-full h-[37px] rounded-md border-gray-400 border-[1px] p-2"
              {...formik.getFieldProps('carName')}
            />
            {formik.touched.carName && formik.errors.carName ? (
              <div className="text-red-500">{formik.errors.carName}</div>
            ) : null}
          </div>

          <div>
            <h6 className="mb-[5px] font-bold">Price</h6>
            <input
              type="text"
              className="w-full h-[37px] rounded-md border-gray-400 border-[1px] p-2"
              {...formik.getFieldProps('price')}
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="text-red-500">{formik.errors.price}</div>
            ) : null}
          </div>

          <div>
            <h6 className="mb-[5px] font-bold">Image</h6>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full h-[37px rounded-md border-gray-400 border-[1px] p- cursor-pointer"
            />
            {formik.touched.carImage && formik.errors.carImage ? (
              <div className="text-red-500">{formik.errors.carImage}</div>
            ) : null}

            {formik.values.carImage && (
              <div>
                <h2>Preview:</h2>
                <img src={previewUrl || ''} alt="Preview" style={{ maxWidth: '100%' }}
                // {...formik.getFieldProps('carImage')} 
                />
              </div>
            )}
            {/* {previewUrl && (
              <div>
                <h2>Preview:</h2>
                <img src={previewUrl} alt="Preview" style={{ maxWidth: '100%' }} />
              </div>
            )} */}
          </div>

          {
            posting.isPending ?
                (<div className='w-full flex items-center justify-center'>
                    <DatasIsaLoading />
                </div>)
            :
                (<button type="submit" className="bg-blue-500 text-white rounded-md p-2 mb-[20px]">
                    Submit
                </button>)
          }

        </form>
      </div>
    </DashLayout>
  );
};

export default Carrs;
