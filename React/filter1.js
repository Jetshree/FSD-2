function f1(){
    var arr=[3,5,7,9,3,1]
    var t=arr.map((v,i)=>{
        if(v>3){
            return <h1>{v*5}</h1>
        } else {
            return false
        }
    })
    var t1=arr.filter((v)=>{
        if(v>3){
            return <h2 style='color:red'>{v*5}</h2>
        } else {
            return false
        }
    })
    console.log(t)
    console.log(t1)
    return(
        <>
            {t}
            {t1.join(',')}
        </>
    )
}
export default f1