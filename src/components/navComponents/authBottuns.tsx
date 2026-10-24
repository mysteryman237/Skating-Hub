interface AuthButtonProps{
    containerClass: string,
    loginClass: string,
    signUpClass: string,
    onAction?: () => void
}

function AuthButtons({containerClass, loginClass, signUpClass, onAction}:AuthButtonProps) {
  return (
    <div className={containerClass}>
      <button type="button" className={loginClass} onClick={onAction}>
        Log in
      </button>
      <button type="button" className={signUpClass} onClick={onAction}>
        sign-up
      </button>
    </div>
  );
}
export default AuthButtons