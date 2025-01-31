import React from "react";

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  min: number;
  max: number;
  step: number;
}

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, min, max, step, ...props }, ref) => {
    return (
      <input
        type="range"
        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ${className}`}
        min={min}
        max={max}
        step={step}
        ref={ref}
        {...props}
      />
    );
  }
);

Slider.displayName = "Slider";
