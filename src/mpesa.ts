const { Mpesa } = require("daraja");
require("dotenv").config();

// instantiate Mpesa with the organization's shortcode and app's Consumer Key
// and Consumer Secret
const mpesa = new Mpesa({
  shortCode: process.env.SHORT_CODE,
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  securityCredential: process.env.SECURITY_CREDENTIALS,
  environment: "sandbox"
});
console.log("mpesa", mpesa);


// then make the call to the API passing the required arguments(CommandID, Amount, Msisdn/phone number, BillRefNumber, ShortCode)
mpesa
  .mpesaExpressRequest(
    "CustomerPayBillOnline", // CommandID
    1, // amount
    254712069869, // phone number
    process.env.SHORT_CODE // short code
  )
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log("error", error);
  });
