const getCookie = (name) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const setCookie = (name, value) => {
  let date = new Date(Date.now() + 86400 * 1000);
  date = date.toUTCString();
  document.cookie = `${name}=${value};expires=${date}`;
};

export { getCookie, setCookie };