class YatzyGui {
    constructor() {
        this.dice = new YatzyDice();
        this.holdStatus = new Array(5).fill(false);
        this.initUI();
    }

    initUI() {
        // Initialize the user interface elements here
        // For example, buttons for rolling dice, displaying values, etc.
    }

    rollDice() {
        this.dice.roll(this.holdStatus);
        this.updateUI();
    }

    updateUI() {
        // Update the UI with the current dice values
        const values = this.dice.getValues();
        // Code to display values in the UI
    }

    toggleHold(index) {
        this.holdStatus[index] = !this.holdStatus[index];
    }
}