function events(){
    function handleclick(){
        alert("single click")
    }
    function handlechange(e){
        console.log(e.target.value)
    }
    function handlesubmit(e){
        e.preventDefault()
        alert("thank you")
    }
    return(
        <>
            <button onClick={handleclick}>Single click</button>
            <button onDoubleClick={()=>{
                alert("double click")
            }}>Double click here</button>
            <form onSubmit={handlesubmit}>
                <input onChange={handlechange}></input>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}
export default events