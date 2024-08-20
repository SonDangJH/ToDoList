import toast from "react-hot-toast";

export const makeRequest = async (url, req) => {
  const res = await fetch(url, req);
  const { ok, headers } = res;
  const contenType = headers.get("content-type");
  let data = contenType.includes("json") ? await res.json() : res.text();
  if (ok) {
    return data;
  }
  toast.error("Error data, data was not found");
  throw data;
};