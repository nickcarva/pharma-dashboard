import { ReactEventHandler } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconProp } from "@fortawesome/fontawesome-svg-core"

type Props = {
  name: string
  placeholder?: string
  value: string | number
  onChange?: (e: any) => void
  icon?: IconProp
}

const Input = ({
  name,
  placeholder,
  value,
  onChange,
  icon
}: Props) => {
  return (
    <div className="relative w-full h-14 my-6 flex justify-between">
      <input
        type="text"
        name={name}
        id={name}
        placeholder={placeholder ? placeholder : undefined}
        value={value}
        onChange={onChange}
        className={`
          min-w-full h-full box-border p-4 rounded-md
          border-2 border-gray-400 hover:border-gray-700
          focus:border-gray-700 transition-colors
          placeholder-gray-200::placeholder text-gray-600
        `}
      />

      {icon !== undefined && (
        <div className="absolute right-0 h-full px-8 flex items-center">
          <FontAwesomeIcon icon={icon} />
        </div>
      )}
    </div>
  )
}

export default Input
