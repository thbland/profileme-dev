import React, { useContext, forwardRef } from "react";
import { StateContext } from "../pages/_app";

export const FormInput = forwardRef((props, ref) => {
  const { placeholder, action, type, section } = props;
  const { state, dispatch } = useContext(StateContext);
  return (
    <input
      type="text"
      className="input-field"
      placeholder={placeholder}
      ref={ref}
      onChange={() =>
        dispatch({
          type: action,
          payload: { title: type, value: ref.current.value },
        })
      }
    />
  );
});
