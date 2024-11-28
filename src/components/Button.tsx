type ButtonProps = { 
  id?: string,
  title: string,
  leftIcon?: React.ReactNode,
  rightIcon?: React.ReactNode,
  containerClass: string
}

export default function Button({ id, title, leftIcon, rightIcon, containerClass }: ButtonProps) {
  return (
    <div id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className="relative inline-flex overlow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </div>
  )
}