import { OpenAIApi, Configuration } from "openai";
import { NextApiRequest, NextApiResponse } from "next";

const openai = async (req: NextApiRequest, res: NextApiResponse) => {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const api = new OpenAIApi(configuration);

  try {
    const response = await api.createCompletion({
      model: "text-davinci-001",
      prompt:
        "Generate a product description for a product with the following attributes: product name = 'ice cream shop', product description = 'get testy icecreams'. Make sure to include details about the product's features and benefits.",
      max_tokens: 265,
      temperature: 0,
    });

    res.status(200).json({
      text: response.data.choices[0].text,
      model: response.data.model,
    });
  } catch (error) {
    //@ts-ignore
    res.status(500).json({ error: error.message });
  }
};

export default openai;
