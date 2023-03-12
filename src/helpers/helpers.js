import axios from 'axios'
import store from '../store'
import router from "@/router";

export const getToken = () => localStorage.getItem('token-bot')

export const setToken = token => {
  localStorage.setItem('token-bot', token)
}
export const removeToken = () => {
  localStorage.removeItem('token-bot')
}
export const getDarkTheme = () => localStorage.getItem('dark_theme')
export const setDarkTheme = theme => {
  localStorage.setItem('dark_theme', theme)
}
export const getAxios = url => {
  // store.state.loading = true
  return axios({
    method: 'GET',
    url,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer_${getToken()}`,
    },
  }).then(r => {
    // store.state.loading = false
    return r.data
  })
      .catch(e => {
        store.state.loading = false
      })
}
export const postAxios = (url, payload, snackbars) => {

  return axios({
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer_${getToken()}`,
    },
    data: payload,
  }).then(r => {
    return r.data
  })

}
export const postWithoutSnack = (url, payload) => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'POST',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  })
    .then(r => {
      store.state.loading = false
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}

export const uploadAxios = (url, formData) => {
  store.state.loading = true
  store.state.error = false
  return axios.post(
    url,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${getToken()}`,
      },
    },
  )
    .then(r => {
      store.state.loading = false
      store.commit('setSnackbars', 'Успешно отправлено')
      return r.data
    })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}

export const extraAxios = (method, url, payload) => {
  store.state.loading = true
  store.state.error = false
  axios({
    method: method,
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  }).then(r => {
    store.state.loading = false
    store.commit('setSnackbars', 'Успешно изменено')
    return r.data
  })
    .catch(e => {
      store.state.loading = false
      store.commit('setError')
      store.commit('setSnackbars', e.message)
    })
}

export const putAxios = (url, payload) => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'PUT',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  }).then(r => {
    store.state.loading = false
    store.commit('setSnackbars', 'Успешно изменено')
    return r.data
  })
      .catch(e => {
        store.state.loading = false
        if (e.response) {
          store.commit('setSnackbars', e.response.data)
          return
        }
        store.commit('setError')
        store.commit('setSnackbars', e.message)
      })
}
export const deleteAxios = (url, payload) => {
  store.state.loading = true
  store.state.error = false
  return axios({
    method: 'DELETE',
    url,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    data: payload,
  }).then(r => {
    r.data
    store.state.loading = false
    store.commit('setSnackbars', 'Успешно удалено')
  })
      .catch(e => {
        store.state.loading = false
        store.commit('setError')
        store.commit('setSnackbars', e.message)
      })
}
export async function logOut() {
  await router.push({ name: 'login' })
  removeToken()
}

// eslint-disable-next-line consistent-return
export function decodeJWT() {
  if (getToken()) {
    const base64Url = getToken().split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`).join(''))

    return JSON.parse(jsonPayload)
  }
}
