import { SignUp, Mainfooter, Navbar } from "../components";
import { docsData } from "../data/index";
import { useGlobalContext } from "../context/context";

const Documentation = () => {
  const { HandleTab, docsIndex } = useGlobalContext();
  return (
    <>
      <Navbar />
      <article>
        <b className="header two">Documentation</b>
        <p className="abtp">
          All Alliancepay documentation are designed with one goal in mind;
          Simplicity.
        </p>
        <b className="header two">Build Your Own Custom Experiences</b>
        <p className="abtp">
          Our API libraries provide developers with the tools they need to
          create custom experiences for their users. With our API libraries,
          developers can access data and functionality from our platform to
          build new applications or integrate with existing ones. By leveraging
          our APIs, developers can create unique user experiences that are
          tailored to their specific needs and requirements.
        </p>
        <div className="Tab Section">
          {docsData.map((each, indx) => {
            return <button onClick={()=> HandleTab(indx)} className={docsIndex === indx ? "activeTab" : ""}>{each.Header}</button>;
          })}
        </div>
        <div className="resource-topics">
          <div className="header spec">
            <h2>
              <b>{docsData[docsIndex].Header}</b>
            </h2>
          </div>
          {docsData[docsIndex].Topics.map((each) => {
            return <div className="topics">
                <p>{each}</p>
                <p className="symbol">&#8964;</p>
            </div>
          })}
        </div>
      </article>
      <SignUp />
      <Mainfooter />
    </>
  );
};

export default Documentation;
