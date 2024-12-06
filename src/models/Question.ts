export class Question {
    public question : String;
    public answer : boolean;
    public answerValues : String[];
    public hint : String;

    constructor(question : String, answer : boolean, answerValues : String[], hint : String){
        this.question = question;
        this.answer = answer;
        this.answerValues = answerValues;
        this.hint = hint;
    }
}