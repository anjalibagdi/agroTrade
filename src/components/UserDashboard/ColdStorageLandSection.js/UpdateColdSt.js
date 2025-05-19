import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import jscookie from "js-cookie"
import Swal from "sweetalert2";
import { UpdateColdSt } from "../../../store/userSlice"
import "./ColdStorageLand.css";


function UpdateColdStModal(props) {
    const [lgShow, setLgShow] = useState(false);
    const [addColdStLandObj, setAddColdStLand] = useState(false);
    const { getcoldSts, ColdSt } = props

    function checkFields(e) {
        const { name, value } = e.target;

        if (e.target.type === "file") {
            const grainimgImg = e.target.files[0];
            setAddColdStLand({ ...addColdStLandObj, [name]: grainimgImg })
        } else {
            setAddColdStLand({ ...addColdStLandObj, [name]: value.trim() })
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        for (var key in addColdStLandObj) {
            if (addColdStLandObj[key]) {
                formData.append(key, addColdStLandObj[key]);
            }
        }

        const userEmail = jscookie.get("userEmail");
        if (userEmail) {
            formData.append("userEmail", userEmail);
            formData.append("_id", ColdSt._id);
        }

        UpdateColdSt(formData).then((data) => {
            if (data.message == "success") {
                Swal.fire({
                    position: "middle",
                    icon: "success",
                    title: "Update ColdStorage Land Successfully",
                    showConfirmButton: false,
                    timer: 2000
                });
                getcoldSts();

            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Unavailable to Update ColdStorage. Please try Again...",
                });
            }
            setLgShow(false)
        }).catch((err) => {
            console.log("err", err);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Unavailable to Update ColdStorage. Please try Again...",
            });
            setLgShow(false)
        })
    }
    return (
        <>
            <button type="button" onClick={() => setLgShow(true)} name="" id="" className="btn btn-outline-success btn-sm" ><i class="bi bi-arrow-up-circle"></i>&nbsp;Update</button>
            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg ">
                        <h4 className="midgreen">Add ColdStorage Land</h4>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="row m-0 w-100 p-0">
                        <div className="col-12 col-lg-7  p-3" >
                            <form
                                className="row g-1 needs-validation"
                                id="dataForm" onSubmit={handleSubmit}
                                noValidate
                            >
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustomUsername"
                                        className="form-label midgreen"
                                    >
                                        Area
                                    </label>
                                    <div className="has-validation">
                                        <input
                                            placeholder="Enter land area"
                                            type="number"
                                            className="form-control form-control-sm mb-1"
                                            id="validationCustomUsername"
                                            aria-describedby="inputGroupPrepend"
                                            name="area"
                                            onChange={checkFields}
                                            defaultValue={ColdSt.area}
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            Please choose a Area.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Address (Street)
                                    </label>
                                    <input
                                        placeholder="Enter land Address"
                                        type="text"
                                        className="form-control form-control-sm mb-1"
                                        id="validationCustom03"
                                        required
                                        onChange={checkFields}
                                        defaultValue={ColdSt.address}
                                        name="address"
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid Address.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        State
                                    </label>
                                    <select name="state" defaultValue={ColdSt.state} onChange={checkFields} id="state" className="form-control form-control-sm">
                                        <option value="null">Selecet State</option>
                                        <option value="mp">Mp</option>
                                        <option value="up">Up</option>
                                    </select>
                                    <div className="valid-feedback">
                                        valid State.
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid State.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        City
                                    </label>
                                    <select name="city" defaultValue={ColdSt.city} onChange={checkFields} id="city" className="form-control form-control-sm">
                                        <option value="null">Selecet City</option>
                                        <option value="indore">Indore</option>
                                        <option value="bhopal">Bhopal</option>
                                    </select>
                                    <div className="valid-feedback">
                                        valid city.
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Pin code
                                    </label>
                                    <input
                                        placeholder="Enter your Pin code"
                                        type="number"
                                        className="form-control form-control-sm mb-1"
                                        id="validationCustom03"
                                        name="pincode" onChange={checkFields}
                                        defaultValue={ColdSt.pincode}
                                        required
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid Pincode.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Rent
                                    </label>
                                    <input
                                        placeholder="Enter Rent per month"
                                        type="text"
                                        className="form-control form-control-sm mb-1"
                                        id="validationCustom03"
                                        required
                                        name="rent" onChange={checkFields}
                                        defaultValue={ColdSt.rent}
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid Rent.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Infrastructure
                                    </label>

                                    <select name="infrastructure" defaultValue={ColdSt.infrastructure} className="form-control form-control-sm mb-2 form-control-sm" onChange={checkFields} id="state" >
                                        <option value="null">Select Infrastructure</option>
                                        <option value="Good">Good</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="Bad">Bad</option>
                                    </select>
                                    <div className="valid-feedback">
                                        Infrastructure selected!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please select Infrastructure !!
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Land Image
                                    </label>
                                    <input
                                        placeholder="Upload Image"
                                        type="file"
                                        className="form-control form-control-sm mb-1"
                                        id="validationCustom03"
                                        required onChange={checkFields}
                                        name="image"
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid Image.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <label htmlFor="validationCustom03" className="form-label midgreen" >
                                        Avilable from
                                    </label>
                                    <input type="date" min={Date.now()} name="avilableFrom" onChange={checkFields} className="form-control  form-control-sm mb-1" id="validationCustom03" required />
                                    <div className="valid-feedback">
                                        Looks Good
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a date.
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <label htmlFor="validationCustom03" className="form-label midgreen" >
                                        Avilable till
                                    </label>
                                    <input type="date" min={Date.now()} name="avilableTill" onChange={checkFields} className="form-control  form-control-sm mb-1" id="validationCustom03" required />
                                    <div className="valid-feedback">
                                        Looks Good
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a date.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 ">
                                    <label htmlFor="validationCustom03" className="form-label midgreen" >
                                        <i class="fa-solid fa-street-view"></i>&nbsp;360 Image
                                    </label>
                                    <input placeholder="Upload Image" type="file" className="form-control form-control-sm mb-1" id="validationCustom03" name="image360" onChange={checkFields} required
                                    />
                                    <p className="fs-6 text-danger " >Provide 360 image if avilable</p>
                                    <div className="valid-feedback">
                                        Looks Goods
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a Image.
                                    </div>
                                </div>
                                <div className="col-12 mt-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        placeholder="Enter description"
                                        type="text"
                                        className="form-control form-control-sm mb-1"
                                        id="validationCustom03"
                                        onChange={checkFields}
                                        name="description"
                                        defaultValue={ColdSt.description}
                                    />
                                    <div className="invalid-feedback">
                                        Please provide a valid description.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  columns signupbtn-col mt-5">
                                    <div className="d-grid gap-2">
                                        <button type="reset" name="" id="Submitbtn" className="btn btn-danger btn-sm" >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6  columns signupbtn-col mt-5">
                                    <div className="d-grid gap-2">
                                        <button type="submit" name="" id="Submitbtn" className="btn btn-success btn-sm" >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-12  col-lg-5 m-0 p-0" id="imgcol-grain">
                            <img src={"http://localhost:3000/" + ColdSt.image} className="w-100 imgcol-grain-img " alt={ColdSt.image} />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default UpdateColdStModal;
