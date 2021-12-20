

export default function PostHeader(props) {
    console.log("header",props)
  return (
    <>
      <div     className={props.className}>{props.title}</div>
      <div     className={props.className} >{props.date}</div>
    </>
  )
}