const Flutterwave = require("flutterwave-node-v3");
import "dotenv/config";

const publicKey = process.env.PUBLIC_KEY!;
const sescretKey = process.env.SECRET_KEY!;

const flw = new Flutterwave(publicKey, sescretKey);

//create OTP
// const createOTP = async () => {
//   try {
//     const payload = {
//       length: 7,
//       customer: {
//         name: "taye",
//         email: "taylorgitari@gmail.com",
//         phone: "+254712069869",
//       },
//       sender: "taylormade tech",
//       send: "true",
//       medium: ["email", "whatsapp"],
//       expiry: 5,
//     };
//     const response = await flw.Otp.create(payload);
//     console.log("response", response);
//   } catch (error) {
//     console.log(error);
//   }
// };

// createOTP();

//Validate OTP
const validateOTP = async ()=> {
    try {
        const payload = {
            "reference": "CF-BARTER-20220615124852454585",
            "otp": "5265279"
        }
        const response = await flw.Otp.validate(payload)
        console.log("response", response);

    } catch (error) {
        console.log(error);

    }
}
validateOTP();
