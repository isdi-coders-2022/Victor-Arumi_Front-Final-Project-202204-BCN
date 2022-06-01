import { ChangeEvent, useState } from "react";
import FormStyled from "./FormStyled";
import "@fontsource/urbanist";

import { IRegisterForm } from "../../types/types";
import registerThunk from "../../redux/thunks/registerThunk";
import { useAppDispatch } from "../../redux/store/hooks";

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

  const dispatch = useAppDispatch();

  const registerSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    dispatch(registerThunk(formData));
    setFormData(initialEmptyFormValues);
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
        <button
          className="submit-button"
          type="submit"
          onClick={registerSubmit}
        >
          Crear cuenta
        </button>
      </form>
    </FormStyled>
  );
};

export default RegisterForm;
