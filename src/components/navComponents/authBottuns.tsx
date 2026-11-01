import { Link } from "react-router-dom";

interface AuthButtonProps{
    containerClass: string,
    loginClass: string,
    signUpClass: string,
    onAction?: () => void
}

function AuthButtons({containerClass, loginClass, signUpClass, onAction}:AuthButtonProps) {
  return (
    <div className={containerClass}>
      <Link to="/SignIn" type="button" className={loginClass} onClick={onAction}>
        Log in
      </Link>
      <Link to="/SignUp" type="button" className={signUpClass} onClick={onAction}>
        sign-up
      </Link>
    </div>
  );
}
export default AuthButtons