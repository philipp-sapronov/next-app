import { default as HomePage, staticProps } from '../containers/home'
import { Language } from '../constants'

export default HomePage

export const getStaticProps = staticProps(Language.ru)
