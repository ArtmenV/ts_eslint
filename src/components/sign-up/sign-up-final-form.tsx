import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import './sign-up-final-form.scss'


export const SignUpFinalForm: React.FC = (): any => {

    return (
      <div className="sign--up__button final_form">
        <NavLink to='/sign-up-final-form'>
          Sign Up Final Form
        </NavLink>
      </div>
    )
};



