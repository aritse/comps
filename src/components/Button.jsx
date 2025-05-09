import classNames from "classnames";
import { twMerge } from "tailwind-merge";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  let classes = twMerge(
    classNames(
      "flex item-center text-white px-3 py-1.5 border",
      {
        "bg-blue-500 border-blue-500": primary,
        "bg-gray-500 border-gray-500": secondary,
        "bg-green-500 border-green-500": success,
        "bg-yellow-500 border-yellow-500": warning,
        "bg-red-500 border-red-500": danger,
        "text-blue-500": outline && primary,
        "text-gray-500": outline && secondary,
        "text-green-500": outline && success,
        "text-yellow-500": outline && warning,
        "text-red-500": outline && danger,
        "rounded-md": rounded,
        "bg-white": outline,
      },
      rest.className
    )
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: (props) => {
    const variants = ["primary", "secondary", "success", "warning", "danger"];
    const count = variants.filter((variant) => props[variant]).length;

    if (count > 1) {
      return new Error(
        `Only one variant (primary, secondary, success, warning, danger) can be set.`
      );
    }
  },
};

export default Button;
