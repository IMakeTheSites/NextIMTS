import Page from '../../components/Page';
import Section from '../../components/Section/Section';
import Cover from '../../components/Cover';
import Title from '../../components/Title/Title';
import PostGrid from '../../components/PostGrid/PostGrid';
import Post from '../../components/Post/Post';

function BlogPage() {
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
          {/* {showLoadButton && (
            <div className={{ display: 'flex', justifyContent: 'center' }}>
              <Button disabled={loading} onClick={getMorePosts}>
                Load More Posts
              </Button>
            </div>
          )} */}
        </Section>
      </div>
    </Page>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(groq`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc)
  `);

  return {
    props: {
      posts,
    },
  };
}

export default BlogPage;
