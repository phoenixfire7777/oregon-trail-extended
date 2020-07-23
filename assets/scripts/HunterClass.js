class Hunter extends Traveler {
    constructor(name) {
        super(name)
        this.food = 2
    }
    hunt() {
        this.food += 5
    }

    eat() {
        for (let eat = 2; eat > 0; eat -= 1) {
            if (this.food > 0) {
                this.food -= 1
            }
            else {
                this.isHealthy = false
            }
        }
    }
    giveFood(traveler, numOfFoodUnits) {
        if (numOfFoodUnits <= this.food) {
            this.food -= numOfFoodUnits
            traveler.food += numOfFoodUnits
        }
    }

}
