import qs from 'qs'
import axios from 'axios'

export function getInternalStrapiURL(path = "") {
  return `http://strapi:1337${path}`;
}

export function getExternalStrapiURL(path = "") {
  return `${
    process.env.STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function fetchAPI(path: string, urlParamsObject = {}, options = {}, type = 'internal') {
  const auth = type === 'internal' ? { Authorization: `Bearer ${process.env.STRAPI_INTERNAL_TOKEN}`, } : { Authorization: '', }

  const mergedOptions = {
    headers: {
      "Content-Type": "application/json",
      ...auth,
    },
    ...options,
  };

  // Build request URL
  const queryString = qs.stringify(urlParamsObject);
  const queryPath = `/api${path}${queryString ? `?${queryString}` : ""}`
  const requestUrl = type === 'internal' ? getInternalStrapiURL(queryPath) : getExternalStrapiURL(queryPath);

  // Trigger API call
  try {
    const response = await axios.get(requestUrl, mergedOptions);
    const data = await response.data.data;
    return data;
  } catch (e) {
    return {}
  }
}