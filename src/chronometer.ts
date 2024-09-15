export class Chronometer {
    private remainingTime: number;
    private intervalId: NodeJS.Timeout | null = null;


    constructor(timeInSeconds: number) {
        this.remainingTime = timeInSeconds;
    }


    start(): void {
        if (this.intervalId) return;

        console.log(`Starting countdown from ${this.remainingTime} seconds...`);

        this.intervalId = setInterval(() => {
            if (this.remainingTime <= 0) {
                this.stop();
                console.log("Time's up!");
            } 
            else {
                this.remainingTime -= 1;
                console.log(`Remaining time: ${this.remainingTime} seconds`);
            }
        }, 1000);
    }    
}