import React, { useState } from "react";

export const Lad = () => {
  const [form, setForm] = useState({
    firstName: "",
    email: "",
  });

  const Handle = (e) => {
    e.preventDefault();
    console.log("firstName: " + form.firstName);
    console.log("email: " + form.email);
  };
  return (
    <article>
      <form onSubmit={Handle}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <input type="submit" value="submit"></input>
      </form>
    </article>
  );
};
