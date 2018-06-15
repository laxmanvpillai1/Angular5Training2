

export class BugModel{
    bugId: string;
    bugName: string;
    createdAt: number;
    isClosed: boolean;


    constructor(bugId: string, bugName: string, createdAt: number){
        this.bugId = bugId;
        this.bugName = bugName;
        this.createdAt = createdAt;
        this.isClosed = false;
    }
}