import { ChangeEvent, useState } from "react";
import FormStyled from "./FormStyled";
import "@fontsource/urbanist";

interface IRegisterForm {
  username: string;
  password: string;
}

const RegisterForm = (): JSX.Element => {
  const initialEmptyFormValues: IRegisterForm = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState<IRegisterForm>(
    initialEmptyFormValues
  );

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <FormStyled>
      <form className="register-form" autoComplete="off" noValidate>
        <div className="inputs-container">
          <label htmlFor="username">
            <input
              id="username"
              value={formData.username}
              onChange={changeData}
              placeholder="username"
            />
          </label>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={changeData}
              placeholder="password"
            />
          </label>
        </div>
        <button className="submit-button" type="submit">
          Crear cuenta
        </button>
      </form>
    </FormStyled>
  );
};

export default RegisterForm;
