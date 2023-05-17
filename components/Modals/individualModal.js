import Modal from "@mui/material/Modal";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
function IndividualModal({ open, handleClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState({});
  const [loadingFlag, setLoadingFlag] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const fileHandler = (e) => {
    setFile(e.target.files[0]);
  };
  const handleIndForm = (e) => {
    setLoadingFlag(true);
    e.preventDefault();
    var formData = new FormData();
    formData.append("f_name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("resume", file);
    const config = {
      headers: { "content-type": "Multipart/form-data" },
    };
    axios
      .post("https://www.staffhunter.io/api/individual", formData, config)
      .then((res) => {
        if (res.status == 200) {
          setLoadingFlag(false);
          Swal.fire({
            icon: "success",
            title: "Thanks...",
            text: "We received your email. We will get back to you asap.",
          }).then((result) => {
            if (result.isConfirmed) {
              handleClose();
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoadingFlag(false);
      });
  };
  return (
    <Modal className="individualModalWrap" open={open}>
      <div className="content-wrap">
        <p className="closeInd" onClick={handleClose}>
          x
        </p>
        <h1>Individual</h1>
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
          <input
            type="file"
            onChange={fileHandler}
            name="resume"
            placeholder="Upload Resume"
          />
          <input
            type="submit"
            value={loadingFlag ? "Wait...." : "Send"}
            className="buttonSend"
          />
        </form>
      </div>
    </Modal>
  );
}

export default IndividualModal;
