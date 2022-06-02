import { ChangeEvent, useState } from "react";
import FormStyled from "./FormStyled";
import "@fontsource/urbanist";

import { IRegisterForm } from "../../types/types";
import registerThunk from "../../redux/thunks/registerThunk";
import { useAppDispatch } from "../../redux/store/hooks";

const RegisterForm = (): JSX.Element => {
  const emptyFormValues: IRegisterForm = {
    username: "",
    password: "",
    name: "",
    profilePicture: "",
  };

  const [formData, setFormData] = useState<IRegisterForm>(emptyFormValues);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0] || ""
          : event.target.value,
    });
  };

  const dispatch = useAppDispatch();

  const registerSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newFormData = new FormData();

    newFormData.append("username", formData.username);
    newFormData.append("password", formData.password);
    newFormData.append("name", formData.name);
    newFormData.append("profilePicture", formData.profilePicture);

    dispatch(registerThunk(newFormData));
    setFormData(emptyFormValues);
  };

  return (
    <FormStyled>
      <form className="register-form" autoComplete="off" noValidate>
        <div className="inputs-container">
          <label htmlFor="username">
            Nombre de usuario
            <input
              id="username"
              value={formData.username}
              onChange={changeData}
            />
          </label>
          <label htmlFor="password">
            Contraseña
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={changeData}
            />
          </label>
          <label htmlFor="name">
            Nombre
            <input id="name" value={formData.name} onChange={changeData} />
          </label>
          <label htmlFor="profilePicture">
            Imagen de perfil
            <input id="profilePicture" type="file" onChange={changeData} />
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
