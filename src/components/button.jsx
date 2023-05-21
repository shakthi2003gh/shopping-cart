import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ label, icon, ...rest }) {
  return (
    <button {...rest}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
}
