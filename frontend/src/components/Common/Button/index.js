export default function Button({ type = 'button', text, handleClick = null }) {
  return (
    <button
      className="mt-2 px-5 py-1 bg-blue-400 text-white font-light text-md hover:bg-blue-500 w-[100%]"
      onClick={handleClick}
      type={type}
    >
      {text}
    </button>
  )
}
