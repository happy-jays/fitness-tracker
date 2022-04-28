import React,{useState , useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
const Blog = () => {
  //const initialState={author:'',title:'',content:''}
    const [blogs,setBlogs]=useState(null);
    const [isPending, setIsPending] = useState(true);
    

    useEffect(() => {
        setTimeout(() => {
          fetch('http://ec2-3-110-0-121.ap-south-1.compute.amazonaws.com:8080/blog/posts',{
            method:'GET',
            headers:{
              Authorization:'Bearer '+localStorage.getItem('token')
            },
            
          }
          )
          .then(res => {
            return res.json();
           
          })
          .then(data => {
            console.log(typeof(data))
            setIsPending(false);
            setBlogs(data);
          })
        }, 1000);
        Aos.init({duration:2000});
      }, [])
      blogs && blogs.map((blog)=>{
        blog.staticUrl="http://localhost:8080/"+blog.imageUrl
        console.log(blog.staticUrl)
      })
    return (
        <div>
           <h1 id="blgmhd" >Fitness Blogs</h1>
           <Link to='/home'><button id="blg-bck-hm">Back To Home Page</button></Link>
            { isPending && <div id="blghd">Loading...</div> }
            {
                blogs && blogs.map((blog)=>(
                    <div key={blog.id} className='blgbox' data-Aos="fade-up">
                        <h1 id="blgttl">{blog.title}</h1>
                            <p id="blgathr">Written by {blog.author}</p>
                            <button id="del-blg-btn">DELETE BLOG</button>
                            <button id="edt-blg-btn">EDIT BLOG</button>
                            <p id="blgcont">{blog.content}</p>
                            <img id="mltr-exmpl-img" src={blog.staticUrl}></img>
                            
                        </div>
                ))}
        </div>
    )
}

export default Blog
