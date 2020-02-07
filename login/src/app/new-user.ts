export class NewUser {
    constructor(
        public userName:string,
        public role:string,
        public email:string,
        public password:string,
        public cPassword:string
    ){}
}
