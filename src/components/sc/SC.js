import React from "react";

import SCItem from "./SCItem";
import SCForm from "./SCForm";

const SC = ({ list, addSC }) => {
  return (
    <div>
      <ul>
        {list &&
          list.map(({ name }, index) => {
            return <SCItem key={index} name={name} />;
          })}
      </ul>
      <SCForm addSC={addSC} />
    </div>
  );
};

export default SC;
