import { Configuration, OpenAIApi } from "openai";

async function Openai() {
  const configuration = new Configuration({
    organization: "org-irggoJlk0XzpTp72XHXOrFjM",
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);
  const response = await openai.listEngines();
  console.log(response);
}

Openai();
