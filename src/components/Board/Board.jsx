import "./Board.css";
import { List } from "../List/List"
import { FinishList } from "../FinishList/FinishList";

export const Board = ({ tasks, category, handleEnter }) => {

    return (
        <>
            <h1>Board</h1>
            <div className="board">
                {category.map(cate => {
                    return (
                        <>
                            <List cate={cate} handleEnter={handleEnter} tasks={tasks} ></List>
                        </>
                    )
                })}
                <FinishList tasks={tasks}  ></FinishList>
            </div>
        </>
    )
}