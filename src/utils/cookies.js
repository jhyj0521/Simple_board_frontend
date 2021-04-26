const getAuthFromCookie = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
};

const getMemberNameFromCookie = () => {
  return document.cookie.replace(
    /(?:(?:^|.*;\s*)memberName\s*=\s*([^;]*).*$)|^.*$/,
    "$1"
  );
};

function deleteCookie(value) {
  document.cookie = `${value}=; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export { getAuthFromCookie, getMemberNameFromCookie, deleteCookie };
