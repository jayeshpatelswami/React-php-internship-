import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast  } from "react-toastify" 

const Form = () => {
  const initialstate = {
    email: " ",
    name: " ",
    contect: "",
  };
  const [info, setinfo] = useState(initialstate);

  const { name, email, contect } = info;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/get/${id}`)

      .then((resp) => {
        //  console.log({resp});
        setinfo({ ...resp.data[0] });
      });
  }, [id]);

  const handalsubmit = (e) => {
    e.preventDefault();

    if (!id) {
      axios
        .post("http://localhost:5000/api/add", {
          email,
          name,
          contect,
        })

        .catch((err) => {
          console.log(err);
        });
      // console.log(info.name);

      // alert("data added Successfully");
      toast.success("Data added Successfully");
      setinfo(initialstate);
      history.push("/");
    }
    else{
      axios
      .put(`http://localhost:5000/api/update/${id}`, {
        email,
        name,
        contect,
      })

      .catch((err) => {
        console.log(err);
      });
    // console.log(info.name);

    // alert("data Updated Successfully");
    toast.success("Data Updated Successfully");
    setinfo(initialstate);
    history.push("/");


    }
  };

  const handalchange = (e) => {
    setinfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container">
        <div className=" my-5 p-2 border border-5">
          <form onSubmit={handalsubmit}>
            <fieldset>
              <legend>Form</legend>




              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  name
                </label>
                <input
                  type="text"
                  className="form-control"
                  required
                  minLength={3}
                  id="name"
                  name="name"
                  value={name || ""}
                  onChange={handalchange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  value={email || ""}
                  onChange={handalchange}
                  required
                />
              </div>

             

              <div className="mb-3">
                <label htmlFor="contect" className="form-label">
                  contect
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contect"
                  minLength={10}
                  name="contect"
                  value={contect || ""}
                  onChange={handalchange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </div>

        <Link to="/" className="btn btn-dark">
          
          See The Data
        </Link>
      </div>
    </>
  );
};

export default Form;
