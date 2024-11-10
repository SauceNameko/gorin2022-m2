import "./List.css";
import { Category } from "../Category"

export const List = ({ cate, handleEnter, tasks }) => {
    
    return (
        <>
            <div className="list">
                <h2 className="category">{cate}</h2>
                {tasks.map(task => {
                    { !task.isFinish && <Category handleEnter={handleEnter} cate={cate} ></Category> }
                })}
            </div >
        </>
    )
}