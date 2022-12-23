export const doPost = async (url, body, jsonFormat = false) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return jsonFormat ? response.json() : response.text();
};

export const doRequestWithoutBody = async (url, method, jsonFormat = false) => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  return jsonFormat ? response.json() : response.text();
};

export const doRequestWithBody = async (url, method, body, jsonFormat = false) => {
  const response = await fetch(url, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return jsonFormat ? response.json() : response.text();
};

export const doGet = async (url, jsonFormat = false) => {
  const response = await fetch(url);
  return jsonFormat ? response.json() : response.text();
};
