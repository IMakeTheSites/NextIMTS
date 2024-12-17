import { useState } from 'react';
import Page from '../../components/Page';
import Section from '../../components/Section/Section';
import Cover from '../../components/Cover';
import Title from '../../components/Title/Title';
import PostGrid from '../../components/PostGrid/PostGrid';
import Post from '../../components/Post/Post';
import { Button } from '@mui/material';
import { loadData } from './api/post';

const LOAD_MORE_STEP = 4;

function BlogPage({ initialPosts, total }) {
  const [posts, setPosts] = useState(initialPosts);
  const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE_STEP);
  const [loading, setLoading] = useState(false);

  const showLoadButton = total > loadedAmount;

  const getMorePosts = async () => {
    setLoading(true);

    try {
      const data = await fetch(
        `/api/post?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE_STEP}`
      ).then((response) => response.json());
      setLoadedAmount(loadedAmount + LOAD_MORE_STEP);
      setPosts([...posts, ...data.posts]);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <Page title="Blog">
      <div style={{ marginBottom: '1rem' }}>
        <Section>
          <Cover title="Blog" />
        </Section>
        <Section>
          <Title>New Post</Title>
          <PostGrid>
            {posts.map((post) => (
              <Post key={post._id} {...post} />
            ))}
          </PostGrid>
          {showLoadButton && (
            <div className={{ display: 'flex', justifyContent: 'center' }}>
              <Button disabled={loading} onClick={getMorePosts}>
                Load More Posts
              </Button>
            </div>
          )}
        </Section>
      </div>
    </Page>
  );
}

export default BlogPage;

export async function getServerSideProps() {
  const { posts, total } = await loadData(0, LOAD_MORE_STEP);

  return {
    props: {
      initialPosts: posts,
      total,
    },
  };
}
