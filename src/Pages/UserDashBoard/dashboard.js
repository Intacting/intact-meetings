import React from "react";
import UserNav from "../../Components/UserNav";
import Toptaber from "./Component/Toptaber";
const Dashboard = ()=>{
    return(<>
    <div className="pass-page">
    <UserNav/>
    <main className="dashboard-main">
        <Toptaber/>
    </main>
    </div>
    </>)
}
export default Dashboard;