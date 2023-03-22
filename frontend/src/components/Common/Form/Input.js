export default function Input({ value, onChange, type, placeholder }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="border border-gray-300 pl-3 py-2 font-light focus:border-none focus:outline-1 focus:outline-blue-400 text-gray-500 rounded-md grow"
      type={type}
      placeholder={placeholder}
    />
  )
}
