export const FinishTask = ({ tasks, }) => {
    return (
        <>
            {tasks.map((tasks, index) => {
                return (
                    <>
                    
                        <input type="text" name="" id=""
                            value={`[${tasks.category}]
                           ${tasks.name}`}
                        />
                    </>
                )
            })}
        </>
    )
}