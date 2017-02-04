export class Plugin {
    constructor(public id: number,
        public name: string,
        public version: string,
        public createdAt: Date,
        public content: string,
        public username: string) { }
}