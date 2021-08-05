import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'


const BlogDetail = () => {

  const {postId} = useParams()
  console.log(postId)

  const [postContents, setPostContents] = useState("loading...")

  useEffect( () => {

    const getBlogPost = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      const responseBody = await response.json()
      const postBody = responseBody.body 
      setPostContents(postBody)
    }
    getBlogPost()

  }, [])

  return ( 
    <div>
      <h1>Blog Detail</h1>
      <p>{postContents}</p>
    </div>
     );

   
}
 
export default BlogDetail;