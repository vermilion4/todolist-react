export const Button = ({
  clearBtn,
  updateBtn,
  cancelBtn,
  text,
  onclick,
  editState,
}) => {
  return (
    <button
      onClick={onclick}
      className={`${clearBtn && 'btn clear-btn'} ${
        updateBtn && `btn update-btn ${editState && 'show'}`
      } ${cancelBtn && `btn cancel-btn ${editState && 'show'}`}`}>
      {text}
    </button>
  );
};
