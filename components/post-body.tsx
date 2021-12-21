
type PostBody = {
  content: any
  className?: string
}

export default function PostBody(props: PostBody) {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={props.className}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  )
}