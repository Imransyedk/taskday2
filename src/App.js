import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Badge } from 'react-bootstrap';


function App() {
  const data =[
   {
    productImage:"https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
    productName:"Wristwatch",
    price:"$845" ,
    rating:"5.0",
  },
  {
    productImage:"https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937__480.jpg",
    productName:"Quartzz",
    price:"$550" ,
    rating:"4.0",
  },
  {
    productImage:"https://cdn.anscommerce.com/catalog/brandstore/johnson/17_7_20/Sale.jpg",
    productName:"IWC",
    price:"$754" ,
    rating:"5.0",
  },
  {
    productImage:"https://media.istockphoto.com/id/471712723/photo/watch.jpg?s=612x612&w=0&k=20&c=iMEdtY6uP3iFURngL9qAzzMnWYSkPmHrxIlYIEfduvM=",
    productName:"Gold Watch",
    price:"$280" ,
    rating:"3.0",

  },
  {
    productImage:"https://thumbs.dreamstime.com/b/watch-modern-white-background-32634029.jpg",
    productName:"Swiss Gold",
    price:"$353" ,
    rating:"4.0",

  },
  {
    productImage:"https://sc04.alicdn.com/kf/Hd43ad226937b45fa92c400be9694eba2G.png",
    productName:"Diving Men",
    price:"$468" ,
    rating:"4.0",

  },
  {
    productImage:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735",
    productName:"Apple Ultra",
    price:"$950" ,
    rating:"5.0",

  },
  {
    productImage:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ML733_VW_34FR+watch-41-stainless-gold-cell-8s_VW_34FR_WF_CO_GEO_TR?wid=1400&hei=1400&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1630042278000%2C1661890049467",
    productName:"Apple Series 8",
    price:"$800",
    rating:"5.0",
    

  }
  
  ]
  const[count, setCount]= useState(0)
  return (
    <div className="App">
      <div className='cart-value'>
        <Badge bg="success">
          Cart{count}
        </Badge>

      </div>
    <div className='card-container'>
   {data.map((product,idx)=>(
    <Product
    key={idx}
    prod={product}
    count={count}
    setCount={setCount}

    />
     ))}
        </div>
    </div>
  );
}

export default App;
function Product({prod ,count ,setCount}){
  
 const[show, setShow]=useState(true)
  function addtoCart(){
    setCount(count+1);
    setShow(!show)
    console.log(count)
  }
  function removeCart(){
    setCount(count-1);
    setShow(!show)
    console.log(count)
  }

  return(
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.productImage} />
      <Card.Body style={{color: 'brown'}}>
        <Card.Title>{prod.productName}</Card.Title>
        <Card.Text>{prod.price}</Card.Text>
        <Card.Text>{prod.rating}</Card.Text>
        
       
        {}
        {!show ?
        <Button variant="danger"
        onClick={addtoCart}
        >Remove Cart</Button>
         : 
        <Button variant="primary"
        onClick={removeCart}
        >Add to Cart</Button> }
      </Card.Body>
    </Card>

    </div>
  )
}
