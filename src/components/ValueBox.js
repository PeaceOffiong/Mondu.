const ValueBox = ({ Img, Title, Text }) => {
  return (
    <>
      <div className="cards sets">
        <Img />
        <h3 className="bold">{Title}</h3>
        <p>
          {Text}
        </p>
      </div>
    </>
  );
};

export default ValueBox;
