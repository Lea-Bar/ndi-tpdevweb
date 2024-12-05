import { getAllQuestions } from "../../manager/QuestionManager"

export async function GET({params, request}) {
    const aq = getAllQuestions();
    const q = aq[Math.floor(Math.random()*aq.length)]
    return new Response(
        JSON.stringify({
            "question" : q.question,
            "answer" : q.answer,
            "answerValues" : q.answerValues
        })
    )
}