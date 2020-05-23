import React from "react";
import { Button, Table, Tab } from "semantic-ui-react";

export default () => {
  return (
    <Tab.Pane>
      <div className='p-1'>
        <Table selectable celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date Ordered</Table.HeaderCell>
              <Table.HeaderCell>Ordered From</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row className='cursor-pointer'>
              <Table.Cell>Friday</Table.Cell>
              <Table.Cell>Paula</Table.Cell>
              <Table.Cell>Delivered</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </Tab.Pane>
  );
};
