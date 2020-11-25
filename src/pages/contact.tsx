import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import * as yup from "yup";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import PageTitle from "../components/PageTitle";
import FormRender, { FormErrors } from "../hoc/FormRender";

interface ContactForm {
  firstName: string;
  lastName: string;
  companyName: string;
  address: string;
  city: string;
  country: string;
  email: string;
  phoneNo: string;
  subject: string;
  message: string;
}

const validateSchema = yup.object().shape<ContactForm>({
  firstName: yup
    .string()
    .required("Required.")
    .min(3, "First name is too short")
    .max(50, "First name maximum characters allowed 50"),
  lastName: yup
    .string()
    .required("Required.")
    .min(3, "Last name is too short")
    .max(50, "Last name maximum characters allowed 50"),
  companyName: yup
    .string()
    .required("Required.")
    .min(2, "Company name is too short")
    .max(50, "Company name maximum characters allowed 50"),
  address: yup
    .string()
    .required("Required.")
    .min(2, "Company name is too short")
    .max(50, "Company name maximum characters allowed 50"),
  city: yup
    .string()
    .required("Required.")
    .min(2, "Company name is too short")
    .max(50, "Company name maximum characters allowed 50"),
  country: yup
    .string()
    .required("Required.")
    .min(2, "Company name is too short")
    .max(50, "Company name maximum characters allowed 50"),
  email: yup.string().required("Required.").email("Enter valid email address"),
  phoneNo: yup.string().required("Required"),
  subject: yup
    .string()
    .required("Required.")
    .min(3, "Subject line is too short.")
    .max(100, "Subject line maximum characters allowed 100"),
  message: yup
    .string()
    .required("Required.")
    .min(3, "Message is too short.")
    .max(500, "Message is too long."),
});

