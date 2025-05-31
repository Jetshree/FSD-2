function counter(){
    const val = document.getElementById('ta').value 
    document.getElementById('count').innerHTML='count: '+val.length
}
function events2(){
    return(
        <>
            <textarea onChange={counter} id='ta' placeholder="type here..."/>
            <p id='count'>count:0</p>
            <button onClick={()=>{
                const output=document.getElementById("ta").value
                alert(output)
            }}>send</button>
        </>
    )
}export default events2