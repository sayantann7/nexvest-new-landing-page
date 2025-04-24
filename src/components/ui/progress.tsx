import * as React from "react";
import { cn } from "../../lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  max?: number;
  indicatorColor?: string;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, indicatorColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative h-2 w-full overflow-hidden rounded-full", className)}
        {...props}
      >
        <div
          className={cn("h-full w-full flex-1 transition-all", indicatorColor || "bg-primary")}
          style={{ width: `${(value / max) * 100}%` }}
        />
      </div>
    );
  }
);

Progress.displayName = "Progress";

export { Progress };