import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postSlice';

const PostsView = () => {
    // const {posts, isLoading, error} = useSelector((state) => console.log(state))
    const {posts, isLoading, error} = useSelector((state) => state.posts)

    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(fetchPosts())
    }, [])

    return (
        <div>
            <h1>Post View</h1>
            <div>
                {
                    isLoading && <h3>Loading....</h3>
                }
                {
                    error && <h3>{error.message}</h3>
                }
                <section>
                {
                   posts && posts.map( (post) => {
                        return <article key={post.id}>
                            <h5>{post.title}</h5>
                            <p>{post.body}</p>
                        </article>
                   } )
                }
                </section>
            </div>
        </div>
    );
};

export default PostsView;