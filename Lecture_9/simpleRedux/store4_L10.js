/* 
Add async actions to the store  
Lecture - 10
Jordan WTF are you doing.
Give me a break
*/

const fetch = require('node-fetch')

const DEFAULT_STATE = {user: {}, contact: [], login: ''}

class Store {
  constructor(reducer, initialState) {
  	this.reducer = reducer
	this.state = initialState
  }

  getState() {
	return this.state
  }

  dispatch(action) {
    if(typeof action === 'function') {
      action(this.dispatch.bind(this))
    } else {
      this.state = this.reducer(this.state, action)
    }
  }

}

// Reducers - start here

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (user={}, action) => {
	if(action.type === UPDATE_USER)		return merge(user, action.payload)
	return user
}

const contactReducer = (contact=[], action) => {
	if(action.type === UPDATE_CONTACT)	return [...contact, action.payload]
	return contact
}

const loginReducer = (login = '', action) => {
  // console.log(action.type, login)
  switch(action.type) {
    case 'LOGIN_SENT': 
      return 'LOGIN_SENT'
    case 'LOGIN_SUCCESS':
      return 'LOGIN_SUCCESS'
    case 'LOGIN_REJECTED':
      return 'LOGIN_REJECTED'
    default:
      return 'FUCK'
  }
}

const reducer = (state, action) => ({
	user: userReducer(state.user, action),
  contact: contactReducer(state.contact, action),
  login: loginReducer(state.login, action)
})

// Reducers - end here

// Action Creators - start here

const updateUser = newUser => ({
	type: UPDATE_USER,
	payload: newUser,
})

const addContact = newContact => ({
	type: UPDATE_CONTACT,
	payload: newContact,
})

const loginUser = (username, password) => dispatch => {
  dispatch({type: 'LOGIN_SENT'})
  login(username, password)
  .then( res => { 
    console.log('Success', res.status);
    if(!res.ok) dispatch({type: 'LOGIN_REJECTED'}) 
    else dispatch({type: 'LOGIN_SUCCESS'}) 
  })
  .catch( err => { console.log('Rejected:', err); dispatch({type: err.errno}) } )
}

const login = (username, password) => {
  return fetch('http://localhost:8000/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username: username, password: password})
  })
}

// Action Creators - End here

// Action Types
const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'



// Driver Code

const store = new Store(reducer, DEFAULT_STATE)

store.dispatch(loginUser('username', 'password'))

// store.dispatch(updateUser({foo: 'foo'}))
// store.dispatch(updateUser({bar: 'bar'}))
// store.dispatch(updateUser({foo: 'baz'}))

// store.dispatch(addContact({name: 'Jordan H', number: '99991'}))
// store.dispatch(addContact({name: 'Jordan H', number: '99991'}))

console.log(store.getState()) 
setTimeout(() => console.log(store.getState()) , 1000)