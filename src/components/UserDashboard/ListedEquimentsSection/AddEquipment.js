import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import "./AddEquipment.css";
import Equipmentimage from "../../../assets/Equipment.jpg"
import { addEquipment } from "../../../store/userSlice";
import Swal from "sweetalert2";
import jscookie from "js-cookie"





var checkFields=false,
equipmentname=false,
modelnumber=false,
state=false,
city=false,
address=false,
image=false,
description=false,
equipmenttype=false,
price=false,
quantity=false,
condition=false;




function AddEquipment(props) {
    const {getEquipments}=props
    const [lgShow, setLgShow] = useState(false);
    const [addEquipmentObj,setAddEquipment]=useState(false);

    

    function validateName(event){
        const pattern=/^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
        var EquipmentName=document.getElementById("EquipmentName");
        if(pattern.test(event.target.value)){
            const {name,value}=event.target;
            setAddEquipment({...addEquipmentObj,[name]:value.trim()})
            EquipmentName.classList.add('is-valid');
            EquipmentName.classList.remove('is-invalid');
            checkFields=true;
            if(event.target.name==="equipmentname"){
                equipmentname=true;
            }
        }
        else{
            EquipmentName.classList.remove('is-valid');
            EquipmentName.classList.add('is-invalid');
            checkFields=false;
            if(event.target.name==="equipmentname"){
                equipmentname=false;
            }
        }
        if(event.target.value===""){
            EquipmentName.classList.remove('is-valid');
            EquipmentName.classList.remove('is-invalid');
            checkFields=false
        }
    }

    function validateModelNumber(event){
        const pattern=/^[a-zA-Z]+(?:\s[a-zA-Z]+)?$/;
        var EquipmentModelNumber=document.getElementById("EquipmentModelNumber");
        if(pattern.test(event.target.value.trim())){
            const {name,value}=event.target;
            setAddEquipment({...addEquipmentObj,[name]:value.trim()})
            EquipmentModelNumber.classList.add('is-valid');
            EquipmentModelNumber.classList.remove('is-invalid');
            checkFields=true;
            if(event.target.name==="modelnumber"){
                modelnumber=true;
            }
        }
        else{
            EquipmentModelNumber.classList.remove('is-valid');
            EquipmentModelNumber.classList.add('is-invalid');
            checkFields=false;
            if(event.target.name==="modelnumber"){
                modelnumber=false;
            }
        }
        if(event.target.value===""){
            EquipmentModelNumber.classList.remove('is-valid');
            EquipmentModelNumber.classList.remove('is-invalid');
            checkFields=false;
        }
    }
    function validatePrice(event){
        const pattern=/^\d+(\.\d{2})?$/;
        var Equipmentprice=document.getElementById("Equipmentprice");
        if(pattern.test(event.target.value.trim())){
            const {name,value}=event.target;
            setAddEquipment({...addEquipmentObj,[name]:value.trim()})
            Equipmentprice.classList.add('is-valid');
            Equipmentprice.classList.remove('is-invalid');
            checkFields=true
            if(event.target.name==="price"){
                price=true;
            }
        }
        else{
            Equipmentprice.classList.remove('is-valid');
            Equipmentprice.classList.add('is-invalid');
            checkFields=false;
            if(event.target.name==="price"){
                price=false;
            }

        }
        if(event.target.value===""){
            Equipmentprice.classList.remove('is-valid');
            Equipmentprice.classList.remove('is-invalid');
            checkFields=false;
        }
    }

    function validateQuantityField(e) {
        const pattern = /^[1-9]\d*$/;
        const quantityField = document.getElementById(e.target.id);
        const { name, value } = e.target;
        const trimmedValue = value.trim();
        if (pattern.test(trimmedValue)) {
          setAddEquipment({...addEquipmentObj,[name]:value.trim()})
          quantityField.classList.add('is-valid');
          quantityField.classList.remove('is-invalid');
          checkFields = true;
        } else {
          quantityField.classList.remove('is-valid');
          quantityField.classList.add('is-invalid');
          checkFields = false;
        }
    
        if (value === "") {
          quantityField.classList.remove('is-valid');
          quantityField.classList.remove('is-invalid');
          checkFields = false;
        }
      }
    function checkField(event){
        const field=document.getElementById(event.target.id)
        if(event.target.value.trim()===""||event.target.value==="null"){
            field.classList.add('is-invalid');
            field.classList.remove('is-valid');

            if(event.target.name==="state"){
                state=false;
            }
            else if(event.target.name==="city"){
                city=false;
            }
            else if(event.target.name==="equpmentimage"){
                image=false;
            }
            else if(event.target.name==="address"){
                address=false;
            }
            else if(event.target.name==="description"){
                description=false;
            }
            else if(event.target.name==="equipmenttype"){
                equipmenttype=false;
            }
            else if(event.target.name==="condition"){
                condition=false;
            }

        }
        else{
        field.classList.add('is-valid');
        field.classList.remove('is-invalid');
        const { name, value } = event.target;
        
        if (event.target.type === "file") {
            const equipImg = event.target.files[0];
            setAddEquipment({...addEquipmentObj,[name]:equipImg})
           
          } else {
            setAddEquipment({...addEquipmentObj,[name]:value.trim()})
        }
         
        if(event.target.name==="state"){
            state=true;
        }
        else if(event.target.name==="city"){
            city=true;
        }
        else if(event.target.name==="equpmentimage"){
            image=true;
        }
        else if(event.target.name==="address"){
            address=true;
        }
        else if(event.target.name==="description"){
            description=true;
        }
        else if(event.target.name==="equipmenttype"){
            equipmenttype=true;
        }
        else if(event.target.name==="condition"){
            condition=true;
        }
    }
        if(event.target.value==="" && event.target.type!=="textarea"){
            field.classList.remove('is-invalid');
        }
     }


  

    const handleSubmit=(event)=>{
        event.preventDefault();
        const formData=new FormData();
        for(var key in addEquipmentObj){
            if(addEquipmentObj[key]){
                formData.append(key,addEquipmentObj[key]);
            }
        }
        const userEmail=jscookie.get("userEmail");
        if(userEmail){
            formData.append("userEmail",userEmail);
        }
        addEquipment(formData).then((data)=>{   
           if(data.message=="success"){
            Swal.fire({
                position: "middle",
                icon: "success",
                title: "Add Successfully",
                showConfirmButton: false,
                timer: 2000
              });
             getEquipments();
           }
           else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Unavailable to Add Grain. Please try Again...",
            });
        }
        setLgShow(false)
        }).catch((err) => {
            console.log("err", err);
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Unavailable to Add Grain. Please try Again...",
            });
            setLgShow(false)
          })
    }
 
    
    

    return (
        <>
            <button type="button" onClick={() => setLgShow(true)} className="btn btn-outline-success btn-sm" ><i className="bi bi-plus-lg"></i>&nbsp;Add Equipment</button>
     
            <Modal
                size="xl"
                show={lgShow}
                onHide={() => setLgShow(false) }
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg" className="darkgreen">
                        Add Equipment
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    <div className="row m-0 w-100 p-0">
                        <div className="col-12 col-lg-7 col-md-12  p-3" id="equipmentcol" >
                            <form
                                className="row g-1 needs-validation"
                                id="dataForm"
                                noValidate
                                encType="multipart/form-data"
                                onSubmit={handleSubmit}
                            >
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustomUsername"
                                        className="form-label midgreen"
                                    >
                                        Name
                                    </label>
                                    <div className="has-validation">
                                        <input
                                            placeholder="Enter Equipment Name "
                                            type="text"
                                            className="form-control form-control-sm mb-1"
                                            id="EquipmentName"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            name="name"
                                            onChange={validateName}
                                        />
                                         <div className="valid-feedback">
                                           Looks good!!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please choose a Equipment name.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Model No.
                                    </label>
                                    <input
                                        placeholder="Enter Model Number "
                                        type="text"
                                        className="form-control form-control-sm mb-1"
                                        id="EquipmentModelNumber"
                                        required
                                        name="modelnumber"
                                        onChange={validateModelNumber}
                                    />
                                    <div className="valid-feedback">
                                        Looks good!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid Model No.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Equipment Type
                                    </label>
                                    <select name="equipmenttype" onChange={checkField} className="form-control form-control-sm mb-1 form-control-sm"  id="equipmenttype" >
                                        <option value="null">Select Equipment Type</option>
                                        <option value="Vehical">Vehical</option>
                                        <option value="Equipment">Equipment</option>
                                    </select>
                                    <div className="valid-feedback">
                                         selected!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please select Equipment !!
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustomUsername"
                                        className="form-label midgreen"
                                    >
                                        Price(per hours)
                                    </label>
                                    <div className="has-validation">
                                        <input
                                            placeholder="Enter price per hours"
                                            type="number"
                                            className="form-control form-control-sm mb-1"
                                            id="Equipmentprice"
                                            aria-describedby="inputGroupPrepend"
                                            required
                                            name="price"
                                            onChange={validatePrice}
                                        />
                                        <div className="valid-feedback">
                                           looks good!!
                                        </div>
                                        <div className="invalid-feedback">
                                            Please give price.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                       Condition
                                    </label>
                                    <select name="condition" onChange={checkField} className="form-control form-control-sm mb-1 form-control-sm" id="condition" >
                                        <option value="null">Select Condition</option>
                                        <option value="Good">Good</option>
                                        <option value="Modrate">Moderate</option>
                                        <option value="Bad">Bad</option>
                                    </select>
                                    <div className="valid-feedback">
                                        Condition selected!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please select Condition!!
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                       Quantity
                                    </label>
                                    <input
                                        placeholder="Enter Quantity"
                                        type="number"
                                        className="form-control form-control-sm mb-1"
                                        id="quantity"
                                        name="quantity"
                                        onChange={validateQuantityField}
                                        required
                                    />
                                    <div className="valid-feedback">
                                        look good!!.
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a Quantity.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        State
                                    </label>
                                    <select name="state" onChange={checkField} className="form-control form-control-sm mb-1 form-control-sm" id="state" >
                                        <option value="null">Select State</option>
                                        <option value="mp">Mp</option>
                                        <option value="bhopal">Up</option>
                                    </select>
                                    <div className="valid-feedback">
                                        State selected!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid State.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        City
                                    </label>
                                    <select name="city" onChange={checkField} className="form-control form-control-sm mb-1 form-control-sm" id="city" >
                                        <option value="null">Select State</option>
                                        <option value="indore">Indore</option>
                                        <option value="bhopal">Bhopal</option>
                                        <option value="dewas">Dewas</option>
                                        <option value="lucknow">lucknow</option>

                                    </select>
                                    <div className="valid-feedback">
                                        City selected!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid city.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                       Address
                                    </label>
                                    <input
                                        placeholder="Enter Address"
                                        type="text"
                                        className="form-control form-control-sm mb-1"
                                        id="address"
                                        name="address"
                                        onChange={checkField}
                                        required
                                    />
                                    <div className="valid-feedback">
                                         Correct Address!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide address.
                                    </div>
                                </div>            
                                <div className="col-12 col-md-6 p-1">
                                    <label
                                        htmlFor="validationCustom03"
                                        className="form-label midgreen"
                                    >
                                        Equipment Image
                                    </label>
                                    <input
                                        placeholder="Upload Image"
                                        type="file"
                                        className="form-control form-control-sm mb-1"
                                        id="equipmentimage"
                                        name="image"
                                        onChange={checkField}
                                        required
                                    />
                                    <div className="valid-feedback">
                                        look good!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a Image.
                                    </div>
                                </div>
                                
                                <div className="col-12  p-1">
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
                                        id="description"
                                        name="description"
                                        onChange={checkField}
                                        required
                                    />
                                    <div className="valid-feedback">
                                        look good!!
                                    </div>
                                    <div className="invalid-feedback">
                                        Please provide a valid Description.
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-1  mt-1">
                                    <div className="d-grid gap-2">
                                        <button type="reset" name="" id="Submitbtn" className="btn btn-danger btn-sm" >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-2  mt-1">
                                    <div className="d-grid gap-2">
                                        <button type="submit" name="" id="Submitbtn" className="btn btn-success btn-sm" >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-12  col-lg-5 m-0 p-0" id="imgcol-equi">
                            <img src={Equipmentimage} className="img-fluid " alt="" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default AddEquipment;
