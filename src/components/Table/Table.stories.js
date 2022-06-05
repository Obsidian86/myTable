import React from 'react';
import Table from './index.jsx';

const columns = [
  {
    label: "Test",
    attribute: "att_name",
    perm: true
  },
  {
    label: "Address",
    attribute: "addr"
  },
  {
    label: "new label",
    attribute: "amount",
    dataType: "number"
  }
];
const data = [
  {
    att_name: "att one",
    amount: "20000",
    addr: "123 test street"
  },
  {
    att_name: "att one",
    amount: "20000",
    addr: "123 test street"
  },
  {
    att_name: "att two",
    amount: "30000",
    addr: "4512 test street"
  },
  {
    component: (
      <div>
        test <p>okay here</p>
      </div>
    ),
    sortVal: "test"
  }
];

for (let i = 0; i < 50; i++) {
  data.push({
    att_name: `att ${i + 1}`,
    amount: 10 * (i + 1),
    addr: i + "92032 New street"
  });
}

export default {
  title: 'Table',
  component: Table,
};

export const Primary = () =>
  <Table columns={columns} rows={data} />
