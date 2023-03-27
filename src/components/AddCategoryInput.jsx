import { useState } from "react";

const AddCategoryInput = ({onNewCategory}) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length === 0) {
      alert('Es necesario introducir el nombre de una categoría')
      return
    }

    onNewCategory( inputValue.trim())
    setInputValue('')

  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Categoría:</h3>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

export default AddCategoryInput;
