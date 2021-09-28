import { useState } from "react"
import Input from "./Input"

const PacientList = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <div className="w-full">
      <p className="text-lg text-gray-700">
        In here, you can see all the pacients:
      </p>

      <Input
        name="pacient_search"
        placeholder="You can search for name and nationality here..."
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        icon="search"
      />
    </div>
  )
}

export default PacientList
