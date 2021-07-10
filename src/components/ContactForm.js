import React, {useState, useEffect} from 'react';

const ContactForm = (props) => {
    
    const initializeFieldValues = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }

    var [values, setValues] = useState(initializeFieldValues)

    useEffect(()=>{
            if(props.currentId=='')
                setValues({
                    ...initializeFieldValues
                })
            else
                setValues({
                    ...props.contactObjects[props.currentId]
                })
    },[props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var {name, value} = e.target
        setValues({
            ...values,
            [name] : value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();  
        props.addorEdit(values); 
    }

    return(
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="fullName" placeholder="Full Name" 
                 value={values.fullName} 
                 onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div> 
                    </div>
                    <input className="form-control" name="mobile" placeholder="Mobile" 
                     value={values.mobile} 
                     onChange={handleInputChange}
                    />
                </div>
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" name="email" placeholder="Email" 
                     value={values.email} 
                     onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="form-group">
                    <textarea className="form-control" name="address" placeholder="Address" 
                     value={values.address} 
                     onChange={handleInputChange}
                    />
            </div>
            <div className="form-group">
                <input type="email" value={props.currentId==''?"Save":"Update"} type="submit" className="btn btn-primary btn-block"/>
            </div>
        </form>
    );
}

export default ContactForm;