import React ,{useState , useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const Yoga = () => {
    const [yoga,setBlogs]=useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          fetch('http://localhost:8000/yoga')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setIsPending(false);
            setBlogs(data);
          })
        }, 100);
        Aos.init({duration:2000});
      }, [])
    return (
        <div className='yoga_main'>
            <h1 id='yoga_asans'>YOGA  ASANS</h1> 
            <Link id ='back-home' to='/home'><button> Back To Home Page</button></Link>
            { isPending && <div id="blghd">Loading...</div> }
            {
                yoga && yoga.map((yoga)=>(
                    <div data-Aos="fade-up" className='yoga_box'>
                    <img id="yoga_img" src={yoga.img_url} alt="" />
                    <p id="yoga_name">{yoga.sanskrit_name}</p>
                    </div>
                ))}
            
        </div>
    )
}

export default Yoga
