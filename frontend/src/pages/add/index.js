import Form from '../../components/Common/Form'
import Back from '../../components/Common/Back'
export default function CountryAdd() {
  return (
    <div className="bg-white p-4 flex flex-col justify-between border border-1 border-gray-200 shadow-sm">
      <div className="flex items-end">
        <Back />
        <h2 className="font-bold">Add New Country</h2>
      </div>
      <div className="my-5 pl-8">
        <Form label="Add" />
      </div>
    </div>
  )
}
