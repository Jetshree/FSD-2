import Child from './Child'
import Child1 from './Child1.js'

function parent(){
    var a='ABC'
    var obj={name:"product1",price:"300"}
    return(
        <>
            <Child1 data={obj}/>
            <Child name='XYZ' marks='23'/>
            <Child name={a} marks='20'/>

        </>
    )
}
export default parent