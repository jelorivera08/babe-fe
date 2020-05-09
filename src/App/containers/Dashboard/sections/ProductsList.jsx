/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState } from "react";
import styled from "styled-components";
import { graphql, preloadQuery, usePreloadedQuery } from "react-relay/hooks";
import { Button, Menu, Table, Input, Icon } from "semantic-ui-react";
import { commitMutation } from "react-relay";

import AppEnvironment from "../../../../environment";

const query = graphql`
  query ProductsListQuery {
    products {
      name
      regionalAmount
      provincialAmount
      resellerAmount
    }
  }
`;

const mutation = graphql`
  mutation ProductsListMutation(
    $name: String!
    $regionalAmount: Int!
    $provincialAmount: Int!
    $resellerAmount: Int!
  ) {
    createProduct(
      name: $name
      regionalAmount: $regionalAmount
      provincialAmount: $provincialAmount
      resellerAmount: $resellerAmount
    ) {
      name
      regionalAmount
      provincialAmount
      resellerAmount
    }
  }
`;

const updateProductMutation = graphql`
  mutation ProductsListUpdateMutation(
    $name: String!
    $regionalAmount: Int!
    $resellerAmount: Int!
    $provincialAmount: Int!
  ) {
    updateProduct(
      name: $name
      regionalAmount: $regionalAmount
      resellerAmount: $resellerAmount
      provincialAmount: $provincialAmount
    ) {
      name
      regionalAmount
      resellerAmount
      provincialAmount
    }
  }
`;

const deleteProductMutation = graphql`
  mutation ProductsListDeleteMutation($name: String!) {
    deleteProduct(name: $name) {
      name
    }
  }
`;

const ListContainer = styled.div`
  overflow-y: scroll;
  height: calc(100vh - 94px);
`;

const result = preloadQuery(AppEnvironment, query);

const formatNumber = (num) =>
  num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

