class Meditation {
    constructor(limit) {
        this.limit = limit
    }
    async start() {
        await Promise.resolve();
        for (let i = 1; i <= this.limit; i++) {
            console.log(i)
        }
        console.log("End meditation")
    }
}

const morning_meditation = new Meditation(5)
morning_meditation.start()
console.log("Start meditation")