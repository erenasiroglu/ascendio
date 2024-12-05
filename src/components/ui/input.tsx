import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <div className="relative">
    <input
      ref={ref}
      className={cn(
        "w-full px-4 py-3 bg-white border border-gray-300 rounded-full",
        "transition-all duration-200 ease-in-out",
        "placeholder:text-gray-400 text-gray-900",
        "focus:outline-none focus:ring-2 focus:ring-[#262160] focus:border-[#262160]",
        "hover:border-gray-400",
        className
      )}
      {...props}
    />
  </div>
));
Input.displayName = "Input";

export { Input };
