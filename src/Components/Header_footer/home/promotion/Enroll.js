import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import FormFields from "./../../Ui/formFields";
import {validate} from "../../Ui/misc";
class Enroll extends Component {
  state = {
    formError: false,
    formSuccess: "",
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          name: "email_input",
          type: "email",
          placeholder: "Enter you email",
        },
        validation: {
          required: true,
          email: true,
        },
        valid: false,
        vaildationMessage: "",
      },
    },
  };

  onSubmitForm() {}

  updateForm(element) {
    const newFormdata = { ...this.state.formdata };
    const newElement = { ...newFormdata[element.id] };

    newElement.value = element.event.target.value;
    
    let validData = validate(newElement)
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1]    
    
    newFormdata[element.id] = newElement;
    
    console.log(newFormdata)
    this.setState({
      formdata: newFormdata,
    });
  }

  render() {
    return (
      <Fade>
        <div className="enroll_wrapper">
          <form onSubmit={(event) => this.submitForm(event)}>
            <div className="enroll_title">Enter your email</div>

            <div className="enroll_input">
              <FormFields
                id={"email"}
                formdata={this.state.formdata.email}
                change={(element) => this.updateForm(element)}
              />
            </div>
          </form>
        </div>
      </Fade>
    );
  }
}

export default Enroll;
