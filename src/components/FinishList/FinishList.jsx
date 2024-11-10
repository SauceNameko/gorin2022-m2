import { FinishTask } from "../FinishTask/FinishTask";
import "./FinishList.css";
export const FinishList = ({ tasks }) => {
    console.log(tasks);
    
    return (
        <>
            <div className="list">
                <h2 className="category">完了タスク</h2>
                {tasks.map(task => {
                    { task.isFinish && <FinishTask tasks={tasks} ></FinishTask> }
                })}
            </div >
        </>
    )
}