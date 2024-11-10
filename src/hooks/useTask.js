import { useEffect, useState } from "react"
import { getTaskApi, postTaskApi, deleteTaskApi } from "../apis/taskApi"
export const useTask = () => {
    const [category, setCategory] = useState([]);
    const [tasks, setTask] = useState([{ "id": 0, "name": "", "category": "", "isFinish": false }]);
    useEffect(() => {
        const check = async () => {
            const data = await getTaskApi();
            const newTasks = [...tasks];
            const newCategory = [...category];
            data.map(da => {
                newTasks.push({ "id": da.id, "name": da.name, "category": da.category, "isFinish": true });
                newCategory.push(da.category);
            });
            setTask(newTasks);
            setCategory(newCategory);
        }
        check();
    }, [])

    const handleEnter = (e, cate, name) => {

        if (e.key == "Enter") {
            const newTasks = [...tasks];
            newTasks.push({ "id": newTasks.length + 1, "name": name, "category": cate, "isFinish": false })
            setTask(newTasks);
        }
    }

    useEffect(() => {

    }, [])
    return { tasks, category, handleEnter }
}