import NewPost from "./NewPost";
import Post from "./Post";
import styles from "./PostsList.module.css";

function PostList() {
  return (
    <>
      <NewPost />
      <ul className={styles.posts}>
        <Post author="Cassie" body="React.js is awesome!" />
        <Post author="Nightingale" body="Check out more course." />
      </ul>
    </>
  );
}

export default PostList;
