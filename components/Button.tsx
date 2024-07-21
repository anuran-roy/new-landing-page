"use client";
import { motion } from "framer-motion";
interface ButtonProps {
  variant:
    | "primary"
    | "secondary"
    | "secondaryWithBg"
    | "secondaryNoHover"
    | "primaryHoverIcon"
    | "magicHoverIcon";
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const buttonStyles: Record<ButtonProps["variant"], string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  secondaryWithBg: "btn-secondary-with-bg",
  secondaryNoHover: "btn-secondary-no-hover",
  primaryHoverIcon: "hover:bg-blue-400",
  magicHoverIcon: "hover:bg-red-400",
};

const Button: React.FC<ButtonProps> = ({
  variant,
  icon,
  children,
  onClick,
  className,
}) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <button
        className={`
        ${className}
        ${buttonStyles[variant]}
        py-3 px-7 shadow-sm flex justify-center items-center
      `}
        onClick={onClick}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </button>
    </motion.div>
  );
};

export default Button;
