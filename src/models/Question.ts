export class Question {
    public question : String;
    public answer : boolean;
    public answerValues : String[];

    constructor(question : String, answer : boolean, answerValues : String[]){
        this.question = question;
        this.answer = answer;
        this.answerValues = answerValues;
    }
}