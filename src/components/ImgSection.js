const ImgSection = ({ Img, Title, Text }) => {
  return (
    <>
        <aside className="text-container ">
          <h3>{Title}</h3>
          <p>{Text}</p>
        </aside>
        <aside className="inner">
          <div className="graph-images">
            <Img />
          </div>
        </aside>
    </>
  );
};

export default ImgSection;
