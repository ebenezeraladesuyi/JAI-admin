import { user } from "../types/interface";
import axios from "axios";


export const url = import.meta.env.VITE_APP_API_URL;

// import.meta.env.VITE_APP_API_URL;

// upload car
// export const uploadCar = async (data : user) => {
//     return await axios.post(`${url}/car/createcar`, data)
//     .then((res) => {
//         return res.data
//     })
//     .catch((err) => {
//         return err
//     })
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadCar = async (data: user): Promise<any> => {
  try {
    // Logic to upload car data
    const response = await axios.post(`${url}/car/createcar`, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data) {
      throw new Error('Cannot upload car');
    }

    return response.data; // Return the response data directly
  } catch (error) {
    throw new Error('Failed to upload car: ' + error);
  }
};

  
