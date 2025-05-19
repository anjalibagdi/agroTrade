import HeadSlider from '../HeadSilder/HeadSlider.js'
import HomeServices from '../HomeServicesSection/Services.js';
import AboutUs from '../HomeAboutUsSection/Aboutus.js';
import Statistics from '../HomeStatastics/Statistics.js';
import Grains from '../HomeGrainsSection/Grains.js';
import LandsSection from '../HomeLandsSection/LandsSection.js';
import EquipmentsSection from '../HomeEqupimentsSection/EquipmentSection.js';
import { useDispatch } from 'react-redux';
import { jwtVerification, setRoleStatus } from '../../store/commonSlice.js';
import { setUserData } from '../../store/userSlice.js';
import { setOrgData } from '../../store/organizationSlice.js';
import { setAdminData } from '../../store/adminSlice.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'




function Home() {
    const dispatch = useDispatch();
    jwtVerification().then((logData)=>{
        console.log("logdata : -> ",logData  );
        if(logData.role=="user"){
            dispatch(setUserData(logData.log));
            dispatch(setRoleStatus({role:"user", status: true}));
        }else if(logData.role=="organization"){
            dispatch(setOrgData(logData.log));
            dispatch(setRoleStatus({role:"organization", status: true}));
        }else if(logData.role=="admin"){
            dispatch(setAdminData(logData.role));
            dispatch(setRoleStatus({role:"admin", status:true}));
        }
    }).catch(()=>{
        
    });
    return (
        <>
            <Header/>
            <HeadSlider />
            <HomeServices />
            <AboutUs />
            <Statistics />
            <Grains />
            <LandsSection />
            <EquipmentsSection />
            <Footer/>
            
        </>);
};
export default Home;