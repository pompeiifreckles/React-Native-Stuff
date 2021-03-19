let protoRabbit = {
    speak(line) {
        console.log(`The ${this.type} rabbit says ${line}`)
    }
}

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit)
    rabbit.type = type
    return rabbit
}

let killerRabbit = makeRabbit('killer rabbit')
killerRabbit.speak('SKREE')