import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    clearErrors,
    getValues,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const handleLogin = async () => {
    const data = getValues();
    clearErrors("root");
    try {
      const response = await login(data);
      navigate("/", {
        replace: true,
      });
    } catch (error) {
      setError("root", {
        type: "server",
        message: error.message,
      });
    }
  };

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      <div style={{ flexBasis: "100%" }}>Login to portal</div>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <input
              placeholder="Email"
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            <p>{errors.email?.message}</p>
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                validate: (value) => {
                  return value.length >= 8 || "Minimum 8 characters";
                },
              })}
            />
            <p>{errors.password?.message}</p>
          </div>
          {errors.root && <p style={{ color: "red" }}>{errors.root.message}</p>}
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
