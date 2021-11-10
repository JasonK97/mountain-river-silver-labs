import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirebase } from '../firebase'

function Blog() {
  const [loading, setLoading] = useState(true)
  const [blogPosts, setBlogPosts] = useState([])
  
  if (loading && !blogPosts.length) {
    getFirebase()
      .database()
      .ref('/posts')
      .orderByChild('dateFormatted')
      .once('value')
      .then(snapshot => {
        let posts = []
        const snapshotVal = snapshot.val()
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug])
        }
  
        const newestFirst = posts.reverse()
        setBlogPosts(newestFirst)
        setLoading(false)
      })
  }
  
  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Mountain River Blog Posts</h1>
      <p>
        Welcome to our blog! Here we post about the most recent litter and share stories about our dogs.
      </p>
      <div className='blog-grid'>
        {blogPosts.map(blogPost => (
          <section key={blogPost.slug} className="card">
            <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
            <div className="card-content">
              <h2>
                {blogPost.title} &mdash;{" "}
                <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
              </h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: `${blogPost.content.substring(0, 200)}...`
                }}
              ></p>
              <Link to={`blog/${blogPost.slug}`}>Continue reading...</Link>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Blog
