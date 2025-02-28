import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground ",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      colour:{
        emerald: `bg-emerald-100 text-emerald-800 hover:bg-emerald-800 hover:text-emerald-100`,
        red: `bg-red-100 text-red-800 hover:bg-red-800 hover:text-red-100`,
        sky: `bg-sky-100 text-sky-800 hover:bg-sky-800 hover:text-sky-100`,
        cyan: `bg-cyan-100 text-cyan-800 hover:bg-cyan-800 hover:text-cyan-100`,
        gray: `bg-gray-100 text-gray-800 hover:bg-gray-800 hover:text-gray-100`,
        lime: `bg-lime-100 text-lime-700 hover:bg-lime-800 hover:text-lime-100`,
        darklime: `bg-lime-800 text-lime-100 hover:bg-lime-800 hover:text-lime-100`,
        gr_lime_emerald_lite: `bg-lime-100 text-lime-700 hover:bg-gradient-to-bl from-lime-400 to-emerald-600 hover:text-white`,
        gr_lime_emerald: `bg-gradient-to-bl from-lime-400 to-emerald-600 text-white hover:bg-lime-800 hover:text-lime-100`,
        darksky: `bg-sky-800 text-gray-100 hover:bg-sky-800 hover:text-sky-100`,
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant,colour, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant,colour, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
