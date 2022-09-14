import React, { useState } from "react";

export const JoinStudioForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [people, setPeople] = useState([]);

  const Handle = (e) => {
    e.preventDefault();
    if (name && email && number && message) {
      const person = { name, email, number, message };
      console.log(person);
      setPeople((people) => {
        return [...people, person];
      });
      setName("");
      setNumber("");
      setEmail("");
      setMessage("");
      setPeople("");
    } else {
      alert("empty values");
    }
  };
  return (
    <>
      <button
        type="button"
        className="prop"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Join the Studio
      </button>
    </>
  );
};


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
    <div class="modal-header m-2">
        <img src={logo} width={40} className="" id="staticBackdropLabel"/>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form onSubmit={handleSubmit}>
<div className="background" >
<h4 class=" request mb-4">Request Form</h4>