const ProductsList = () => {
  const { products } = usePreloadedQuery(query, result);
  const [productToBeAdded, setProductToBeAdded] = useState({});
  const [productEdit, setProductEdit] = useState({ name: null });

  const handleAddProductClick = (values) => {
    if (
      Number.isNaN(parseInt(values.regionalAmount, 10)) ||
      Number.isNaN(parseInt(values.provincialAmount, 10)) ||
      Number.isNaN(parseInt(values.resellerAmount, 10))
    ) {
      return;
    }

    const variables = {
      name: values.name,
      regionalAmount: Number.parseInt(values.regionalAmount, 10),
      provincialAmount: Number.parseInt(values.provincialAmount, 10),
      resellerAmount: Number.parseInt(values.resellerAmount, 10),
    };

    commitMutation(AppEnvironment, {
      mutation,
      variables,
      updater: (store) => {
        const payload = store.getPluralRootField("createProduct");
        const root = store.getRoot();
        root.setLinkedRecords([...payload], "products");
      },
      onError: (err) => console.error(err),
      onCompleted: () => setProductToBeAdded({}),
    });
  };

  const updateProduct = (values) => {
    if (
      Number.isNaN(parseInt(values.regionalAmount, 10)) ||
      Number.isNaN(parseInt(values.provincialAmount, 10)) ||
      Number.isNaN(parseInt(values.resellerAmount, 10))
    ) {
      return;
    }

    const variables = {
      name: values.name,
      regionalAmount: Number.parseInt(values.regionalAmount, 10),
      provincialAmount: Number.parseInt(values.provincialAmount, 10),
      resellerAmount: Number.parseInt(values.resellerAmount, 10),
    };

    commitMutation(AppEnvironment, {
      mutation: updateProductMutation,
      variables,
      updater: (store) => {
        try {
          const payload = store.getRootField("updateProduct");
          const root = store.getRoot();
          const products = root.getLinkedRecords("products");

          const toBeEditedProductIndex = products.findIndex(
            (product) => product.getValue("name") === payload.getValue("name")
          );

          const newProducts = [...products];
          newProducts[toBeEditedProductIndex] = payload;
          root.setLinkedRecords(newProducts, "products");

          setProductEdit({ name: null });
        } catch (err) {
          console.log(err);
        }
      },
      onError: (err) => console.error(err),
      onCompleted: () =>
        setProductEdit({
          name: null,
        }),
    });
  };

  const deleteProduct = (name) => {
    const variables = {
      name,
    };

    commitMutation(AppEnvironment, {
      mutation: deleteProductMutation,
      variables,
      updater: (store) => {
        try {
          const payload = store.getRootField("deleteProduct");
          const root = store.getRoot();
          const products = root.getLinkedRecords("products");

          const newProducts = products.filter(
            (product) => product.getValue("name") !== payload.getValue("name")
          );

          root.setLinkedRecords(newProducts, "products");
        } catch (err) {
          console.log(err);
        }
      },
      onError: (err) => console.error(err),
      onCompleted: () =>
        setProductEdit({
          name: null,
        }),
    });
  };

  const isAddingProduct = productToBeAdded.name !== undefined;

  return (
    <div className='w-full'>
      <div className='m-8 pt-4 text-xl'>Products</div>
      <ListContainer className='w-full p-6'>
        <Table celled selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Product Name</Table.HeaderCell>
              <Table.HeaderCell>Regional Amount</Table.HeaderCell>
              <Table.HeaderCell>Provincial Amount</Table.HeaderCell>
              <Table.HeaderCell>Reseller Amount</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {products.map(
              ({ name, regionalAmount, provincialAmount, resellerAmount }) => {
                if (name === productEdit.name) {
                  return (
                    <Table.Row key={name}>
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>
                        <Input
                          value={productEdit.regionalAmount}
                          onChange={(e) =>
                            setProductEdit({
                              ...productEdit,
                              regionalAmount: parseInt(e.target.value),
                            })
                          }
                        />
                      </Table.Cell>

                      <Table.Cell>
                        <Input
                          value={productEdit.provincialAmount}
                          onChange={(e) =>
                            setProductEdit({
                              ...productEdit,
                              provincialAmount: parseInt(e.target.value),
                            })
                          }
                        />
                      </Table.Cell>

                      <Table.Cell>
                        <Input
                          value={productEdit.resellerAmount}
                          onChange={(e) =>
                            setProductEdit({
                              ...productEdit,
                              resellerAmount: parseInt(e.target.value),
                            })
                          }
                        />
                      </Table.Cell>
                      <Table.Cell>
                        <Icon
                          onClick={(e) => {
                            e.stopPropagation();

                            deleteProduct(name);
                          }}
                          className='cursor-pointer'
                          name='trash'
                        />
                      </Table.Cell>
                    </Table.Row>
                  );
                } else {
                  return (
                    <Table.Row
                      onClick={() =>
                        setProductEdit({
                          name,
                          regionalAmount,
                          provincialAmount,
                          resellerAmount,
                        })
                      }
                      key={name}
                    >
                      <Table.Cell>{name}</Table.Cell>
                      <Table.Cell>{`₱ ${formatNumber(
                        regionalAmount.toFixed(2)
                      )}`}</Table.Cell>

                      <Table.Cell>{`₱ ${formatNumber(
                        provincialAmount.toFixed(2)
                      )}`}</Table.Cell>

                      <Table.Cell>{`₱ ${formatNumber(
                        resellerAmount.toFixed(2)
                      )}`}</Table.Cell>

                      <Table.Cell>
                        <Icon
                          onClick={(e) => {
                            e.stopPropagation();

                            deleteProduct(name);
                          }}
                          className='cursor-pointer'
                          name='trash'
                        />
                      </Table.Cell>
                    </Table.Row>
                  );
                }
              }
            )}
            {productToBeAdded.name !== undefined ? (
              <Table.Row>
                <Table.Cell>
                  <Input
                    autoFocus
                    value={productToBeAdded.name}
                    onChange={(e) =>
                      setProductToBeAdded({
                        ...productToBeAdded,
                        name: e.target.value,
                      })
                    }
                  />
                </Table.Cell>

                <Table.Cell>
                  <Input
                    value={productToBeAdded.regionalAmount}
                    onChange={(e) => {
                      if (
                        Number.isNaN(parseInt(e.target.value, 10)) &&
                        e.target.value !== ""
                      )
                        return;

                      setProductToBeAdded({
                        ...productToBeAdded,
                        regionalAmount: e.target.value,
                      });
                    }}
                  />
                </Table.Cell>

                <Table.Cell>
                  <Input
                    value={productToBeAdded.provincialAmount}
                    onChange={(e) => {
                      if (
                        Number.isNaN(parseInt(e.target.value, 10)) &&
                        e.target.value !== ""
                      )
                        return;

                      setProductToBeAdded({
                        ...productToBeAdded,
                        provincialAmount: e.target.value,
                      });
                    }}
                  />
                </Table.Cell>

                <Table.Cell>
                  <Input
                    value={productToBeAdded.resellerAmount}
                    onChange={(e) => {
                      if (
                        Number.isNaN(parseInt(e.target.value, 10)) &&
                        e.target.value !== ""
                      )
                        return;

                      setProductToBeAdded({
                        ...productToBeAdded,
                        resellerAmount: e.target.value,
                      });
                    }}
                    className='outline-none'
                  />
                </Table.Cell>

                <Table.Cell>{null}</Table.Cell>
              </Table.Row>
            ) : null}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='5'>
                <Menu floated='right'>
                  {isAddingProduct ? (
                    <Button
                      color='red'
                      onClick={() => {
                        setProductToBeAdded({});
                      }}
                      style={{ marginRight: "1rem" }}
                    >
                      Cancel
                    </Button>
                  ) : null}

                  <Button
                    color={
                      isAddingProduct || productEdit.name !== null
                        ? "green"
                        : "blue"
                    }
                    onClick={() => {
                      if (isAddingProduct) {
                        handleAddProductClick(productToBeAdded);
                      } else if (productEdit.name !== null) {
                        updateProduct(productEdit);
                      } else {
                        setProductToBeAdded({
                          name: "",
                          regionalAmount: "",
                          provincialAmount: "",
                          resellerAmount: "",
                        });
                      }
                    }}
                    style={{ marginRight: "0px" }}
                  >
                    {isAddingProduct
                      ? "Confirm"
                      : productEdit.name !== null
                      ? "Confirm"
                      : "Add Product"}
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
