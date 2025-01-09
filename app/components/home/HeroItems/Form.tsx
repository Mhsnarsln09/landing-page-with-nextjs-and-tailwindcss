import React, { useState } from 'react';
import SelectInput from '../../ui/SelectInput';

interface IFormProps {
    // İsterseniz dışarıdan prop olarak alacağınız şeyleri burada tanımlayabilirsiniz.
}

const Form: React.FC<IFormProps> = () => {
    const [activeTab, setActiveTab] = useState<'sale' | 'rent'>('sale');
    const [location, setLocation] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [rooms, setRooms] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Submit işlemi örneği
        console.log({
            tab: activeTab,
            location,
            propertyType,
            rooms,
        });
    };

    return (
        <div className="w-full h-full">
            {/* Tab butonları */}
            <div className="flex xl:mb-4 px-7 xl:px-10 pt-7 xl:pt-10 border-b border-textColor4">
                <button
                    type="button"
                    className={`flex-1 py-2 text-center text-base font-medium ${activeTab === 'sale'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-textColor3'
                        }`}
                    onClick={() => setActiveTab('sale')}
                >
                    For Sale
                </button>
                <button
                    type="button"
                    className={`flex-1 py-2 text-center ${activeTab === 'rent'
                        ? 'text-primary border-b-2 border-primary'
                        : 'text-textColor3'
                        }`}
                    onClick={() => setActiveTab('rent')}
                >
                    For Rent
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-9 px-7 xl:px-10 pt-7 xl:pt-10 pb-7">
                <div>
                    <input
                        id="location"
                        type="text"
                        placeholder="New York, San Francisco, etc"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-inputBg p-[18px] rounded-[20px] border-none placeholder:text-textColor4 placeholder:text-base placeholder:font-normal outline-none"
                    />
                </div>
                <SelectInput
                    id="propertyType"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    placeholder="Select Property Type"
                    options={[
                        { value: 'apartment', label: 'Apartment' },
                        { value: 'house', label: 'House' },
                        { value: 'condo', label: 'Condo' },
                    ]}
                />
                <SelectInput
                    id="rooms"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)}
                    placeholder="Select Rooms"
                    options={[
                        { value: '1', label: '1+1' },
                        { value: '2', label: '2+1' },
                        { value: '3', label: '3+1' },
                        { value: '4', label: '4+1' },
                    ]}
                />

                <div className="flex items-center space-x-2">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.0256 14C11.7313 14 11.4872 13.7786 11.4872 13.5116V6.34883C11.4872 6.08185 11.7313 5.86046 12.0256 5.86046C12.32 5.86046 12.5641 6.08185 12.5641 6.34883V13.5116C12.5641 13.7786 12.32 14 12.0256 14Z" fill="#3A0CA3" />
                        <path d="M12.0256 4.23256C11.7313 4.23256 11.4872 4.01116 11.4872 3.74419V0.488372C11.4872 0.221395 11.7313 0 12.0256 0C12.32 0 12.5641 0.221395 12.5641 0.488372V3.74419C12.5641 4.01116 12.32 4.23256 12.0256 4.23256Z" fill="#3A0CA3" />
                        <path d="M7.00001 14C6.70565 14 6.46155 13.7786 6.46155 13.5116V10.2558C6.46155 9.98882 6.70565 9.76743 7.00001 9.76743C7.29437 9.76743 7.53847 9.98882 7.53847 10.2558V13.5116C7.53847 13.7786 7.29437 14 7.00001 14Z" fill="#3A0CA3" />
                        <path d="M7.00001 8.13953C6.70565 8.13953 6.46155 7.91814 6.46155 7.65116V0.488372C6.46155 0.221395 6.70565 0 7.00001 0C7.29437 0 7.53847 0.221395 7.53847 0.488372V7.65116C7.53847 7.91814 7.29437 8.13953 7.00001 8.13953Z" fill="#3A0CA3" />
                        <path d="M1.97434 14C1.67999 14 1.43588 13.7786 1.43588 13.5116V6.34883C1.43588 6.08185 1.67999 5.86046 1.97434 5.86046C2.2687 5.86046 2.51281 6.08185 2.51281 6.34883V13.5116C2.51281 13.7786 2.2687 14 1.97434 14Z" fill="#3A0CA3" />
                        <path d="M1.97434 4.23256C1.67999 4.23256 1.43588 4.01116 1.43588 3.74419V0.488372C1.43588 0.221395 1.67999 0 1.97434 0C2.2687 0 2.51281 0.221395 2.51281 0.488372V3.74419C2.51281 4.01116 2.2687 4.23256 1.97434 4.23256Z" fill="#3A0CA3" />
                        <path d="M3.41026 6.8372H0.538462C0.244103 6.8372 0 6.61581 0 6.34883C0 6.08185 0.244103 5.86046 0.538462 5.86046H3.41026C3.70462 5.86046 3.94872 6.08185 3.94872 6.34883C3.94872 6.61581 3.70462 6.8372 3.41026 6.8372Z" fill="#3A0CA3" />
                        <path d="M13.4615 6.8372H10.5897C10.2954 6.8372 10.0513 6.61581 10.0513 6.34883C10.0513 6.08185 10.2954 5.86046 10.5897 5.86046H13.4615C13.7559 5.86046 14 6.08185 14 6.34883C14 6.61581 13.7559 6.8372 13.4615 6.8372Z" fill="#3A0CA3" />
                        <path d="M8.43589 8.13952H5.5641C5.26974 8.13952 5.02563 7.91813 5.02563 7.65115C5.02563 7.38418 5.26974 7.16278 5.5641 7.16278H8.43589C8.73025 7.16278 8.97435 7.38418 8.97435 7.65115C8.97435 7.91813 8.73025 8.13952 8.43589 8.13952Z" fill="#3A0CA3" />
                    </svg>

                    <a href="#" className="text-[13.3px] font-normal text-primary">
                        Advance Search
                    </a>
                </div>
                <button type="submit" className="w-full bg-primary text-white p-2 xl:p-4 rounded-[50px] flex justify-center">
                    <div className='flex items-center space-x-2'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.53582 19.0716C4.27949 19.0716 0 14.7921 0 9.53582C0 4.27949 4.27949 0 9.53582 0C14.7921 0 19.0716 4.27949 19.0716 9.53582C19.0716 14.7921 14.7921 19.0716 9.53582 19.0716ZM9.53582 1.39549C5.04235 1.39549 1.39549 5.05166 1.39549 9.53582C1.39549 14.02 5.04235 17.6761 9.53582 17.6761C14.0293 17.6761 17.6761 14.02 17.6761 9.53582C17.6761 5.05166 14.0293 1.39549 9.53582 1.39549Z" fill="white" />
                        <path d="M19.3046 20.0019C19.1278 20.0019 18.951 19.9367 18.8115 19.7972L16.9508 17.9365C16.6811 17.6667 16.6811 17.2202 16.9508 16.9504C17.2206 16.6806 17.6672 16.6806 17.937 16.9504L19.7976 18.811C20.0674 19.0808 20.0674 19.5274 19.7976 19.7972C19.6581 19.9367 19.4813 20.0019 19.3046 20.0019Z" fill="white" />
                    </svg>
                    <span className='mt-1'> Search</span>
                    </div>
                </button>
            </form>
        </div>
    );
};

export default Form;
