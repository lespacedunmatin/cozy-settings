import { combineReducers } from 'redux'

import fields from './fields'
import passphrase from './passphrase'
import instance from './instance'
import devices from './devices'
import deviceToRevoke from './deviceToRevoke'
import openDeviceRevokeModale from './openDeviceRevokeModale'
import ui from './ui'
import alerterReducer from 'cozy-ui/react/Alerter'

const settingsApp = combineReducers({
  devices,
  fields,
  instance,
  openDeviceRevokeModale,
  deviceToRevoke,
  passphrase,
  ui,
  alerts: alerterReducer
})

export default settingsApp
