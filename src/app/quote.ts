export class Quote {
    constructor(public id: number , public name: string, public description: string, public author: string,public upvotes:number,public downvotes:number,public displayTime:Date) {

    }
    upvote() {
        this.upvotes++;
    }

    downvote() {
        this.downvotes++;
    }


}
