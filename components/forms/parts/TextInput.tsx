"use client";

type TextInputProps = {
  id: string;
  name: string;
  value: string;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
};

const TextInput = ({
  id,
  name,
  value,
  placeholder,
  disabled,
  label,
  required,
  onChange,
  onBlur,
  error,
}: TextInputProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className="flex items-center gap-4">
      <p>{label}</p>
      <input
        id={id}
        name={name}
        type="text"
        value=""
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        onChange={handleChange}
        onBlur={onBlur}
        className={`border-2 rounded-md p-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default TextInput;
