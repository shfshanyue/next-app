import ReactGA from 'react-ga'
import config from '../config'

export const initGA = () => {
  // 设置 GA code
  ReactGA.initialize(config.ga)
}

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname })
  ReactGA.pageview(window.location.pathname)
}
