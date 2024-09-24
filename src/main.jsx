import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost, { action as newPostAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'
import Posts, { loader as PostsLoader } from './routes/Posts'
import PostDetails, { loader as PostDetailLoader } from './routes/PostDetails'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Posts />,
        loader: PostsLoader,
        children: [
          { path: 'new-post', element: <NewPost />, action: newPostAction },
          { path: ':id', element: <PostDetails />, loader: PostDetailLoader }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
