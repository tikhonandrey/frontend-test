import * as React from "react";

export const useLoginForm = (
  initialValues: { [name: string]: any },
  callback: Function
) => {
  const [values, setValue] = React.useState(initialValues);

  const handleSubmit = (e: React.FormEvent) => {
    if (e) {
      e.preventDefault();
    }
    callback(values);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setValue((values: {}) => ({ ...values, [e.target.name]: e.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    values
  };
};
