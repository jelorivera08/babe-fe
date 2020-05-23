import React from "react";
import { Button, Table, Tab } from "semantic-ui-react";
import Incoming from "../components/Incoming";
import Outgoing from "../components/Outgoing";

const panes = [
  {
    menuItem: "Incoming",
    render: () => <Incoming />,
  },
  {
    menuItem: "Outgoing",
    render: () => <Outgoing />,
  },
];

export default ({}) => {
  return (
    <div className='w-full p-4 mt-4'>
      <Tab panes={panes} />
    </div>
  );
};
