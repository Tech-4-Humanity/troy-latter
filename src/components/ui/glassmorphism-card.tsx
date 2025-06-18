
import * as React from "react"
import { cn } from "@/lib/utils"

const GlassmorphismCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition-all duration-300",
      className
    )}
    {...props}
  />
))
GlassmorphismCard.displayName = "GlassmorphismCard"

const GlassmorphismCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
GlassmorphismCardContent.displayName = "GlassmorphismCardContent"

export { GlassmorphismCard, GlassmorphismCardContent }
