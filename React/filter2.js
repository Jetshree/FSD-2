function f2(){
    var arr=[3,5,7,8,9,2,1]
    return (
        <>
            {
                arr.filter((v)=>v>3).map(
                    (v,i)=>{return<h1>{v*5}</h1>}
                )
            }
        </>
    )
}
export default f2