export class Movie {
    constructor(title, releasedDate, duration) {
        this.title = title
        this.releasedDate = releasedDate
        this.duration = duration
    }
    getMovie(){
        return this.title+" "+ this.releasedDate+" "+this.duration;
    }
 }
 

