export default function PostBody(props) {
    console.log("content",props)
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={props.className}
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </div>
  )
}