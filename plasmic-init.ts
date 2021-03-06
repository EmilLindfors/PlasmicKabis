import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { PostList, PostItemField } from "./components/user-list";
import { SinglePost, PostTitle, PostContent, PostImage } from "./components/post";
import PostBody from "./components/post-body";
import PostHeader from "./components/post-header";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "mTFhLQAdTx9rG8foqvTzPe",
      token:
        "8FnakDw3lj7BizLVRjceIfyJk0ldK5H1qQt9m6nRHsUv4qo8vmRBSgZVTjnWz8osrX8bKEXc7Fk5oCURUp4g",
    },
  ],

  // By default Plasmic will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: true,
});

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// PLASMIC.registerComponent(...);
PLASMIC.registerComponent(PostList, {
  name: "PostList",
  props: {
    verbose: "boolean",
    children: "slot",
  },
});

PLASMIC.registerComponent(PostItemField, {
  name: "PostItemField",
  props: {
    field: "string",
  },
});

PLASMIC.registerComponent(SinglePost, {
  name: "singlePost",
  displayName: "Single Post",
  props: {
    verbose: "boolean",
    children: "slot",
    id: "string",
    title: "string",
    content: "string"
  },
});


PLASMIC.registerComponent(PostTitle, {
  name: "PostTitle",
  displayName: "Post Title",
  props: {},
});


PLASMIC.registerComponent(PostContent, {
  name: "PostContent",
  displayName: "Post Content",
  props: {},
});

PLASMIC.registerComponent(PostBody, {
  name: "PostBody",
  props: {
    content: "slot"
  },
});

PLASMIC.registerComponent(PostImage, {
  name: "PostImage",
  props: {
    image: "slot",
    title: "slot"
  },
});

PLASMIC.registerComponent(PostHeader, {
  name: "PostHeader",
  props: {
    title: "slot",
    date: "slot"
  },
});