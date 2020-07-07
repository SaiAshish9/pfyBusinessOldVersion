import cookie from "js-cookie";
export const getHeaders = () => ({
  headers: {
    "Content-Type": "application/json",
    "companytoken": cookie.get("companytoken")
  }
});
