/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from 'react';
import styled from 'styled-components';
import { graphql, preloadQuery, usePreloadedQuery } from 'react-relay/hooks';
import {
  Button, Menu, Table,
} from 'semantic-ui-react';
import { commitMutation } from 'react-relay';

import AppEnvironment from '../../../../environment';

const query = graphql`
  query ProductsListQuery {
    products {
      name
      amount
    }
  }
  `;

const mutation = graphql`
    mutation ProductsListMutation(
      $name : String!
      $amount: Int!
    ) {
      createProduct(
        name: $name
        amount: $amount) {
        name
        amount
      }
    }
`;

const ListContainer = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 94px);
`;

const result = preloadQuery(
  AppEnvironment,
  query,
);

const formatNumber = (num) => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

const ProductsList = () => {
  const { products } = usePreloadedQuery(query, result);
  const [productToBeAdded, setProductToBeAdded] = useState({});

  const handleAddProductClick = (values) => {
    if (Number.isNaN(parseInt(values.amount, 10))) return;

    const variables = {
      name: values.name,
      amount: Number.parseInt(values.amount, 10),
    };

    commitMutation(
      AppEnvironment,
      {
        mutation,
        variables,
        updater: (store) => {
          const payload = store.getPluralRootField('createProduct');
          const root = store.getRoot();
          root.setLinkedRecords([...payload], 'products');
        },
        onError: (err) => console.error(err),
        onCompleted: () => setProductToBeAdded({}),
      },
    );
  };

  const isAddingProduct = productToBeAdded.name !== undefined;


  return (
    <div className="w-full">
      <div className="m-8 pt-4 text-xl">Products</div>
      <ListContainer className="w-full p-6">

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell className="w-1/2">Product Name</Table.HeaderCell>
              <Table.HeaderCell className="w-1/2">Amount</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              products.map(({ name, amount }) => (
                <Table.Row key={name}>
                  <Table.Cell>{name}</Table.Cell>

                  <Table.Cell>{`₱ ${formatNumber((amount).toFixed(2))}`}</Table.Cell>
                </Table.Row>

              ))
            }
            {
              productToBeAdded.name !== undefined
                ? (
                  <Table.Row>
                    <Table.Cell>
                      <input
                        autoFocus
                        value={productToBeAdded.name}
                        onChange={(e) => setProductToBeAdded({
                          ...productToBeAdded,
                          name: e.target.value,
                        })}
                        className="outline-none"
                      />
                    </Table.Cell>

                    <Table.Cell>
                      <input
                        value={productToBeAdded.amount}
                        onChange={(e) => {
                          if (Number.isNaN(parseInt(e.target.value, 10)) && e.target.value !== '') return;

                          setProductToBeAdded({
                            ...productToBeAdded,
                            amount: e.target.value,
                          });
                        }}
                        className="outline-none"
                      />
                    </Table.Cell>
                  </Table.Row>
                )
                : null
            }
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="3">
                <Menu floated="right">
                  <Button
                    color={isAddingProduct ? 'green' : 'blue'}
                    onClick={() => {
                      if (isAddingProduct) {
                        handleAddProductClick(productToBeAdded);
                      } else {
                        setProductToBeAdded({ name: '', amount: '' });
                      }
                    }}
                    style={{ marginRight: '0px' }}

                  >
                    { isAddingProduct ? 'Confirm' : 'Add Product'}
                  </Button>

                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>


      </ListContainer>
    </div>
  );
};

export default ProductsList;
