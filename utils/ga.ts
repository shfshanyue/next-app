import ReactGA from 'react-ga'

export const initGA = () => {
  // 设置 GA code
  ReactGA.initialize('UA-xxxxxxxxx-1')
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
