
type PostHeader = {
  title: any
  date: any
  className?: string
}

export default function PostHeader(props: PostHeader) {
  return (
    <>
      <div     className={props.className}>{props.title}</div>
      <div     className={props.className} >{props.date}</div>
    </>
  )
}