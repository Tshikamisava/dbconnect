import React, { createContext, useState } from 'react';

const SelectContext = createContext();

export const SelectProvider = ({ children, defaultValue, options }) => {
    const [selectedValue, setSelectedValue] = useState(defaultValue);
    const [isOpen, setIsOpen] = useState(false);

    const onSelect = (value) => {
        setSelectedValue(value);
        setIsOpen(false);
    };

    return (
        <SelectContext.Provider value={{ selectedValue, isOpen, setIsOpen, onSelect }}>
            {children}
        </SelectContext.Provider>
    );
};
