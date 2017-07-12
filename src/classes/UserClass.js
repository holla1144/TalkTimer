/**
 * Created by Master on 08-Jul-17.
 */
class User {
    constructor(name, stopWatchTime, averageTime, timesSpoken, totalTime) {
        this.name = name;
        this.stopWatchTime = stopWatchTime;
        this.averageTime = averageTime;
        this.timesSpoken = timesSpoken;
        this.totalTime = totalTime;
        this.updateStopWatchTime(stopWatchTime);
        this.updateAverageTime(averageTime);

        this.updateTotalTime(totalTime);
    }
    updateStopWatchTime(newTime) {
        this.stopWatchTime = newTime;
    };
    updateAverageTime(newAverageTime) {
        this.averageTime = newAverageTime;
    };

    updateTotalTime(newTotalTime) {
        this.totalTime = newTotalTime;
    };

    updateTimesSpoken() {
        return this.timesSpoken++;
    };

};



module.exports = User;