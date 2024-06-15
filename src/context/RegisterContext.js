import React from 'react'

const RegisterContext = React.createContext({
  name: '',
  topic: '',
  changeName: () => {},
  changeTopic: () => {},
  isRegistered: false,
  registerName: () => {},
  showError: false,
  updateError: () => {},
})
export default RegisterContext
