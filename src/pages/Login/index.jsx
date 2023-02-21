import axios from "axios";
import React, { useContext, useReducer } from "react";
import { Link } from "react-router-dom";
import { ACTIONS } from "../../action";
import { API } from "../../Api";
import Error from "../../components/Error";
import Input from "../../components/LabelInput";
import Loading from "../../components/Loading";
import Button from "../../components/Button";
import SignParagraph from "../../components/SignParagraph";
import { AuthContext } from "../../context";
import { Container } from "../../components/Container";
import FormCard from "../../components/FormCard";
import Title from "../../components/title";
import { SchemaLogin } from "../../validation/validationSchema.js";
import { LogInStyled } from "./LoginStyled.js";
import { PATHS } from "../../routes";
const initialState = {
  email: "",
  password: "",
  error: {},
  isLoading: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.HANDLE_INPUT_CHANGE:
      return {
        ...state,
        [action.id]: action.value,
      };
    case ACTIONS.LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        error: action.errors,
      };
    default:
      return state;
  }
};

const Login = () => {
  const [formState, dispatch] = useReducer(reducer, initialState);
  const [test, setIsAuthenticated] = useContext(AuthContext);
  const handleInputChange = (event) => {
    const { id, value } = event.target;
    dispatch({ type: ACTIONS.HANDLE_INPUT_CHANGE, id, value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.LOADING, isLoading: true });
    try {
      await SchemaLogin.validate(
        {
          email: formState.email,
          password: formState.password,
        },
        { abortEarly: false }
      );
      const res = await axios.post(`${API}/users/login`, {
        email: formState.email,
        password: formState.password,
      });
      if (res.data) {
        localStorage.setItem("token", res.data.token);
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (error.isAxiosError) {
        dispatch({
          type: ACTIONS.ERROR,
          errors: { isAxiosError: error.message },
        });
      } else {
        const errors = error.inner
          ? error.inner.reduce((acc, { path, message }) => {
              acc[path] = message;
              return acc;
            }, {})
          : {};
        dispatch({ type: ACTIONS.ERROR, errors });
      }
    } finally {
      dispatch({ type: ACTIONS.LOADING, isLoading: false });
    }
  };
  return (
    <Container>
      {formState.isLoading && <Loading />}
      <LogInStyled>
        <FormCard className="card-form">
          <Title title="Log In" />
          <form onSubmit={handleSubmit}>
            {formState.error?.email && <Error>{formState.error?.email}</Error>}
            <Input
              onChange={handleInputChange}
              id="email"
              type="text"
              placeholder="Enter Email ID"
              label="Email ID"
              value={formState.email}
            />
            <div className="password">
              {formState.error?.password && (
                <Error>{formState.error?.password}</Error>
              )}
              <Input
                onChange={handleInputChange}
                id="password"
                type="password"
                placeholder="Enter password"
                label="Password"
                value={formState.password}
              />
              <Link
                to={PATHS.FORGOT_PASSWORD}
                className="forgot"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Forgotpassword ?
              </Link>
            </div>
            <Button>LOG IN</Button>
            {formState.error?.isAxiosError && (
              <Error>{formState.error?.isAxiosError}</Error>
            )}
          </form>
          <SignParagraph
            p="Don’t have an account ?"
            link="Sign up"
            path="/Signup"
          />
        </FormCard>
      </LogInStyled>
    </Container>
  );
};

export default Login;
