import * as React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { PlasmicComponent } from "@plasmicapp/loader-nextjs";
import { GetStaticPaths, GetStaticProps } from "next";
import { allPostsQuery } from "../../components/user-list";
import { PLASMIC } from "../../plasmic-init";
import markdownToHtml from "../../lib/markdownToHtml";
import {
  ComponentRenderData,
  PlasmicRootProvider,
} from "@plasmicapp/loader-react";
import { PostData } from "../../components/user-list";

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


interface PostProps {
    id: string;
    title: string;
    content: string;
    date: string;
    image: string;
}

export default function Post({ post, plasmicData }: {post: PostProps, plasmicData: any}) {
  const router = useRouter();
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="Post" componentProps={{singlePost: {id: post.id, title: post.title, content: post.content ? post.content : "default content", date: post.date, image: post.image}}} />
    </PlasmicRootProvider>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
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
        variables: { id: params.id },
      }),
      mode: "cors",
      credentials: "omit",
    });
    const plasmicData = await PLASMIC.maybeFetchComponentData("/post");
    const { data } = await response.json();
    const content = await markdownToHtml(data.posts_by_pk.content || '')

    return {
      // non-Plasmic catch-all
      props: { post: { id: data.posts_by_pk.id,  title: data.posts_by_pk.title, content: content, image: data.posts_by_pk.cover_img, date: data.posts_by_pk.created_at }, plasmicData },
    };
  } else {
    return { props: {} };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
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
  const { data } = await response.json();

  return {
    paths: data.posts.map((post: PostData) => ({ params: { id: post.id } })),
    // Turn on "fallback: 'blocking'" if you would like new paths created
    // in Plasmic to be automatically available
    fallback: false,
  };
};
