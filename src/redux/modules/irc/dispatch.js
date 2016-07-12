import { actions } from './reducer'
import { bindActionCreators } from 'redux'

export default bindActionCreators.bind(null, actions)
