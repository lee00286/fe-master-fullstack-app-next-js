const fetcher = async ({ url, method, body, json = true }) => {
  const options = {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const res = await fetch(url, options);

  if (!res.ok) {
    // handle your errors
    throw new Error('API error');
  }

  if (json) {
    const data = await res.json();
    return data.data;
  }
};

export const register = (user) => {
  return fetcher({ url: 'api/register', method: 'post', body: user });
};

export const signin = (user) => {
  return fetcher({ url: 'api/signin', method: 'post', body: user });
};

export const createNewProject = (name) => {
  return fetcher({
    url: 'api/project',
    method: 'post',
    body: { name }
  });
};
