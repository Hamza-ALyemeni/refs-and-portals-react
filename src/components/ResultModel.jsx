import { forwardRef } from "react";

const ResultModel = forwardRef(function ResultModel({result,targetTime},ref){
    return (
    <dialog ref={ref} className="result-modal" >
        <h2>Your {result}</h2>
        <p>the target time was <strong>{targetTime} seconds.</strong></p>
        <p>you stopped the timer with <strong>X seconds left.</strong></p>
        <form action="dialog">
            <button>close</button>
        </form>
    </dialog>
    );
});

export default  ResultModel;