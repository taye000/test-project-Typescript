import { Client } from "africastalking-ts";
import "dotenv/config"

const apiKey = process.env.AFRICANSTALKING_API_KEY!;
const username = process.env.USERNAME!;

console.log("apikey", apiKey);


try {
    const client = new Client({
        apiKey,
        username,
      });
      
      client.sendSms({
        to: ["+254712069869"],
        message: "hi T",
      });
} catch (error) {
    console.log(error)
}

