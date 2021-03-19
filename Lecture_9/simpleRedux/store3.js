const DEFAULT_STATE = {user: {}, contact: []}

class Store {
  constructor(reducer, initialState) {
  	this.reducer = reducer
	this.state = initialState
  }

  getState() {
	return this.state
  }

  dispatch(update) {
  	this.state = this.reducer(this.state, update)
  }

}

const merge = (prev, next) => Object.assign({}, prev, next)

const userReducer = (user={}, action) => {
	if(action.type === UPDATE_USER)		return merge(user, action.payload)
	return user
}

const contactReducer = (contact=[], action) => {
	if(action.type === UPDATE_CONTACT)	return [...contact, action.payload]
	return contact
}


const reducer = (state, action) => ({
	user: userReducer(state.user, action),
	contact: contactReducer(state.contact, action)
})

const updateUser = newUser => ({
	type: UPDATE_USER,
	payload: newUser,
})

const addContact = newContact => ({
	type: UPDATE_CONTACT,
	payload: newContact,
})

const UPDATE_USER = 'UPDATE_USER'
const UPDATE_CONTACT = 'UPDATE_CONTACT'

const store = new Store(reducer, DEFAULT_STATE)

store.dispatch(updateUser({foo: 'foo'}))
store.dispatch(updateUser({bar: 'bar'}))
store.dispatch(updateUser({foo: 'baz'}))

store.dispatch(addContact({name: 'Jordan H', number: '99991'}))
store.dispatch(addContact({name: 'Jordan H', number: '99991'}))

console.log(store.getState()) 
