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
      <label htmlFor="greeting">
        Greeting
        <input
          id="greeting"
          name="greeting"
          type="text"
          onChange={onGreetingChange}
          aria-label="greeting"
        />
      </label>
      <label htmlFor="name">
        Name
        <input
          id="name"
          name="name"
          type="text"
          onChange={onNameChange}
          aria-label="name"
        />
      </label>
      <label htmlFor="pronouns">
        Pronouns
        <input
          id="pronouns"
          name="pronouns"
          type="text"
          onChange={onPronounChange}
          aria-label="pronouns"
        />
      </label>
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
