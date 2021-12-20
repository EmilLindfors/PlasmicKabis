import React, {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";

export interface PostProps extends Postdata {
  className?: string;
  verbose?: boolean;
  children?: ReactNode;
}

export interface QueryResult {
  posts: Postdata[];
}

export interface PostQueryResult {
  posts_by_pk: Postdata;
}

export interface Postdata {
  id: string;
  title: string;
  content: string;
  created_at: string;
  cover_img: string;
}

const getPostQuery = `
  query getPost($id: uuid!) {
    posts_by_pk(id: $id) {
      title
      id
      content
      created_at
      cover_img
    }
  }`;

export function singlePost({
  className,
  verbose,
  id,
  title,
  content,
  image,
  date,
  children,
  ...rest
}: PostProps) {
  if (typeof window == "undefined") {
    if (!id) {
      return <div>loading or error</div>;
    } else {
      return (
        <div className={className}>
          <PostContext.Provider
            value={{
              title: title,
              content: content,
              id: id,
              date: date,
              image: image,
            }}
            key={id}
          >
            {children}
          </PostContext.Provider>
        </div>
      );
    }
  } else {
    const [data, setData] = useState<PostQueryResult | undefined>(undefined);
    useEffect(() => {
      (async () => {
        const response = await fetch("https://depurator.duckdns.org/api", {
          headers: {
            "x-hasura-admin-secret": "Limeapelsin1",
            "content-type": "application/json",
          },
          method: "POST",
          referrer: "http://*.plasmic.app/",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: JSON.stringify({
            query: getPostQuery,
            variables: { id: id },
          }),
          mode: "cors",
          credentials: "omit",
        });
        const data = await response.json();
        setData(data.data);
      })();
    }, []);
    if (!data) {
      return <>error</>;
    } else {
      return (
        <div className={className}>
          <PostContext.Provider
            value={{
              title: data.posts_by_pk.title,
              content: data.posts_by_pk.content,
              id: data.posts_by_pk.id,
              date: data.posts_by_pk.created_at,
              image: data.posts_by_pk.cover_img,
            }}
            key={id}
          >
            {children}
          </PostContext.Provider>
        </div>
      );
    }
  }
}

const PostContext = createContext<Postdata | undefined>(undefined);

function useProduct() {
  return useContext(PostContext);
}

export function PostTitle({ className }: { className?: string }) {
  const post = useProduct();
  if (!post) return null;
  return <div className={className}>{post.title}</div>;
}

export function PostContent({ className }: { className?: string }) {
  const post = useProduct();
  if (!post) return null;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: post.content }}
    />
  );
}

export function PostImage({ className }: { className?: string }) {
  const post = useProduct();
  if (!post) return null;

  return <img src={post.image} alt={post.title} className={className} />;
}
