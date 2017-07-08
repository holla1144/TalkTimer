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
        this.updateStopWatchTime(stopWatchTime)
        this.updateAverageTime(averageTime);
        this.updateTimesSpoken(timesSpoken);
        this.updateTotalTime(totalTime);
    }
    updateStopWatchTime(newTime) {
        this.stopWatchTime = newTime;
    };
    updateAverageTime(newAverageTime) {
        this.averageTime = newAverageTime;
    };
    updateTimesSpoken(newTimesSpoken) {
        this.timesSpoken = newTimesSpoken;
    };
    updateTotalTime(newTotalTime) {
        this.totalTime = newTotalTime;
    }

};

module.exports = User;