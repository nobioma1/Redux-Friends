export const getToken = () => {
  try {
    const serializedToken = localStorage.getItem('friends-token');
    if (serializedToken === null) {
      return undefined;
    }
    return JSON.parse(serializedToken);
  } catch {
    return undefined;
  }
};

export const setToken = token => {
  try {
    const serializedToken = JSON.stringify(token);
    localStorage.setItem('friends-token', serializedToken);
  } catch {
    return undefined;
  }
};

export const clearToken = () => {
  localStorage.removeItem('friends-token');
  window.location.href = '/';
};
