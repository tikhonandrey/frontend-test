import * as React from "react";

import Button from "../../components/Button";
import Input from "../../components/Input";

import { render } from "react-dom";

import { useLoginForm } from "./form.hooks";

export interface LoginFormProps {
  login: Function;
}

export const LoginForm: React.FunctionComponent<LoginFormProps> = ({
  login
}) => {
  const { values, handleInputChange, handleSubmit } = useLoginForm(
    { token: null },
    login
  );
  return (
    <div className="module-login-form">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-form__header">"Login" with a Yelp API Key</h2>
        <p>
          Make sure you are enrolled in the{" "}
          <a
            target="__blank"
            href="https://www.yelp.com/developers/v3/manage_app"
          >
            Developer Beta
          </a>{" "}
          to access GraphQL.
        </p>
        <div>
          <Input
            type="text"
            name="token"
            label="API Key"
            id="input-token"
            block
            className="login-form__input input input--text"
            onChange={handleInputChange}
          />
          <Button type="submit" block className="login-form__submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
