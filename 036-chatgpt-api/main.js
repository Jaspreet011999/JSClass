// Define the API endpoint and your API key
const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const apiKey = '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';

// Define the request body for the API call
const requestBody = {
  prompt: 'Summarize for me key Javascript concepts ',
  max_tokens: 5
};

// Define the request headers
const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${apiKey}`
};

// Make the API call using the fetch method
fetch(endpoint, {
  method: 'POST',
  headers: headers,
  body: JSON.stringify(requestBody)
})
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.error(error);
});
