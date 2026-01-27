class YatzyDice {
    // Face values of the 5 dice.
    // 1 <= values[i] <= 6 for i in [0..4]
    constructor() {
        this.values = new Array(5).fill(0);
        this.throwCount = 0;
        this.random = Math.random;
    }

    // Return the 5 face values of the dice.
    getValues() {
        return this.values;
    }

    // Set the 5 face values of the dice. Note: This method is only to be used in tests.
    setValues(values) {
        this.values = values;
    }

    // Return the number of times the 5 dice have been thrown.
    getThrowCount() {
        return this.throwCount;
    }

    // Reset the throw count.
    resetThrowCount() {
        this.throwCount = 0;
    }

    // Roll the 5 dice. Only roll dice that are not hold.
    roll(holdStatus) {
        for (let i = 0; i < 5; i++) {
            if (!holdStatus[i]) {
                this.values[i] = Math.floor(this.random() * 6) + 1;
            }
        }
        this.throwCount++;
    }
}