import './App.css'

function Prop2(Props){
    return(
        <div className='d1'>
            {
                Props.data.filter((p)=>p.price<10000).map((p,i)=>{
                    return(
                        <div key={i} className='d2'>
                            <img src={p.image} alt={p.name} height='200' width='200'></img>
                            <h2 className='d3'>{p.name}</h2>
                            <h3 className='d4'>{p.price}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Prop2;