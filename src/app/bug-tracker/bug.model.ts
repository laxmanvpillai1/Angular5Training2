

export class BugModel{
    bugName: string;
    createdAt: number;
    isClosed: boolean;

    constructor(bugName: string, createdAt: number){
        this.bugName = bugName;
        this.createdAt = createdAt;
        this.isClosed = false;
    }
}