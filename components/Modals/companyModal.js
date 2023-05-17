import Modal from "@mui/material/Modal";
import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import Swal from "sweetalert2";
function CompanyModal({ open, handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState({});
  const [hiringOpt, setHiringOpt] = useState({
    label: "Customer Success",
    value: "Customer Success",
  });
  const hiringDropOpt = [
    { value: "Customer Success", label: "Customer Success" },
    { value: "Operations", label: "Operations" },
    { value: "Admin Assistance", label: "Admin Assistance" },
    { value: "Software Development", label: "Software Development" },
    { value: "Media Buying", label: "Media Buying" },
    { value: "Customer Support", label: "Customer Support" },
    { value: "Sales", label: "Sales" },
    { value: "Business Development", label: "Business Development" },
    { value: "Marketing", label: "Marketing" },
    { value: "Other", label: "Other" },
  ];
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const dropDownHandler = (value) => setHiringOpt(value);
  const handleIndForm = (e) => {
    e.preventDefault();
    var formData = new FormData();
    formData.append("f_name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("hiringFor", hiringOpt.value);
    const config = {
      headers: { "content-type": "Multipart/form-data" },
    };
    axios
      .post("https://www.staffhunter.io/api/company", formData, config)
      .then((res) => {
        if (res.status == 200) {
          Swal.fire({
            icon: "success",
            title: "Thanks...",
            text: "We received your email. We will get back to you asap.",
            zIndex: 22222,
            fontSize: 18,
          }).then((result) => {
            if (result.isConfirmed) {
              handleClose();
            }
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <Modal className="individualModalWrap" open={open}>
      <div className="content-wrap">
        <p className="closeInd" onClick={handleClose}>
          x
        </p>
        <h1>Company</h1>
        <form
          className="ind-form-main"
          method="post"
          encType="multipart/form-data"
          onSubmit={handleIndForm}
        >
          <input
            type="text"
            name="f_name"
            placeholder="Full Name"
            onChange={handleName}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmail}
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Phone No"
            onChange={handlePhone}
            required
          />
          <Select
            options={hiringDropOpt}
            onChange={dropDownHandler}
            className="custom-dropdown"
            value={hiringOpt}
          />
          <input type="submit" value="Send" className="buttonSend" />
        </form>
      </div>
    </Modal>
  );
}

export default CompanyModal;
