import { OpenAIApi, Configuration } from "openai";
export default function openai() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const response = openai
    .createCompletion({
      model: "text-davinci-001",
      prompt:
        "Generate a product description for a product with the following attributes: product name = 'ice cream shop', product description = 'get testy icecreams'. Make sure to include details about the product's features and benefits.",
      max_tokens: 265,
      temperature: 0,
    })
    .then((response) => {
      const data = response.data;
      const text = response.data.choices[0].text;
      const prompt_tokens = response.data.usage?.prompt_tokens;
      const completion_tokens = response.data.usage?.completion_tokens;
      const total_tokens = response.data.usage?.total_tokens;
      const model = response.data.model;

      console.log(data);
      console.log(response);
      console.log(model);
    });
}
