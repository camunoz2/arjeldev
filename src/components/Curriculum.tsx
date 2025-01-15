interface Props {
  link: string
  text: string
}

export function Curriculum({ link, text }: Props) {
  return (
    <a
      href={link}
      download={true}
      className="rounded-lg bg-white flex items-center justify-center font-bold cursor-pointer hover:bg-purple-600 hover:text-purple-400 hover:border hover:border-purple-800 transition-all hover:shadow-xl hover:shadow-purple-400 col-span-3 lg:col-span-1 py-6 lg:py-0"
    >
      {text}
    </a>
  );
}
