import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  profile: {},
  keeps: [],
  activeKeep: {},
  vaults: [],
  activeVault: {},
  creator: {},
  vaultKeeps: [],
  vaultImages: [
    'https://images.unsplash.com/photo-1591884641643-fe1e3163cf08?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80',

    'https://images.unsplash.com/photo-1579156618447-e967604df979?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDd8fHNhZmUlMjB2YXVsdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1530035890965-bf60e4bfd22e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODR8fHNhZmUlMjB2YXVsdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1463717738788-85fcacb6ac3d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTE1fHxzYWZlJTIwdmF1bHR8ZW58MHx8MHw%3D&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1571376254030-943e689e6d88?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTM5fHxzYWZlJTIwdmF1bHR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1604231251350-a1a768e95033?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1570738139293-f34b0af1f74f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1601229542870-338109ad2789?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8c2FmZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',

    'https://images.unsplash.com/photo-1599766676402-1c8d5c5bc172?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fHNhZmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60'
  ]
})
