function m1(){
    var arr=[3,5,7,9,3,1]
    return(
        <>{
            arr.map((v,i)=>{
                return <h1>{v}*3={v*3}</h1>
            })}
        </>
    )
}
export default m1