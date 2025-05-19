// import { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import leafwallpaper from "../../assets/factory1.jpeg";
// import { orgLogin, setOrgData } from "../../store/organizationSlice";
// import { useDispatch } from "react-redux";

// import "./OrgSignIn.css";
// import { setRoleStatus } from "../../store/commonSlice";
// // var orgObj={}
// var email =false,password=false;

// function OrgSingIn() {
//   const [lgShow, setLgShow] = useState(false);
//   const [loginData, setLoginData] = useState({});
//   const dispatch = useDispatch();

//   function resetData() {
//     email=false;
//     password=false;
//   }

//   function getData (event) {
//     const {name, value} = event.target;
//     setLoginData({
//       ...loginData,
//       [name]: value
//     });
//   };
//   function validateEmail(e) {
//     const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//      var EmailField = document.getElementById(e.target.id);
//      if (pattern.test(e.target.value.trim())){
//       //  const {name,value}=e.target;
//       //  orgObj={...orgObj,[name]:value.trim()}
//        EmailField.classList.add('is-valid');
//        EmailField.classList.remove('is-invalid');
//        email=true;
//      }
//      else{
//        EmailField.classList.remove('is-valid');
//        EmailField.classList.add('is-invalid');
//        email=false;
//      }
 
//      if(e.target.value===""){
//        EmailField.classList.remove('is-valid');
//        EmailField.classList.remove('is-invalid');
//        email=false;
//      }
//    }
//   function validatePassword(e) {
//      const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//      var passwordField = document.getElementById('orgSiginpassword');
//      if (pattern.test(e.target.value.trim())){
//       //  const {name,value}=e.target;
//       //  orgObj={...orgObj,[name]:value}
//        passwordField.classList.add('is-valid');
//        passwordField.classList.remove('is-invalid');
//        password=true;
//        }
//      else{
//        passwordField.classList.remove('is-valid');
//        passwordField.classList.add('is-invalid');
//        password=true;
//      }
//      if(e.target.value===""){
//        passwordField.classList.remove('is-valid');
//        passwordField.classList.remove('is-invalid');
//        password=false;
//      }
//  }

//  function handelSubmit(e) {
//   e.preventDefault();
//   if (email && password) {
//     orgLogin(loginData).then((logData)=>{
//       dispatch(setOrgData(logData.log));
//       dispatch(setRoleStatus({role:logData.role,data:data.log, status: true}));
//     }).catch((error)=>{
//       console.log(error);
//     });
//   }

// }
  
//   return (
//     <>
//       <p onClick={() => setLgShow(true)}>
//       <i className="bi bi-people-fill"></i>&nbsp;Orgnisation
//       </p>

//       <Modal  size="lg" show={lgShow} onHide={() => {setLgShow(false); resetData()}} backdrop="static" aria-labelledby="example-modal-sizes-title-lg">
//         <Modal.Header closeButton>
//           <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
//             Orgnisation
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="p-0">
//           <div className="row m-0 w-100 p-0 d-flex">
//             <div className="col-12 col-lg-6 " id="datacolm">
//               <div id="overlay" >
//                 <h1 className="midgreen text-center mt-3">Sign in</h1>
//                 <form onSubmit={handelSubmit} className="row g-3 needs-validation" id="dataForm" noValidate>
//                   <div className="col-12 columns mt-4">
//                     <label
//                       htmlFor="validationCustomUsername"
//                       className="form-label midgreen"
//                     >
//                       Email
//                     </label>
//                     <div className="has-validation">
//                       <input placeholder="Enter Email Address" type="email" name="org_email"  className="form-control" onChange={(event)=>{validateEmail(event); getData(event);}} id="orgSigninemail" aria-describedby="inputGroupPrepend" required
//                       />
//                       <div className="valid-feedback">
//                       Correct email!!
//                       </div>
//                       <div className="invalid-feedback">
//                       Invalid email!!
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-12  columns ">
//                     <label htmlFor="validationCustom03" className="form-label midgreen" >
//                       password
//                     </label>
//                     <input placeholder="Enter Password" type="password" name="password" className="form-control" id="orgSiginpassword" onChange={(event)=>{validatePassword(event); getData(event);}} required/>
//                     <div className="valid-feedback">
//                       Valid password!!
//                     </div>
//                     <div className="invalid-feedback">
//                       Invalid password!!
//                     </div>
//                   </div>

//                   <div className="col-12  columns signupbtn-col mt-5">
//                     <div className="d-grid gap-2">
//                       <button type="submit" name="" id="Signupbtn" className="btn btn-success">
//                         Sign in
//                       </button>
//                     </div>
//                   </div>
//                     <h6 className="text-center text-info">
//                     Don't have account ? Create account {" "}
//                     <span className="midgreen">Sign up</span>{" "}
//                   </h6>
//                 </form>

