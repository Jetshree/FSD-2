function Child1(props){
    return (
        <>
            <ul>
                <li>{props.data.name}</li>
                <li>{props.data.price}</li>
            </ul>
        </>
    )
}
export default Child1