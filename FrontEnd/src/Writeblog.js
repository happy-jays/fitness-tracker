import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Writeblog = () => {
    const [title, setTittle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [image,setImage]=useState(null)
    const postData=new FormData()
    postData.append('title',title)
    postData.append('author',author)
    postData.append('content',content)
    postData.append('image',image)
    const addBlog = (e) => {
        e.preventDefault();
        const blog = { title, content, author };
        fetch('http://ec2-3-110-0-121.ap-south-1.compute.amazonaws.com:8080/blog/createpost', {
          
            method: 'POST',
            headers:{
                "Authorization":'Bearer '+localStorage.getItem('token')
            },
            body: postData
        }).then(() => {
            alert('blog added successfully');
        })
    }
    return (
        <div className='wrtblg_main'>
            <form onSubmit={addBlog} class="blgfrm" encType='multipart/form-data'>
                <h1 id="blghd">Write A New Blog</h1>

                <label>Blog Tittle</label>
                <input type="text" required value={title} onChange={(e) => setTittle(e.target.value)} ></input>
                <div>
                    <label>Blog Content</label>
                </div>
                <textarea required value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <div>
                    <label>author name</label>
                </div>
                <input type="text" required value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <input type="file" name='image' onChange={(e) => setImage(e.target.files[0])}></input>
                <button>ADD BLOG</button>
                <p id="sglg">Go back to <Link id="lg" to="/blogs">Blog page</Link></p>
                <p id="sglg">Go back to <Link id="lg" to="/home">Home Page</Link></p>
            </form>
        </div>
    )
}

export default Writeblog
