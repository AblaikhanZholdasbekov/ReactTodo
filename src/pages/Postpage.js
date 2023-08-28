import React, { useState, useEffect } from "react";
import axios from "axios";

const src = "https://jsonplaceholder.typicode.com/posts?_limit=4";

const Postpage = () => {
  const [articles, setArticles] = useState([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const [editablePostId, setEditablePostId] = useState(null);

  useEffect(() => {
    axios.get(src).then((response) => {
      setArticles(response.data);
    });
  }, []);

  const handlePostClick = (e) => {
    e.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: newPostTitle,
        body: newPostBody,
      })
      .then((response) => {
        console.log(response.data);
        setArticles((prevArticles) => [...prevArticles, response.data]);
        setNewPostTitle("");
        setNewPostBody("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEditClick = (postId) => {
    setEditablePostId(postId);
  };

  const handlePutClick = (postId) => {
    const updatedPost = {
      title: newPostTitle,
      body: newPostBody,
    };

    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, updatedPost)
      .then((response) => {
        console.log("Post updated:", response.data);
        setArticles((prevArticles) =>
          prevArticles.map((article) =>
            article.id === postId ? response.data : article
          )
        );
        setEditablePostId(null);
        setNewPostTitle("");
        setNewPostBody("");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDeleteClick = (postId) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => {
        console.log("Deleted post:", response.data);
        setArticles((prevArticles) =>
          prevArticles.filter((article) => article.id !== parseInt(postId))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="posts">
      <div>
        <form className="post-axios">
          <input
            className="input-post"
            type="text"
            placeholder="Title"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
          />
          <input
            className="input-post"
            type="text"
            placeholder="Body"
            value={newPostBody}
            onChange={(e) => setNewPostBody(e.target.value)}
          />
          <button className="create-post-btn" onClick={handlePostClick}>
            Create Post
          </button>
        </form>
      </div>
      <h3>GET method</h3>
      <div className="main-axios">
        {articles.length === 0 ? (
          <p>No posts available.</p>
        ) : (
          articles.map((article) => (
            <div key={article.id}>
              <p>{article.title}</p>
              <button onClick={() => handleEditClick(article.id)}>Edit</button>
              <button onClick={() => handleDeleteClick(article.id)}>
                Delete{" "}
              </button>
              {editablePostId === article.id ? (
                <div>
                  <input
                    type="text"
                    placeholder="New Title"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="New Body"
                    value={newPostBody}
                    onChange={(e) => setNewPostBody(e.target.value)}
                  />
                  <button onClick={() => handlePutClick(article.id)}>
                    Update
                  </button>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Postpage;
