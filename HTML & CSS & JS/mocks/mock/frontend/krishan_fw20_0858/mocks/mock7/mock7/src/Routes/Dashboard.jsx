import { Flex, Input, Select } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardData from "../Components/DashboardData";
import { getAdminData, postAdminData } from "../Redux/Admin/AdminAction";

const Dashboard = () => {
    const [companyform, setCompanyform] = useState({
    "company_logo": "",
    "company_name": "",
    "company_type": "",
	"stock_exchange": "",
	"total_shares": 0,
	"cost_per_share": 0,
	"price_action": 0,
  });

  const dispatch = useDispatch()

    const handleForm = (e)=>{
        e.preventDefault()
        dispatch(postAdminData({id:Date.now(),...companyform})).then(res=>dispatch(getAdminData()))
    }
    const handleChange = (event)=>{
        let {name,value} = event.target;
        setCompanyform({...companyform,[name]:value})
    }

    
  return (
    <div>
      <Flex
      flexDirection={"column"}
      width="30%"
      m="1rem auto"
      padding="1rem"
      border="1px solid black"
      >
        <form action="" onSubmit={handleForm}>

        <Input name='company_logo' placeholder="Enter Company Logo" onChange={(e)=>handleChange(e)}/>
        <Input name='company_name' placeholder="Enter Company Name" onChange={(e)=>handleChange(e)}/>
        <Select name="company_type" placeholder="Enter Company Type" onChange={(e)=>handleChange(e)}>
            <option value="Bank">Bank</option>
            <option value="IT">IT</option>
            <option value="Automobile">Automobile</option>
            <option value="Pharma">Pharma</option>
            <option value="Oil">Oil</option>
        </Select>
        <Select name="stock_exchange" placeholder="Enter Stock Exchange" onChange={(e)=>handleChange(e)}>
            <option value="NSE">NSE</option>
            <option value="BSE">BSE</option>
           
        </Select>
        <Input name='total_shares' placeholder="Enter Company's Total Share" onChange={(e)=>handleChange(e)}/>
        <Input name='cost_per_share' placeholder="Enter Cost Per Share" onChange={(e)=>handleChange(e)}/>
        <Input name='price_action' placeholder="Enter Price Action" onChange={(e)=>handleChange(e)}/>
        <Input value={'List Stock'} type='submit'></Input>
        </form>
      </Flex>

      <DashboardData></DashboardData>
    </div>
  );
};

export default Dashboard;
