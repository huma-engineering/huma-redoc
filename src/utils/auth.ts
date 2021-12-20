import Hawk from 'hawk';

export const isAuth = () => {
  const localAuth = localStorage.getItem("auth")

  return localAuth ? JSON.parse(localAuth)?.type ? true : false : false
}

export const getAuthCredentials = (type, path, value?, mediaType?, method?) => {
  const localAuth = localStorage.getItem("auth")
  const localJsonAuth = localAuth ? JSON.parse(localAuth) : null

  switch (type) {
    case "Hawk":
      const credentials = {
        id: localJsonAuth.data.id,
        key: localJsonAuth.data.key,
        algorithm: 'sha256'
      }

      let contentCredentials: { [k: string]: any } = {
        credentials: credentials,
        contentType: mediaType ? mediaType : 'application/json',
      }

      if (value) {
        contentCredentials = {
          ...contentCredentials,
          payload: value
        }
      }

      const { header } = Hawk.client.header(`
      ${path}`,
        method,
        contentCredentials
      );

      return header
  }
}