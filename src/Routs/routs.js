import React,{useContext} from "react";
import { AuthContext } from "../Contexts";

import NavStack from "./routsStack";
import Tabs from "./routsTab";

export default function Routs(){
    const {signed} = useContext(AuthContext)

    return(
        signed ? <Tabs/> : <NavStack/>
    )
}