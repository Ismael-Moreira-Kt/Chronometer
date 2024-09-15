export class Chronometer {
    private remainingTime: number;
    private intervalId: NodeJS.Timeout | null = null;


    constructor(timeInSeconds: number) {
        this.remainingTime = timeInSeconds;
    }
}