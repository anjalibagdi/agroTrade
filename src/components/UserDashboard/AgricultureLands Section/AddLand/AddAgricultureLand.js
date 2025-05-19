import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import * as PANOLENS from 'panolens';
import { useEffect } from "react";
import imgs from "../../../../assets/leaves_Image.jpeg"
import jscookie from "js-cookie"
import { addAgriLand } from "../../../../store/userSlice";
import "./AddLand.css";
import Swal from "sweetalert2";
function AddAgricultureLand(props) {
    const {sendLands} =props;
    const [lgShow, setLgShow] = useState(false);
    var landData={}
    function getData(e){
        const {name,value}=e.target;
        if (e.target.type === "file") {
            const landImg = e.target.files[0];
            landData={...landData,[name]: landImg};
        } 
        else{
            landData={...landData,[name]:value};
            console.log(landData);
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        for (var key in landData) {
          if (landData[key]) {
            formData.append(key,landData[key]);
          }
        }
        const userEmail = jscookie.get("userEmail");
        if (userEmail) {
          formData.append("ownerEmail", userEmail);
        }
        addAgriLand(formData).then((data)=>{
            if (data.message == "success") {
                Swal.fire({
                  position: "middle",
                  icon: "success",
                  title: "Land Added Successfully",
                  showConfirmButton: false,
                  timer: 2000
                });
               setLgShow(false)
               sendLands(data.Lands)  
            }
              else {
                Swal.fire({
                  icon: "error",
                  title: "ERROR",
                  text: "Unavailable to Add Land. Please try Again...",
                });
              }
        }).catch((err) => {
            console.log("err", err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Unavailable to Add Land. Please try Again...",
            });
            setLgShow(false)
          })
    
      }

    return (
        <>
            <button onClick={() => setLgShow(true)} type="button" className="btn btn-outline-success btn-sm">
            <i class="bi bi-plus-lg"></i>&nbsp;Add Land
          </button>
            <Modal size="xl" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
                        Add Agriculture Land
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">

                        <div className="container  bg-white p-0 w-100"  >
                            <div className="row w-100 m-0 g-0 ">
                                <div className="col-12 col-lg-6 h-100 bg-danger"  >
                                   <div className="image_container h-100" >
                                     <img src={imgs} className="w-100" alt=""/>
                                   </div>
                                </div>
                                <div className="col-12 col-lg-6  p-3" >
                                    <form className="row g-1 needs-validation" onSubmit={handleSubmit} noValidate>
                                       
                                    <div className="col-12 col-md-6">
                                             <label htmlFor="validationCustomUsername" className="form-label midgreen ">Land Title</label>
                                            <div className="has-validation">
                                                <input placeholder="Enter land title" type="text" className="form-control form-control-sm mb-1 " id="title" name="landTitle" onChange={getData} aria-describedby="inputGroupPrepend" required/>
                                                <div className="valid-feedback">
                                                    Looks Good.
                                                </div>
                                                <div className="invalid-feedback">
                                                    Please add area .
                                                </div>
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                             <label htmlFor="validationCustomUsername"className="form-label midgreen ">Area</label>
                                            <div className="has-validation">
                                                <input placeholder="Enter land area" type="number" className="form-control form-control-sm mb-1 " id="landarea" name="area" onChange={getData} aria-describedby="inputGroupPrepend" required/>
                                                <div className="valid-feedback">
                                                    Looks Good.
                                                </div>
                                                <div className="invalid-feedback">
                                                    Please add area .
                                                </div>
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label  htmlFor="validationCustom03" className="form-label midgreen" >
                                                Agriculture Type
                                            </label>
                                            <select name="agriType" className="form-control form-control-sm mb-1 form-control-sm" onChange={getData} id="state" >
                                                <option value="null">Select Agriculture Type</option>
                                                <option value="Organic">Organic</option>
                                                <option value="Inorganic">Inorganic</option>
                                            </select>
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a valid Agriculture Type.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label htmlFor="validationCustom03" className="form-label midgreen" >
                                                Soil Type
                                            </label>
                                            <select name="soilType" className="form-control form-control-sm mb-1 form-control-sm" onChange={getData} id="state" >
                                                <option value="null">Select Soil Type</option>
                                                <option value="Alluvial Soilod">Alluvial Soil</option>
                                                <option value="Black Cotton Soil">Black Cotton Soil</option>
                                                <option value="Red & Yellow Soil">Red & Yellow Soil</option>
                                                <option value="Laterite Soil">Laterite Soil</option>
                                                <option value="Mountainous or Forest Soil">Mountainous or Forest Soil</option>
                                                <option value="Arid or Desert Soil">Arid or Desert Soil</option>
                                                <option value="Saline and Alkaline Soil">Saline and Alkaline Soil</option>
                                                <option value="Peaty and Marshy Soil">Peaty and Marshy Soil</option>
                                            </select>
                                            <div className="valid-feedback">
                                                Look Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a Soil Type.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label  htmlFor="validationCustom03" className="form-label midgreen" >
                                                Suitable for
                                            </label>
                                            <input placeholder="Enter Crop for farming" type="text" name="suitableFor" onChange={getData} className="form-control  form-control-sm mb-1" id="validationCustom03" required/>
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide  detail.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label  htmlFor="validationCustom03" className="form-label midgreen" >
                                                Rent per month
                                            </label>
                                            <input placeholder="Enter Crop for farming" type="number" min={1000} name="rent" onChange={getData} className="form-control  form-control-sm mb-1" id="validationCustom03" required/>
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a rent.
                                            </div>
                                    </div>
                                        
                                    <div className="col-12 col-md-6">
                                            <label  htmlFor="validationCustom03" className="form-label midgreen" >
                                                Avilable from
                                            </label>
                                            <input placeholder="Enter Crop for farming" type="date" min={Date.now()} name="avilableFrom" onChange={getData} className="form-control  form-control-sm mb-1" id="validationCustom03" required/>
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a date.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label  htmlFor="validationCustom03" className="form-label midgreen" >
                                                Avilable till
                                            </label>
                                            <input placeholder="Enter Crop for farming" type="date" min={Date.now()} name="avilableTill" onChange={getData} className="form-control  form-control-sm mb-1" id="validationCustom03" required/>
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a date.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label htmlFor="validationCustom03" className="form-label midgreen" >
                                                Address (Street or landmark)
                                            </label>
                                            <input
                                                placeholder="Enter land Address"
                                                type="text"
                                                name="address"
                                                className="form-control form-control-sm mb-1"
                                                id="validationCustom03"
                                                onChange={getData}
                                                required
                                            />
                                              <div className="valid-feedback">
                                                looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide  Address.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label htmlFor="validationCustom03" className="form-label midgreen">City</label>
                                                < input placeholder="Enter City"type="text" name="city" className="form-control form-control-sm mb-1" id="validationCustom03" onChange={getData}required
                                            />
                                              <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide  city.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                             <label  htmlFor="validationCustom03" className="form-label midgreen">State</label>
                                            <input
                                                placeholder="Enter State"
                                                type="text"
                                                name="state"
                                                className="form-control form-control-sm mb-1"
                                                id="validationCustom03"
                                                onChange={getData}
                                                required
                                            />
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide State.
                                            </div>
                                    </div>
                                        
                                    <div className="col-12 col-md-6">
                                            <label htmlFor="validationCustom03" className="form-label midgreen" >Pin code</label>
                                            <input
                                                placeholder="Enter your Pin code"
                                                type="number"
                                                name="zipCode"
                                                className="form-control form-control-sm mb-1"
                                                id="validationCustom03"
                                                onChange={getData}
                                                required
                                            />
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide pin code.
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                             <label htmlFor="validationCustom03" className="form-label midgreen">
                                                Infrastructure
                                            </label>

                                            <select name="infrastructure" className="form-control form-control-sm mb-1 form-control-sm" onChange={getData} id="infrastructure" >
                                                <option value="null">Select Infrastructure</option>
                                                <option value="Good">Good</option>
                                                <option value="Moderate">Moderate</option>
                                                <option value="Bad">Bad</option>
                                            </select>
                                            <div className="valid-feedback">
                                                State selected!!
                                            </div>
                                            <div className="invalid-feedback">
                                                Please select Infrastucture !!
                                            </div>
                                    </div>

                                    <div className="col-12 col-md-6">
                                            <label  htmlFor="validationCustom03"  className="form-label midgreen" >
                                                Land Image
                                            </label>
                                            <input
                                                placeholder="Upload Image"
                                                type="file"
                                                className="form-control form-control-sm mb-1"
                                                id="validationCustom03"
                                                name="image"
                                                onChange={getData}
                                                required
                                            />
                                            <div className="valid-feedback">
                                                Looks Goods
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a Image.
                                            </div>
                                    </div>
                                    
                                    <div className="col-12 col-md-6 ">
                                     <label  htmlFor="validationCustom03"  className="form-label midgreen" >
                                     <i class="fa-solid fa-street-view"></i>&nbsp;360 Image
                                     </label>
                                        <input  placeholder="Upload Image"    type="file"  className="form-control form-control-sm mb-1" id="validationCustom03" name="image360" onChange={getData}required
                                     />
                                     <p className="fs-6 text-danger " >Provide 360 image if avilable</p>
                                     <div className="valid-feedback">
                                         Looks Goods
                                     </div>
                                     <div className="invalid-feedback">
                                         Please provide a Image.
                                     </div>
                                     </div>

                                 

                                    <div className="col-12">
                                            <label  htmlFor="validationCustom03" className="form-label midgreen"  >
                                                Description
                                            </label>
                                               <textarea  placeholder="Enter description" name="description" onChange={getData} type="text" className="form-control form-control-sm mb-1" id="validationCustom03" required />
                                            <div className="valid-feedback">
                                                Looks Good
                                            </div>
                                            <div className="invalid-feedback">
                                                Please provide a  Description.
                                            </div>
                                    </div>

                                        <div className="col-12  columns signupbtn-col mt-2">
                                            <div className="d-grid gap-2">
                                                <button type="submit" name="" id="Submitbtn" className="btn btn-success " >
                                                    Add Land
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12  columns signupbtn-col">
                                            <div className="d-grid gap-2">
                                                <button type="reset" name=""  className="btn btn-danger" >
                                                 Reset
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                </Modal.Body>
     
            </Modal>
        </>
    );
}
export default AddAgricultureLand;

