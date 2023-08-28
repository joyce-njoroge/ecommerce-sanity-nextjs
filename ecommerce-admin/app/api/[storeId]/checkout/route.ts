// import { NextResponse } from "next/server";
// import prismadb from "@/lib/prismadb";
// import { createMpesaPayment } from "@/lib/darajaIntegration";

// const corsHeaders = {
//   "Access-Control-Allow-Origin": "*",
//   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//   "Access-Control-Allow-Headers": "Content-Type, Authorization",
// };

// export async function OPTIONS() {
//   return NextResponse.json({}, { headers: corsHeaders });
// }

// export async function POST(
//   req: Request,
//   { params }: { params: { storeId: string } }
// ) {
//   const { productIds, customerPhoneNumber } = await req.json(); // Assuming customerPhoneNumber is sent in the request

//   if (!productIds || productIds.length === 0) {
//     return new NextResponse("Product ids are required", { status: 400 });
//   }

//   if (!customerPhoneNumber) {
//     return new NextResponse("Customer phone number is required", { status: 400 });
//   }

//   const products = await prismadb.product.findMany({
//     where: {
//       id: {
//         in: productIds
//       }
//     }
//   });

//   const totalAmount = products.reduce((total, product) => {
//     return total + product.price.toNumber();
//   }, 0);

//   const paymentRequestData = {
//     BusinessShortCode: "174379",
//     Passkey: "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919",
//     Password: "your_password", // This needs to be generated based on your credentials
//     Timestamp: "your_timestamp", // This needs to be in the format YYYYMMDDHHmmss
//     TransactionType: "CustomerPayBillOnline",
//     Amount: totalAmount * 100, // Convert to cents or smallest currency unit
//     PartyA: customerPhoneNumber, // Use the provided customer phone number
//     PartyB: "your_business_short_code",
//     PhoneNumber: customerPhoneNumber, // Same as PartyA
//     CallBackURL: "your_callback_url", // The URL to receive payment notifications
//     AccountReference: "your_order_id", // Unique identifier for the order
//     TransactionDesc: "Order payment",
//   };

//   try {
//     const paymentResponse = await createMpesaPayment(paymentRequestData);

//     const order = await prismadb.order.create({
//       data: {
//         storeId: params.storeId,
//         isPaid: false,
//         orderItems: {
//           create: productIds.map((productId: string) => ({
//             product: {
//               connect: {
//                 id: productId
//               }
//             }
//           }))
//         }
//       }
//     });

//     return NextResponse.json({ mpesaPaymentResponse: paymentResponse }, {
//       headers: corsHeaders
//     });
//   } catch (error) {
//     console.error("Error creating M-Pesa payment:", error);
//     return new NextResponse("An error occurred while processing the payment", { status: 500 });
//   }
// }
