import React from "react";

type props = {
  text: string;
  children?: any;
};

const ContentArea: React.FC<props> = (props) => {
  const { text, children } = props;
  return (
    <>
      <div className="headlineArea">
        <div className="headline">
          <h3 className="headBox">{`${text}`}</h3>
        </div>
      </div>
      <article>{children}</article>
    </>
  );
};

export default ContentArea;
