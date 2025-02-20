import jwt from "jsonwebtoken";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

export async function handler(event) {
  const secret = process.env.Secret;
  const token = event.queryStringParameters?.token;
  const lambdaClient = new LambdaClient({ region: "us-east-1" });

  try {
    const decoded = jwt.verify(token, secret);
    const userId = decoded.sub;
    const steamId = event.queryStringParameters?.steamID;

    if (!steamId) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing steamID" }),
      };
    }

    const steamVerifyPayload = {
      user_id: userId,
      steam_id: event.queryStringParameters?.steamID,
    };

    const command = new InvokeCommand({
      FunctionName: "verifySteam",
      Payload: JSON.stringify(steamVerifyPayload),
    });

    const response = await lambdaClient.send(command);
    const steamVerifyResult = JSON.parse(
      Buffer.from(response.Payload).toString()
    );
    console.log(steamVerifyResult);

    if (steamVerifyResult.error) {
      if (steamVerifyResult.error.includes("punycode")) {
        console.warn(
          "Ignoring punycode deprecation warning:",
          steamVerifyResult.error
        );
      } else {
        return {
          statusCode: 403,
          body: JSON.stringify({
            error: "SteamID verification failed",
            details: steamVerifyResult,
          }),
        };
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Token verified successfully",
        user_id: userId,
        decoded,
      }),
      steam_verification: steamVerifyResult,
    };
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.error("Token has expired");
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Token has expired" }),
      };
    } else if (err.name === "JsonWebTokenError") {
      console.error("Invalid token");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid token" }),
      };
    } else {
      console.error("Token verification error:", err);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Token verification failed" }),
      };
    }
  }
}
