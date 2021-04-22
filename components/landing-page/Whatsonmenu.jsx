import React from "react";

const Onmenu = () => {
  const Values = [
    {
      url: "../../assets/indian.jpg",
      text: "INDIAN",
      backgroudColor: "#CCCCCC",
    },
    {
      url: "../../assets/breakFast.jpg",
      text: "BREAKFAST",
      backgroudColor: "#CCCCCC",
    },
    {
      url: "../../assets/italian.jpg",
      text: "ITALIAN",
      backgroudColor: "#CCCCCC",
    },
    {
      url: "../../assets/alcohol.jpg",
      text: "ALCOHOL",
      backgroudColor: "#CCCCCC",
    },

    {
      url: "../../assets/mexican.png",
      text: "MEXICAN",
      backgroudColor: "#CCCCCC",
    },
    {
      url: "../../assets/backery.jpg",
      text: "BACKERY",
      backgroudColor: "#CCCCCC",
    },
  ];
  return (
    <div>
      <h1 className='lg:text-4xl text-2xl italic text-center transition-opacity'>What's on the menu</h1>
      <div className="whatOnTheMenuPar">
        <div
          style={{ width: "299px", position: "relative" }}
        >
          <img
            src="../../assets/burger.png"
            className='whats_on_menu_burger_pic'
          />
          <p
            style={{
              backgroundColor: "#CCCCCC",
              width: "300px",
              color: "#000000",
              position: "absolute",
              justifyContent: "center",
              textAlign: "center",
              verticalAlign: "middle",
              borderRadius: "3px",
              bottom: "5px",
              left: "-0px",
              height: "57px",
              lineHeight: "57px",
            }}
          >
            BUGGERS
          </p>
          </div>
        <div
          className="whatOnTheMenuChil2"
          style={{ width: "800px" }}
        >
          {Values.map((values) => (
            <div className="whatOnTheMenuChil3">
              <img
                src={values.url}
                style={{
                  width: "243px",
                  height: "220px",
                  left: "539px",
                  top: "1002px",
                  borderRadius: "3px",
                }}
              />
              <p
                style={{
                  backgroundColor: `${values.backgroudColor}`,
                  width: "243px",
                  color: "#000000",
                  position: "absolute",
                  justifyContent: "center",
                  textAlign: "center",
                  verticalAlign: "middle",
                  borderRadius: "3px",
                  bottom: "0px",
                  left: "-0px",
                  height: "57px",
                  lineHeight: "57px",
                }}
              >
                {values.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Onmenu;
