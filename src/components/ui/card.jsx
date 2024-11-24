// File: src/components/ui/card.jsx
export function Card({ className, ...props }) {
    return (
      <div
        className={`rounded-lg border bg-white text-gray-800 shadow-md ${className}`}
        {...props}
      />
    );
  }
  
  export function CardHeader({ className, ...props }) {
    return <div className={`flex flex-col space-y-2 p-6 ${className}`} {...props} />;
  }
  
  export function CardTitle({ className, ...props }) {
    return (
      <h3
        className={`text-2xl font-semibold leading-tight tracking-tight ${className}`}
        {...props}
      />
    );
  }
  
  export function CardContent({ className, ...props }) {
    return <div className={`p-6 pt-0 ${className}`} {...props} />;
  }
  