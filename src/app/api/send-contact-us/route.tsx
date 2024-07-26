import { NextRequest, NextResponse } from "next/server";

import {createSendEmailCommand, client} from "../../services/send-email"

type ResponseData = {
  message: string
}

export async function POST(
  request: NextRequest
) {
  const data = await request.json();

  const html = `
    <p>subject: ${data.subject} </p>
    <p>Email: ${data.email} </p>
    <p>Message: ${data.message} </p>`

  const mail = createSendEmailCommand('onejames@gmail.com', html, 'Contact Us');

  try {
    client.send(mail);

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "COULD NOT SEND MESSAGE" },
      {
        status: 500,
        headers: { "content-type": "application/json" }
      }
    );
  }
}