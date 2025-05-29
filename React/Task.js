import lg from './logo.svg'
function Task(){
    var a=2;
    var s= {backgroundColor:'red', fontSize: '25px'};
    return (
        <>
        <p style={{fontSize:'50px', color: 'blue'}}>2*a={2*a}</p>
        <h1 className='.test' style={s}>This is an example</h1>
        <img src={lg}/>
        {/* hi */}
        {//hello
        }
        <h2>Current Date {new Date().toLocaleDateString()} </h2>
        <h3>Current Time {new Date().toLocaleTimeString()}</h3>
    </>
    )
    
}
export default Task;