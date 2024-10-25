import React from 'react';

// Button Component
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

export const CardContent = ({ className = "", children, ...props }) => {
    return (
        <div className={`p-6 pt-0 ${className}`} {...props}>
            {children}
        </div>
    );
};

// Link Component (Note: This is a styled anchor, not a router Link)
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

export default {
    Button,
    Card,
    CardContent,
    Link
};