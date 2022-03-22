const Note = (props) =>{
    return (
        <div className="bg-sky-200 py-3 my-2 px-2 flex flex-row justify-between">
            <span className="w-1/2 flex flex-row justify-around">
            <span>{props.id}</span>
            <span>{props.content}</span>
            </span>
            <span className="w-1/2 flex flex-row justify-end px-6">
            <span className="mx-6">Edit</span>
            <span>Delete</span>
            </span>
        </div>
    )
}


export default Note;