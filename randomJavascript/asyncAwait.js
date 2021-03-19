console.log('person1: shows ticket')
console.log('person2: shows ticket')

const preMovie = async () => {
	const wifeBringingTickets = new Promise((resolve, reject) => {
		setTimeout(() => resolve('Tickets'), 3000)
	})

	const getPopcorn = new Promise((resolve, reject) => resolve('popcorn'))

	const addButter = new Promise((resolve, reject) => resolve('butter'))
	
	const tickets = await wifeBringingTickets
	console.log(`wife: i have the ${tickets}`)
	console.log('husband: we should go in')
	console.log('wife: no i am hungry')
	
	let popcorn = await getPopcorn
	console.log(`husband: i got some ${popcorn}`)
	console.log('husband: we should go')
	console.log('wife: I need butter on my popcorn')

	let butter = await addButter;
	console.log(`husband: i got some ${butter} on`)
	console.log('husband: anything else darling?')
	console.log(`wife: let\'s go we are getting late`)
	console.log(`husband: thank you for reminder *grins*`)


	return tickets
} 

preMovie().then(m => console.log(`person3: shows ${m}`))

console.log('person3: shows ticket')
console.log('person4: shows ticket')
