export const Button = ({ clearBtn, updateBtn, cancelBtn, text, func }) => {
  return (
    <button
      onClick={() => func()}
      className={`${clearBtn && 'btn clear-btn'} ${
        updateBtn && 'btn update-btn'
      } ${cancelBtn && 'btn cancel-btn'}`}>
      {text}
    </button>
  );
};
