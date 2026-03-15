export default async function handler(req, res) {

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: "API Key não configurada." });
  }

  try {

    const { prompt, systemInstruction } = req.body;

    // PASSO 1 — descobrir modelo disponível
    const listRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
    );

    const listData = await listRes.json();

    const availableModel = listData.models?.find(m =>
      m.supportedGenerationMethods?.includes("generateContent")
    )?.name;

    if (!availableModel) {
      return res.json({ text: "Nenhum modelo disponível para esta chave." });
    }

    // PASSO 2 — gerar conteúdo
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/${availableModel}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemInstruction}\n\n${prompt}`
                }
              ]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Resposta vazia do Gemini.";

    res.status(200).json({ text });

  } catch (error) {
    res.status(500).json({ error: "Erro ao chamar Gemini." });
  }
}
