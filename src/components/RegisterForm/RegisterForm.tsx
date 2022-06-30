import { ChangeEvent, useEffect, useState } from "react";
import FormStyled from "./FormStyled";
import "@fontsource/urbanist";

import { IRegisterForm } from "../../types/types";
import registerThunk from "../../redux/thunks/registerThunk";
import { useAppDispatch } from "../../redux/store/hooks";
import { useNavigate } from "react-router-dom";

const RegisterForm = (): JSX.Element => {
  const emptyFormValues: IRegisterForm = {
    username: "",
    password: "",
    name: "",
    profilePicture: "",
  };
  const [formData, setFormData] = useState<IRegisterForm>(emptyFormValues);
  const [submitButtonDisabled, setSubmitButtonDisabled] =
    useState<boolean>(true);

  const changeData = (event: ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.type === "file"
          ? event.target.files?.[0]
          : event.target.value,
    });
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const registerSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const newFormData = new FormData();

    newFormData.append("username", formData.username);
    newFormData.append("password", formData.password);
    newFormData.append("name", formData.name);
    newFormData.append("profilePicture", formData.profilePicture);

    const message = await dispatch(registerThunk(newFormData));

    if (message) {
      return;
    }

    setTimeout(() => navigate("/login"), 1800);
  };

  const submitEnabled =
    formData.username.length < 20 &&
    formData.password.length < 20 &&
    formData.name.length < 20 &&
    formData.username.length > 0 &&
    formData.password.length > 3 &&
    formData.name.length > 0;

  useEffect(() => {
    submitEnabled
      ? setSubmitButtonDisabled(false)
      : setSubmitButtonDisabled(true);
  }, [submitEnabled]);

  return (
    <FormStyled>
      <form className="register-form" autoComplete="off" noValidate>
        <div className="inputs-container">
          <label htmlFor="username">
            Nombre de usuario
            <input
              placeholder="máx. 20 caracteres"
              id="username"
              value={formData.username}
              maxLength={20}
              onChange={changeData}
            />
          </label>
          <label htmlFor="password">
            Contraseña
            <input
              placeholder="4 a 20 caracteres"
              id="password"
              type="password"
              value={formData.password}
              maxLength={20}
              onChange={changeData}
            />
          </label>
          <label htmlFor="name">
            Nombre
            <input
              placeholder="máx. 20 caracteres"
              id="name"
              value={formData.name}
              maxLength={20}
              onChange={changeData}
            />
          </label>
          <label htmlFor="profilePicture">
            Imagen de perfil
            <input
              className="picture-selector"
              id="profilePicture"
              type="file"
              accept="image/*"
              onChange={changeData}
            />
          </label>
        </div>
        <button
          className="submit-button"
          type="submit"
          onClick={registerSubmit}
          disabled={submitButtonDisabled}
        >
          Crear cuenta
        </button>
        <p
          className={
            "w-56  text-red-600 text-sm mb-6 " +
            (!submitButtonDisabled ? "invisible" : "")
          }
        >
          Completa el formulario según se indica para poder crear la cuenta
        </p>
      </form>
    </FormStyled>
  );
};

export default RegisterForm;
