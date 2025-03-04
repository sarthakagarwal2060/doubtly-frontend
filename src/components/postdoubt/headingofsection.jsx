export default function HeadingOfSection({name,placeholder,className,ref}) {
  return (
    <>
    <h2>{name}</h2>
    <textarea type="text" placeholder={placeholder} 
    className={className} ref={ref} />
    </>
  )
}
