import { ADMIN_REQUESTED_URL } from "../../../urls";
import { useState, useEffect } from "react";
import axios from "axios";
function OrganizationList() {
    const [organizationData, setOrganizationData] = useState([])
    useEffect(() => {
        try {
            axios.get(ADMIN_REQUESTED_URL + "/adminOrganizationList").then((userDatas) => {
                setOrganizationData(userDatas.data.result)
            })
                .catch(err => console.log('error ', err));
        } catch (err) {
            console.log("Eroor in get uer data", err);
        }
    }, []);
    return (
        <>
            <p className="mt-5 text-center fs-2 darkgreen fw-bold">Organization List</p>
            <div className="container mt-5 mr-5 table-responsive ">
                <table className="table table-bordered table-sm ">
                    {console.log("organizationData", organizationData)}
                    <thead>
                        <tr>
                            <th className="fs-6 p-1">S. No</th>
                            <th className="fs-6 p-1">Org-Name</th>
                            <th className="fs-6 p-1">Org-Email</th>
                            <th className="fs-6 p-1">Dealer Email</th>
                            <th className="fs-6 p-1">Dealer Name</th>
                            <th className="fs-6 p-1">Dealer Contact</th>
                            <th className="fs-6 p-1">Details</th>
                            <th className="fs-6 p-1">Verify</th>
                            <th className="fs-6 p-1">Status</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            organizationData.length === 0 ? (
                                <tr>
                                    <td colSpan="13" className="text-center">No data available</td>
                                </tr>
                            ) : (
                                organizationData.map((org, index) => (
                                    <tr key={index}>
                                        <td className="fs-6">{index+1}</td>
                                        <td className="fs-6">{org.company_name}</td>
                                        <td className="fs-6">{org.org_email}</td>
                                        <td className="fs-6">{org.dealer_email}</td>
                                        <td className="fs-6">{org.dealer_name}</td>
                                        <td className="fs-6">{org.dealer_contact}</td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default OrganizationList;

