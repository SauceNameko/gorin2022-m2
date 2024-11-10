import { useRef } from "react"

export const Category = ({ handleEnter, cate }) => {
    const nameRef = useRef();
    return (
        <>
            <div className="border">
                <input ref={nameRef} type="text" name="" id="" placeholder="タスクを追加" onKeyDown={(e) => handleEnter(e, cate, nameRef.current.value)} />
            </div>
        </>
    )
}