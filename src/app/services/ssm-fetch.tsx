import { SSMClient, GetParametersCommand, GetParametersResult, Parameter } from "@aws-sdk/client-ssm";

const client = new SSMClient();

const input = {
    Names: ["AWS_ACCESS_KEY", "AWS_SECRET_ACCESS_KEY"],
    WithDecryption: true,
};

const command = new GetParametersCommand(input);

export async function loadSecrets() {

    try {
        const response: GetParametersResult = await client.send(command);

        console.log(response);
    } catch (error) {
      console.log(error);
    }
  }