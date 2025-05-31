import img1 from './logo192.png'
import Prop2 from './prop2'

function prop1(){
    const products = [
    {
      name: 'Smartphone',
      price: 9500,
      image: img1
    },
    {
      name: 'Laptop',
      price: 55000,
      image: img1
    },
    {
      name: 'Headphones',
      price: 2500,
      image: img1
    },
    {
      name: 'Keyboard',
      price: 1200,
      image: img1
    }
  ];

    return(
        <>
            <Prop2 data={products}/>
        </>
    )
}
export default prop1