import React, {
  ReactNode,
  useState,
  useEffect,
  createContext,
  useContext,
} from "react";
import { repeatedElement } from "@plasmicapp/loader-nextjs";

export interface UserListProps {
  children?: ReactNode;
  className?: string;
  verbose?: boolean;
}

export interface QueryResult {
    posts: Postdata[]
}

export interface Postdata {
  id: string;
  title: string;
  content: string;
}

export const allPostsQuery = `
query allPosts {
  posts {
    title
    id
    content
  }
}`;

const PostItemContext = createContext<Postdata | undefined>(undefined);

export function PostItemField({
  className,
  field,
}: {
  className?: string;
  field?: keyof Postdata;
}) {
  const item = useContext(PostItemContext);
  if (!item) {
    return <div className={className}>(Must display in a CMS item)</div>;
  }
  if (!field) {
    return <div className={className}>(Must specify a field)</div>;
  } else {
    return <div className={className}>{item[field]}</div>;
  }
}

export function PostList({ children, className, verbose }: UserListProps) {
  const [data, setData] = useState<QueryResult[] | undefined>(undefined);
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
          query: allPostsQuery,
        }),
        mode: "cors",
        credentials: "omit",
      });
      const data = await response.json();
      setData(data.data);
    })();
  }, []);

  return (
    
    <div className={className} style={{ padding: "20px" }}>
      {data?.posts.map((item, i) => (
        <PostItemContext.Provider key={item.id} value={{...item}}>
          {repeatedElement(i === 0, children)}
        </PostItemContext.Provider>
      ))}
    </div>
  );
}
