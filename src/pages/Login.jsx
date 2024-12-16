import { useSignup } from "../hooks/useSignup";

function Login() {
  const { signupWithGoogle } = useSignup();

  return (
    <div className="h-screen grid place-items-center">
      <img
        className="absolute w-full h-full"
        src="https://t3.ftcdn.net/jpg/03/55/60/70/360_F_355607062_zYMS8jaz4SfoykpWz5oViRVKL32IabTP.jpg"
        alt=""
      />
      <button
        onClick={signupWithGoogle}
        className="btn btn-outline btn-primary z-10 active:bg-blue-900"
      >
        SignUp with Google
      </button>
    </div>
  );
}

export default Login;
