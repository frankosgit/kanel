import Link from 'next/link'
import React from 'react'
import {cva, VariantProps} from "class-variance-authority"

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode,
    href: string,
    className: string
  }

const buttonClasses = cva("rounded-full inline-flex items-center", {
    variants: {
        variant: {
            primary: "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow]",
            secondary: "text-offWhite, bg-white bg-opacity-10 border border-border-white backdrop-filter-[12px] pl-6 hover:bg-opacity-20 hover:text-shadow hover:shadow-primary transition-colors ease-in",
            tertiary: "",
        },
        size: {
            small: "text-xs px-3 h-7",
            medium:"text-sm px-4 h-8",
            large: "text-md px-6 h-12"
        },
        defaultVariant: {
            variant: "primary",
            size: "medium"
        }
        },
    }
)

const Button = ({children, href, variant, size, className}: ButtonProps) => {
  return (
    <Link className={buttonClasses( {variant, size, className})} href={href}>{children}</Link> 
  )
}

export default Button