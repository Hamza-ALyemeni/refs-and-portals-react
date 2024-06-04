export default function ResultModel({result,targetTime}){
    return (
    <dialog className="result-modal" open>
        <h2>Your {result}</h2>
        <p>the target time was <strong>{targetTime} seconds.</strong></p>
        <p>you stopped the timer with <strong>X seconds left.</strong></p>
        <form action="dialog">
            <button>close</button>
        </form>
    </dialog>
    );
}