//               </div>
//             </div>

//             <div className="col-6 m-0 p-0" id="imgcol">
//               <img src={leafwallpaper} className="w-100" alt="" />
//             </div>
//           </div>
//         </Modal.Body>
//       </Modal>
//     </>
//   );
// }
// export default OrgSingIn;


import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import leafwallpaper from "../../assets/factory1.jpeg";
import { orgLogin, setOrgData } from "../../store/organizationSlice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import "./OrgSignIn.css";
import { setRoleStatus } from "../../store/commonSlice";
import { useNavigate } from "react-router-dom";
import OrgForgetPassword from "./OrgForgetPassword.js";
var email = false;

function OrgSingIn() {
  const [lgShow, setLgShow] = useState(false);
  const [loginData, setLoginData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function resetData() {
    email = false;
  }

  function getData(event) {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value
    });
  };
  function validateEmail(e) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var EmailField = document.getElementById(e.target.id);
    if (pattern.test(e.target.value.trim())) {
      EmailField.classList.add('is-valid');
      EmailField.classList.remove('is-invalid');
      email = true;
    }
    else {
      EmailField.classList.remove('is-valid');
      EmailField.classList.add('is-invalid');
      email = false;
    }

    if (e.target.value === "") {
      EmailField.classList.remove('is-valid');
      EmailField.classList.remove('is-invalid');
      email = false;
    }
  }

  function handelSubmit(e) {
    e.preventDefault();
    if (email) {
      orgLogin(loginData).then((data) => {
        console.log("data.message");
        if(data.message=="success"){
          dispatch(setOrgData(data.log));
          dispatch(setRoleStatus({ role: data.role,data:data.log, status: true }));
          setLgShow(false);
          Swal.fire({
            position: "middle",
            icon: "success",
            title: "Welcome to Agrotrade🙏",
            showConfirmButton: false,
            timer: 2000
          });
          navigate('/');
        }else if(data.message=="not exist"){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Organization not registered. Please try Again...",
          });
        }else if(data.message=="wrong password"){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Wrong Password!\nPlease try Again...",
          });
        }else if(data.message=="error"){
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Server Error. Please try Again...",
          });
        }
      }).catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong. Please try Again...",
        });
      });
    }

  }

  return (
    <>
      <p onClick={() => setLgShow(true)}>
        <i className="bi bi-people-fill"></i>&nbsp;Orgnisation
      </p>

      <Modal size="lg" show={lgShow} onHide={() => { setLgShow(false); resetData() }} backdrop="static" aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
            Orgnisation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-0">
          <div className="row m-0 w-100 p-0 d-flex">
            <div className="col-12 col-lg-6 " id="datacolm">
              <div id="overlay" >
                <h1 className="midgreen text-center mt-3">Sign in</h1>
                <form onSubmit={handelSubmit} className="row g-3 needs-validation" id="dataForm" noValidate>
                  <div className="col-12 columns mt-4">
                    <label
                      htmlFor="validationCustomUsername"
                      className="form-label midgreen"
                    >
                      Email
                    </label>
                    <div className="has-validation">
                      <input placeholder="Enter Dealer Email Address" type="email" name="dealer_email" className="form-control" onChange={(event) => { validateEmail(event); getData(event); }} id="orgSigninemail" aria-describedby="inputGroupPrepend" required/>
                      <div className="valid-feedback">
                        Correct email!!
                      </div>
                      <div className="invalid-feedback">
                        Invalid email!!
                      </div>
                    </div>
                  </div>
                  <div className="col-12  columns ">
                    <label htmlFor="validationCustom03" className="form-label midgreen" >
                      password
                    </label>
                    <input placeholder="Enter Password" type="password" name="password" className="form-control" id="orgSiginpassword" onChange={getData} required />
                    <div className="valid-feedback">
                      Valid password!!
                    </div>
                    <div className="invalid-feedback">
                      Invalid password!!
                    </div>
                    <OrgForgetPassword/>
                  </div>

                  <div className="col-12  columns signupbtn-col mt-5">
                    <div className="d-grid gap-2">
                      <button type="submit" name="" id="Signupbtn" className="btn btn-success">
                        Sign in
                      </button>
                    </div>
                  </div>
                  <h6 className="text-center text-info">
                    Don't have account ? Create account {" "}
                    <span className="midgreen">Sign up</span>{" "}
                  </h6>
                </form>

              </div>
            </div>

            <div className="col-6 m-0 p-0" id="imgcol">
              <img src={leafwallpaper} className="w-100" alt="" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default OrgSingIn;
