import { useState } from "react";
export default function NewTodoForm({ onSubmit }) {
  const [items, setItems] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (items === null) return "";
    onSubmit(items);
    setItems("");
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label>New Item</label>
        <input
          value={items}
          onChange={(e) => setItems(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add Item</button>
    </form>
  );
}
