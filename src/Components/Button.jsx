export const Button = ({ text, onclick, classname }) => {
  return (
    <button onClick={onclick} className={classname}>
      {text}
    </button>
  );
};
