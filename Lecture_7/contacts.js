const contacts = ['Sid', 'sunny', 'aman', 'Anmol']

function contactsObj(contacts) {
	let newObj = {}

	contacts.forEach(contact => {
		const firstLetter = contact[0].toUpperCase()

		newObj = {...newObj, [firstLetter]: [contact, ...(newObj[firstLetter]||[])]}
	})

	return newObj
}

const object = contactsObj(contacts)
console.log(object)
