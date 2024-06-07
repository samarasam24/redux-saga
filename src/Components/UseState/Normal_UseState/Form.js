import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
export function NonApiForm( { editId,addOrEdit,allUserData } ) {
    
    const navigate = useNavigate(); 
    const [ userData,SetUserData ] = useState(
        {
            userName:'',
            userPassword:''
        }
    ); 

    useEffect(() => {

    if(editId !== null) {  
       SetUserData({
        ...allUserData,
        userName:allUserData[editId].userName,
        userPassword:allUserData[editId].userPassword,
       });
    }
    },[editId,allUserData])

    const handleChange = (e) => {

        const { name,value } = e.target;
        SetUserData(
            {
                ...userData,
                [name]:value
            }
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
      addOrEdit(userData);
      SetUserData(
        {
            userName:'',
            userPassword:''
        }
      ); 
      navigate('/non-api-table-content');
    };
 
    return( 
        <div className="position-absolute w-100" id="withoutApiForm">
            <form
            className=" container-fluid col-4 mt-5 mx-auto d-flex flex-column border border-dark p-5 py-4 gap-2 rounded"
            onSubmit={handleSubmit}>
            <h1>UseState Non-Api</h1>
            <label>Name:</label>
            <input
            onChange={ handleChange }
            name="userName"
            value={userData.userName}/>

            <label>Password:</label>
            <input
            onChange={ handleChange }
            name="userPassword"
            value={userData.userPassword}/>

            <button className="align-self-end me-2 rounded btn-primary">Submit</button>
        </form>
         
        </div>
    );
};