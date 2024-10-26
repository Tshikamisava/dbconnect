import React, { createContext, useContext, useState, forwardRef, useId } from 'react';
import { SelectProvider } from './SelectContext';
// Re-include the previous components
export const Button = ({
    children,
    variant = "default",
    size = "default",
    className = "",
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    };

    const sizes = {
        default: "h-10 px-4 py-2",
        lg: "h-11 px-8",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

// Card Components
export const Card = ({ className = "", children, ...props }) => {
    return (
        <div
            className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export const CardHeader = ({ className = "", children, ...props }) => {
    return (
        <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
            {children}
        </div>
    );
};

export const CardTitle = ({ className = "", children, ...props }) => {
    return (
        <h3 className={`text-2xl font-semibold leading-none tracking-tight ${className}`} {...props}>
            {children}
        </h3>
    );
};

export const CardDescription = ({ className = "", children, ...props }) => {
    return (
        <p className={`text-sm text-muted-foreground ${className}`} {...props}>
            {children}
        </p>
    );
};

export const CardContent = ({ className = "", children, ...props }) => {
    return (
        <div className={`p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    );
};

export const CardFooter = ({ className = "", children, ...props }) => {
    return (
        <div className={`flex items-center p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    );
};

// Form Components
const FormContext = createContext({});

export const Form = ({ onSubmit, className = "", children, ...props }) => {
    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit?.(e);
            }}
            className={className}
            {...props}
        >
            {children}
        </form>
    );
};

export const FormField = ({ name, children }) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    return (
        <FormContext.Provider value={{ name, value, setValue, error, setError }}>
            {children}
        </FormContext.Provider>
    );
};

export const FormItem = ({ className = "", children, ...props }) => {
    return (
        <div className={`space-y-2 ${className}`} {...props}>
            {children}
        </div>
    );
};


export const FormLabel = ({ className = "", children, ...props }) => {
    return (
        <Label className={className} {...props}>
            {children}
        </Label>
    );
};

export const FormControl = forwardRef(({ className = "", children, ...props }, ref) => {
    // Check if children is a valid element that can be cloned
    if (!React.isValidElement(children)) {
        return null;
    }

    // Merge the provided ref with any existing ref on the child
    const childRef = children.ref;
    const combinedRef = (node) => {
        if (typeof childRef === 'function') childRef(node);
        if (ref) ref(node);
    };

    return (
        <div className={`flex w-full items-center ${className}`}>
            {React.cloneElement(children, {
                ...children.props,
                ...props,
                ref: combinedRef,
            })}
        </div>
    );
});

FormControl.displayName = "FormControl";

export const FormDescription = ({ className = "", children, ...props }) => {
    return (
        <p className={`text-sm text-muted-foreground ${className}`} {...props}>
            {children}
        </p>
    );
};

export const FormMessage = ({ className = "", children, ...props }) => {
    const { error } = useContext(FormContext);
    if (!error && !children) return null;

    return (
        <p className={`text-sm font-medium text-destructive ${className}`} {...props}>
            {error || children}
        </p>
    );
};

// Input Components
export const Input = forwardRef(({ className = "", type = "text", ...props }, ref) => {
    return (
        <input
            type={type}
            className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            ref={ref}
            {...props}
        />
    );
});
Input.displayName = "Input";

export const Label = forwardRef(({ className = "", ...props }, ref) => {
    return (
        <label
            ref={ref}
            className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
            {...props}
        />
    );
});
Label.displayName = "Label";

// Select Components
const SelectContext = createContext({});

export const Select = ({ children, onValueChange, defaultValue }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState(defaultValue);

    return (
        <SelectContext.Provider value={{ isOpen, setIsOpen, value, setValue, onValueChange }}>
            {children}
        </SelectContext.Provider>
    );
};

export const SelectTrigger = ({ className = "", children, ...props }) => {
    const { setIsOpen, value } = useContext(SelectContext);

    return (
        <button
            type="button"
            onClick={() => setIsOpen(prev => !prev)}
            className={`flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export const SelectValue = ({ placeholder = "Select an option" }) => {
    const { value } = useContext(SelectContext);
    return <span>{value || placeholder}</span>;
};

export const SelectContent = ({ className = "", children, ...props }) => {
    const { isOpen } = useContext(SelectContext);

    if (!isOpen) return null;

    return (
        <div
            className={`relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80 ${className}`}
            {...props}
        >
            <div className="p-1">{children}</div>
        </div>
    );
};

export const SelectItem = ({ className = "", children, value, ...props }) => {
    const { setValue, setIsOpen, onValueChange } = useContext(SelectContext);

    return (
        <button
            type="button"
            className={`relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
            onClick={() => {
                setValue(value);
                setIsOpen(false);
                onValueChange?.(value);
            }}
            {...props}
        >
            {children}
        </button>
    );
};

// Slider Component

export const Slider = ({
    min = 0,
    max = 100,
    step = 1,
    value = [50, 50],
    onChange,
    className = "",
    ...props
}) => {
    const handleChange = (e, index) => {
        const newValue = Number(e.target.value);
        const updatedValues = [...value];
        updatedValues[index] = newValue;
        onChange(updatedValues);
    };

    return (
        <div className={`relative w-full ${className}`}>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value[0]}
                onChange={(e) => handleChange(e, 0)}
                className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                {...props}
            />
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value[1]}
                onChange={(e) => handleChange(e, 1)}
                className="absolute w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{ zIndex: 1 }}
            />
            {/* <div className="flex justify-between">
                <span>{value[0]}%</span>
                <span>{value[1]}%</span>
            </div> */}
        </div>
    );
};
// Switch Component
export const Switch = ({ checked = false, onCheckedChange, className = "", ...props }) => {
    return (
        <button
            role="switch"
            aria-checked={checked}
            onClick={() => onCheckedChange?.(!checked)}
            className={`peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 ${checked ? 'bg-primary' : 'bg-input'
                } ${className}`}
            {...props}
        >
            <span
                className={`pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform ${checked ? 'translate-x-5' : 'translate-x-0'
                    }`}
            />
        </button>
    );
};

// Toast Component (Basic Implementation)
export const toast = {
    success: (message) => {
        // Implementation would depend on your needs
        console.log('Success:', message);
    },
    error: (message) => {
        console.log('Error:', message);
    },
    warning: (message) => {
        console.log('Warning:', message);
    },
    info: (message) => {
        console.log('Info:', message);
    },
};

// Link Component (from previous implementation)
export const Link = ({ className = "", href = "#", children, ...props }) => {
    return (
        <a
            href={href}
            className={`text-foreground hover:text-foreground/80 ${className}`}
            {...props}
        >
            {children}
        </a>
    );
};