const Contact: React.FC = () => {
  const formInitValues: ContactForm = {
    subject: "",
    email: "",
    firstName: "",
    address: "",
    city: "",
    companyName: "",
    country: "",
    lastName: "",
    message: "",
    phoneNo: "",
  };

  const formErrorsInit: FormErrors<ContactForm> = {
    subject: "",
    email: "",
    firstName: "",
    address: "",
    city: "",
    companyName: "",
    country: "",
    lastName: "",
    message: "",
    phoneNo: "",
  };

  const [formValues, setFormValues] = useState<ContactForm>(formInitValues);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");

  const handleSubmit = async (value: ContactForm) => {
    setLoading(true);
    setError(false);
    setResponse("");
    setTimeout(() => {
      setLoading(false);
      setResponse("Thank you for contacting us. Will respond shortly.");
      setFormValues(formInitValues);
    }, 2000);
    // try {
    //   await axiosClient().post("/emailContact", value);
    //   setLoading(false);
    //   setResponse("Thank you for contacting us. Will respond shortly.");
    //   setFormValues(formInitValues);
    // } catch (err) {
    //   setLoading(false);
    //   setError(true);
    //   setResponse("Something went wrong, please try again.");
    // }
  };

  return (
    <Layout pageTitle="Contact Us | Shenzhen Sam Steel Exports">
      {loading ? <Loader /> : null}

      <PageTitle heading="Contact Us" />
      <div className="contact-form">
        <div className="address-section">
          <div className="logo-contact-img">
            <div className="logo-contact">
              <img
                src="/images/logo-with-text.png"
                alt="Shenzhen Sam Steel Logo"
              />
            </div>
            <div className="contact-img">
              <img src="/images/contact-us.png" alt="Contact us" />
            </div>
          </div>

          <div className="address">
            Shangmeishidai Building.
            <br />
            No. 57 Longgang East Room.
            <br />
            Longhua Distt.
            <br />
            Shanzhen, China.
          </div>

          <div className="contacts">
            <div className="block">
              <div className="heading">Phone:</div>
              <div className="line">+86 1 371 459 8749</div>
            </div>
            <div className="block">
              <div className="heading">Export Manager:</div>
              <div className="line">+86 1 372 432 2268</div>
            </div>
            <div className="block">
              <div className="heading">Fax:</div>
              <div className="line">+86 755 33 26 3717</div>
            </div>
            <div className="block">
              <div className="heading">Email (For General Inquires):</div>
              <div className="line">info@ssieltd.com</div>
              <div className="line">ssamieco01@qq.com</div>
            </div>
            <div className="block">
              <div className="heading">Email (Sales Manager):</div>
              <div className="line">ssamieco@qq.com</div>
            </div>
          </div>
        </div>

        <div className={"form-section"}>
          <Paper style={{ borderRadius: "1rem" }}>
            {response !== "" ? (
              <div
                style={{
                  color: `${error ? "red" : "green"}`,
                  fontSize: "1rem",
                  paddingTop: "2rem",
                  textAlign: "center",
                }}
              >
                {response}
              </div>
            ) : null}
            <FormRender
              initValues={formInitValues}
              initErrors={formErrorsInit}
              validateSchema={validateSchema}
              onSubmit={handleSubmit}
              setFormValues={setFormValues}
              formValues={formValues}
              render={(bag) => {
                return (
                  <form onSubmit={bag.onSubmit} onReset={bag.onReset}>
                    <TextField
                      label="First Name"
                      id="firstName"
                      name="firstName"
                      variant="standard"
                      margin={"dense"}
                      value={bag.values.firstName}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      helperText={bag.errors.firstName}
                      error={bag.errors.firstName !== ""}
                    />
                    <TextField
                      label="Last Name"
                      id="lastName"
                      name="lastName"
                      variant="standard"
                      margin={"dense"}
                      value={bag.values.lastName}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      helperText={bag.errors.lastName}
                      error={bag.errors.lastName !== ""}
                    />
                    <TextField
                      label="Company Name"
                      id="companyName"
                      name="companyName"
                      variant="standard"
                      margin={"dense"}
                      value={bag.values.companyName}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      helperText={bag.errors.companyName}
                      error={bag.errors.companyName !== ""}
                    />
                    <TextField
                      label="Address"
                      id="address"
                      name="address"
                      variant="standard"
                      margin={"dense"}
                      value={bag.values.address}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      helperText={bag.errors.address}
                      error={bag.errors.address !== ""}
                    />
                    <TextField
                      label="City"
                      id="city"
                      name="city"
                      variant="standard"
                      margin={"dense"}
                      value={bag.values.city}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      helperText={bag.errors.city}
                      error={bag.errors.city !== ""}
                    />
                    <TextField
                      label="Country"
                      id="country"
                      name="country"
                      variant="standard"
                      margin={"dense"}
                      value={bag.values.country}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      helperText={bag.errors.country}
                      error={bag.errors.country !== ""}
                    />
                    <TextField
                      label="Email"
                      id="email"
                      name="email"
                      variant="standard"
                      margin={"dense"}
                      value={bag.values.email}
                      helperText={bag.errors.email}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      error={bag.errors.email !== ""}
                    />
                    <TextField
                      label="Phone Number"
                      id="phoneNo"
                      name="phoneNo"
                      margin={"dense"}
                      variant="standard"
                      value={bag.values.phoneNo}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      className={"text-fields"}
                      helperText={bag.errors.phoneNo}
                      error={bag.errors.phoneNo !== ""}
                    />
                    <TextField
                      label="Subject"
                      id="subject"
                      name="subject"
                      variant="standard"
                      margin={"dense"}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      value={bag.values.subject}
                      className={"text-fields"}
                      helperText={bag.errors.subject}
                      error={bag.errors.subject !== ""}
                    />
                    <TextField
                      label="Message"
                      id="message"
                      name="message"
                      variant="standard"
                      margin={"dense"}
                      multiline={true}
                      value={bag.values.message}
                      onChange={bag.onChange}
                      onBlur={bag.onBlur}
                      rows={8}
                      className={"text-fields"}
                      helperText={bag.errors.message}
                      error={bag.errors.message !== ""}
                    />
                    <ButtonGroup className={"btn-group"}>
                      <Button
                        type={"submit"}
                        variant="outlined"
                        color="primary"
                        disableElevation
                      >
                        Send
                      </Button>
                      <Button
                        type={"reset"}
                        variant="outlined"
                        color="default"
                        disableElevation
                      >
                        Cancel
                      </Button>
                    </ButtonGroup>
                  </form>
                );
              }}
            />
          </Paper>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
