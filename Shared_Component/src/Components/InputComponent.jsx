/* eslint-disable react/prop-types */

const InputComponent = ({
  type,
  name,
  value,
  checked,
  onChange,
  options,
  className,
  label, // New prop for the label
}) => {
  if (type === "textarea") {
    return (
      <div className={`${className}`}>
        {label && (
          <label className="block mb-1 text-blue-400 font-semibold">
            {label}
          </label>
        )}
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 border rounded w-full"
        />
      </div>
    );
  } else if (type === "checkbox") {
    return (
      <div className={`${className} flex items-center`}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className="mr-2"
        />
        <label className="font-semibold text-yellow-300">{label}</label>{" "}
      </div>
    );
  } else if (type === "radio") {
    return (
      <div className={`${className}`}>
        {label && (
          <span className="block mb-1 text-blue-400 font-semibold">
            {label}
          </span>
        )}
        {options.map((option) => (
          <label
            key={option.value}
            className="flex text-gray-300 cursor-pointer items-center mb-1"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={onChange}
              className="mr-2"
            />
            {option.label}
          </label>
        ))}
      </div>
    );
  } else {
    return (
      <div className={`${className}`}>
        {label && (
          <label className="block mb-1 text-blue-400 font-semibold">
            {label}
          </label>
        )}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="p-2 border rounded w-full"
        />
      </div>
    );
  }
};

export default InputComponent;
