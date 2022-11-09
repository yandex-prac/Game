function jsonResponseHandler(response: Response) {
  return response.json()
}

function jsonTextResponseHandler(response: Response) {
  return response.status === 200 ? response.json() : response.text()
}

export { jsonResponseHandler, jsonTextResponseHandler }
