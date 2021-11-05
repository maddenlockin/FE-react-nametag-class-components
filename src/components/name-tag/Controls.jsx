import React from "react";
import PropTypes from "prop-types";

const Controls = ({
  greeting,
  name,
  pronouns,
  onGreetingChange,
  onNameChange,
  onPronounChange,
  onSubmit,
}) => {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="greeting">Greeting</label>
      <input
        id="greeting"
        name="greeting"
        type="text"
        value={greeting}
        onChange={onGreetingChange}
      />
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="pronouns">Pronouns</label>
      <input
        id="pronouns"
        name="pronouns"
        type="text"
        value={pronouns}
        onChange={onPronounChange}
      />
      <button aria-label="submit">Submit</button>
    </form>
  );
};

Controls.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string.isRequired,
  pronouns: PropTypes.string.isRequired,
  onGreetingChange: PropTypes.func.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onPronounChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Controls;
