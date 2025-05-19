import { useEffect, useState } from 'react'
import HeadSlider from '../HeadSilder/HeadSlider'
import Header from '../Header/Header'
import jscookie from 'js-cookie'
import './ExpertList.css'
import { getExpert } from '../../store/expertSlice';
import profile  from '../../assets/profile.avif'
export default function ExpertList(){
    const [expert,setExpert]=useState([]);
    const[status,setStatus]=useState(false);
    

    useEffect(()=>{
        const Expert=async()=>{
          const token=jscookie.get("token")
            const response= await getExpert()
            console.log("expertList in component",response);
            if(response)
            {
             setStatus(true)
             setExpert([...response.expert]);
            }
         }
        Expert();
        // getExpert().then((expert)=>{expert.json()}).then((data)=>{
        //     console.log("expert list inside component",data)
        // });
    },[]);
    return(
        <>
        <Header/>
        

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm">
        {status?
        expert.map((data,i)=>{
            return(
            <div className="col mb-3 mt-2" key={i}>
            <div className="card">
              <div className="card-body text-center mt-5 ">
                <img src={profile} style={{width:"200px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
                <h5 className="card-title">{data.name}</h5>
                <p className="text-secondary mb-1"><b>Education-</b> {data.education}</p>
                <p className="text-muted font-size-sm mb-1"><b>Type-</b>{data.consultancy_type}</p>
                <p className="text-muted font-size-sm mb-1"><b>Fee-</b>{data.consultancy_type.trim()=="chat"?(data.consultancy_fee_chat):(data.consultancy_type.trim())=="vedio_call"?data.consultancy_fee_video:data.consultancy_fee_video+","+data.consultancy_fee_chat}</p>

              </div>
              <div className="card-footer d-flex justify-content-center">
                <button className="btn btn-warning btn-sm bg-warning has-icon btn-block" type="button">Book Expert</button>
              </div>
            </div>
          </div>
            )
        })
     :
       <div className="col mb-3 mx-auto text-center" style={{marginTop:"10%"}}>
        <div className="card">
          {/* <img src="https://www.bootdey.com/image/340x120/FFB6C1/000000" alt="Cover" className="card-img-top"/> */}
          
          <div className="card-body text-center mt-5 ">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1 bg-warning ">OOPs.............</p>
            <p className="font-size-sm text-danger">There is no Expert available</p>
          </div>
         
        </div>
      </div>
    
}

      {/* <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/87CEFA/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/20B2AA/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/FFA07A/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/7B68EE/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/BA55D3/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/FF4500/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/191970/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar2.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/DDA0DD/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/DB7093/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar4.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/663399/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar5.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div>
      <div className="col mb-3">
        <div className="card">
          <img src="https://www.bootdey.com/image/340x120/FF8C00/000000" alt="Cover" className="card-img-top"/>
          <div className="card-body text-center">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" style={{width:"100px",marginTop:"-65px"}} alt="User" className="img-fluid img-thumbnail rounded-circle border-0 mb-3"/>
            <h5 className="card-title">John Doe</h5>
            <p className="text-secondary mb-1">Full Stack Developer</p>
            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-light btn-sm bg-white has-icon btn-block" type="button"><i className="material-icons">add</i>Follow</button>
            <button className="btn btn-light btn-sm bg-white has-icon ml-2" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></button>
          </div>
        </div>
      </div> */}
    </div>


    </>

    )
}