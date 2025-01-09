import React from 'react';

interface ISelectProps {
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    placeholder?: string;
}

const SelectInput: React.FC<ISelectProps> = ({ id, value, onChange, options, placeholder }) => {
    return (
        <div className="relative">
            <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <svg width="14" height="7" viewBox="0 0 14 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.58521 6.57766C7.23581 6.82982 6.76419 6.82982 6.41479 6.57767L0.848983 2.56089C0.0621447 1.99304 0.46384 0.750001 1.43419 0.750001L12.5658 0.75C13.5362 0.75 13.9379 1.99303 13.151 2.56088L7.58521 6.57766Z" fill="#AAAAAA" />
                </svg>
            </span>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className="w-full bg-inputBg p-[18px] rounded-[20px] border-none text-textColor4 outline-none appearance-none"
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInput;
