type Props = {
  children: string
  // Com o children criamos um componente que aceita coisas dentro dele
}

const Title = (props: Props) => {
  return <span>{props.children}</span>
}

export default Title
