import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    console.log(data);

    await new Promise((r) => setTimeout(r, 2000));

    reset();
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
          })}
        />

        <p>{errors.name?.message}</p>
      </div>

      <div>
        <input
          placeholder="Email"
          {...register("email", {
            required: "Email required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Invalid email",
            },
          })}
        />

        <p>{errors.email?.message}</p>
      </div>

      <button disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default ReactHookForm;
