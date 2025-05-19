import { ADMIN_REQUESTED_URL } from "../../../urls";
import { useState,useEffect } from "react";
import axios from "axios";

function UserList() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        try {
            axios.get(ADMIN_REQUESTED_URL + "/adminUerList").then((userDatas) => {
                setUserData(userDatas.data)
            })
                .catch(err => console.log('error ', err));
        } catch (err) {
            console.log("Eroor in get uer data", err);
        }
    }, []);
    return (
        <>
            {/* dfffffffffffffffffffffffffffffffffffffffffffff */}
            {/* {console.log("userData",userData)} */}
        </>
    )
}
export default UserList;