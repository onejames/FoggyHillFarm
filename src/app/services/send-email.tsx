// aws-ses.js
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

// import { process } from "../interfaces/processModel"

declare var process: {
    env: {
        NEXT_PUBLIC_MEASUREMENT_ID: string;
        AWS_ACCESS_KEY: string
        AWS_SECRET_ACCESS_KEY: string
    }
}

const client = new SESClient({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  },
  region: "us-east-1",
});

const adminMail = "onejames@gmail.com";

const createSendEmailCommand = (toAddress: string, html: string, subject: string) => {
    return new SendEmailCommand({
      Destination: {
        CcAddresses: [],
        ToAddresses: [
          toAddress,
        ],
      },
      Message: {
        Body: {
          Html: {
            Charset: "UTF-8",
            Data: html,
          },
        //   Text: {
        //     Charset: "UTF-8",
        //     Data: "TEXT_FORMAT_BODY",
        //   },
        },
        Subject: {
          Charset: "UTF-8",
          Data: subject,
        },
      },
      Source: "admin@foggyhillfarmbloomington.com",
      ReplyToAddresses: [],
    });
};

export { 
    createSendEmailCommand,
    client
}
