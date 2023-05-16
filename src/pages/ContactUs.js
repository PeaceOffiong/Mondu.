import { SignUp, Mainfooter, Navbar } from "../components";
import { BsTwitter, BsFacebook, BsLinkedin } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { useGlobalContext } from "../context/context";

const ContactUs = () => {
  const { HandleContactSubmit } = useGlobalContext();

  return (
    <>
      <Navbar />
      <article>
        <b className="header two">Contact Support</b>
        <p className="abtp">
          For frequently asked questions and queries regarding onboarding, our
          range of payment solutions, and much more, check out our Support Hub
          to get your answers!<br></br>
          Can't find what you're looking for or interested to talk more about
          how we're innovating cross-border payments and global trade? We’re
          happy to hear from you. Simply fill in the form below and we’ll be in
          touch soon.
        </p>

        <div className="form-section">
          <form onSubmit={HandleContactSubmit}>
            <div className="personalDetails">
              <div className="formEach">
                <label htmlFor="FirstName">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  name="FirstName"
                  placeholder="Please input"
                />
              </div>

              <div className="formEach">
                <label htmlFor="Email">
                  <b>Email</b>
                </label>
                <input type="email" name="Email" placeholder="Please Input" />
              </div>

              <div className="formEach">
                <label htmlFor="PhoneNumber">
                  <b>Phone Number</b>
                </label>
                <input type="number" name="PhoneNumber" placeholder="+234" />
              </div>

              <div className="formEach">
                <label htmlFor="ContactMethod">
                  <b>Contact Method</b>
                </label>
                <select value="Dropdown" placeholder="Dropdown"></select>
              </div>

              <div className="Message">
                <label htmlFor="Message">
                  <b>Message</b>
                </label>
                <textarea
                  placeholder="Hi! We are Mondu..."
                  id="Message"
                  name="Message"
                ></textarea>
              </div>
            </div>

            <div className="policy">
              <input type="checkbox" name="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                <b>I agree with Mondu Privacy Policy</b>
              </label>
            </div>

            <input type="submit" value="Submit" />
          </form>
          <div className="address-details">
            <div className="eachSec">
              <p className="header spec">
                <b>Get in touch</b>
              </p>
              <p>
                Perferendis est inventore ratione. Et numquam cupiditate ut id
                delectus aut et. Aliquam ipsa ut beatae provident
              </p>
              <p className="link">Read more &#8594;</p>
            </div>

            <div className="eachSec">
              <p className="header spec">
                <b>Address</b>
              </p>
              <p>63751 Reichel Island,</p>
              <p>South Georgia and the South Sandwich Islands</p>
              <div className="icns">
                <p className="link">Send an email</p>
              </div>
              <div className="icns">
                <p className="link">Make a phone call</p>
              </div>
            </div>

            <div className="socials">
              <BsFacebook />
              <CgFigma />
              <BsTwitter />
              <BsLinkedin />
            </div>
          </div>
        </div>
      </article>
      <SignUp />
      <Mainfooter />
    </>
  );
};

export default ContactUs;
