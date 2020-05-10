
export const loginSetup = ({ login }, setState) => {
  const { accessToken, refreshToken, files, email, account } = login
  // sets up cookies
  document.cookie = `pomc=${accessToken};`
  document.cookie = `pomcer=${refreshToken};`
  // sets up tokens in state
  setState({
    user: {
      __typename: 'User',
      files,
      email,
      account
    }
  })
}

export const logout = (setState) => {
  setState({ user: {} })
  document.cookie = 'pomc= ; expires = Thu, 01 Jan 1970 00:00:00 GMT'
}
