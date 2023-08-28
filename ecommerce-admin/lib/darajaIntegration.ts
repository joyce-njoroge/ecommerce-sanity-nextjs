// // darajaIntegration.ts

// import axios from "axios";

// const DARAJA_API_BASE_URL = "https://api.safaricom.co.ke";
// const CONSUMER_KEY = "QgCVdVk3aW7M5lzUozNIoA2xawfwaAF8";
// const CONSUMER_SECRET = "yhb5KOEWoGmEUsWH";

// export async function createMpesaPayment(paymentData: any) {
//   try {
//     const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString("base64");
    
//     const response = await axios.post(
//       `${DARAJA_API_BASE_URL}/mpesa/stkpush/v1/processrequest`,
//       paymentData,
//       {
//         headers: {
//           Authorization: `Basic ${auth}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// }
