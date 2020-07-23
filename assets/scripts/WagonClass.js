// The Wagon class should set the following properties for each instance:

// a capacity, which must be provided to the constructor: this is the maximum number of passengers a wagon can hold.
// a passengers list, which is initially an empty array.
// The Wagon class should have these methods:

// getAvailableSeatCount() – Returns the number of empty seats, determined by the capacity set when the wagon was created, subtracted by the number of passengers currently on board.
// join(traveler) - Adds the traveler to the wagon if there is space. If the wagon is already at maximum capacity, don't add them.
// shouldQuarantine() - Returns true if there is at least one unhealthy person in the wagon. Return false if not.
// totalFood() - Returns the total amount of food among all passengers in the wagon.
class Wagon {
    constructor(maxCapacity) {
        this.capacity = maxCapacity
        this.passengersList = []
    }
    getAvailableSeatCount() {
        return this.capacity - this.passengersList.length



    }

    join(Traveler) {
        if (this.capacity > this.passengersList.length) {
            this.passengersList.push(Traveler)
        }

    }

    shouldQuarantine() {
        let quarentine = false
        for (let index = 0; index < this.passengersList.length; index += 1) {
            let passengers = this.passengersList[index]
            if (passengers.isHealthy === false) {
                quarentine = true
                break
            }
            else {
                quarentine = false
            }
        }
        return quarentine

    }

    totalFood() {
        let foodTotal = 0
        for (let index = 0; index < this.passengersList.length; index += 1) {
            let currentPassenger = this.passengersList[index]
            foodTotal += currentPassenger.food
        }
        return foodTotal
    }
}