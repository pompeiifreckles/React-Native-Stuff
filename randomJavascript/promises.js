console.log('person1: shows ticket')
console.log('person2: shows ticket')

const wifeBringingTickets = new Promise((resolve, reject) => {
	setTimeout(() => resolve('tickets'), 10000)
})

const getPopcorn = wifeBringingTickets.then(t => {
	console.log('Wife: I have the tickets')
	console.log('Husband: Let\'s go in')
	console.log('Wife: No I am hungry')
	return new Promise((resolve, reject) => resolve(`${t}, popcorns`))
})

const getButter = getPopcorn.then(tp => {
	console.log('Husband: I got the popcorn, let\'s go in')
	console.log('I need butter on my popcorn')
	return new Promise((resolve, reject) => resolve(`${tp}, butter`))
})

getButter.then(tpb => {
	console.log('I got everything')
	console.log(`Enters with ${tpb}`)
})


console.log('person4: shows ticket')
console.log('person5: shows ticket')
