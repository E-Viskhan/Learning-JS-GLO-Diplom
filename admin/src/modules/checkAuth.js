import { getCookie } from "./cookies";

export const checkAuth = () => {
  const redirectToAuth = () => document.location.href = 'index.html';
  if (getCookie('access') !== 'true') { redirectToAuth(); }


};