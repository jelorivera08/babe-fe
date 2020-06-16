/* eslint-disable  no-restricted-globals */

import React, { useState } from "react";
import styled from "styled-components";
import { Dropdown, Input, Card, Image, Button, Modal } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import { QueryRenderer, graphql, commitMutation } from "react-relay";

import logo1 from "../../../assets/images/logo1.PNG";
import environment from "../../../environment";
import axios from "axios";

import { API } from "../../../constants";

const PrimaryBar = styled.div`
  background-color: #f9c5d1;
  background-image: linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%);
  min-width: 4rem;
`;

const updateUserMutation = graphql`
  mutation ProfileUpdateUserMutation(
    $username: String!
    $firstName: String
    $surname: String
    $accountType: String
    $facebookURL: String
    $instagramURL: String
    $areaOfDistribution: String
    $address: String
    $region: String
  ) {
    updateUser(
      username: $username
      firstName: $firstName
      surname: $surname
      accountType: $accountType
      facebookURL: $facebookURL
      instagramURL: $instagramURL
      address: $address
      areaOfDistribution: $areaOfDistribution
      region: $region
    ) {
      firstName
      surname
      accountType
      imageUrl
      facebookURL
      instagramURL
      address
      areaOfDistribution
      region
    }
  }
`;

export default () => {
  const history = useHistory();
  const [userInfoToBeUpdated, setUserInfoToBeUpdated] = useState({});
  const [updateComplete, setUpdateComplete] = useState(false);
  const [imgFileToUpload, setImgFileToUpload] = useState({});

  const commitUpdateUser = (values) => {
    if (imgFileToUpload.src) {
      const formData = new FormData();
      formData.append("file", imgFileToUpload.imgFile);
      formData.append("username", values.username);

      axios.post(`${API}/upload`, formData, {});
    }

    return commitMutation(environment, {
      mutation: updateUserMutation,
      variables: { ...values },
      updater: (store) => {
        const payload = store.getRootField("updateUser");

        const root = store.getRoot();

        payload.setValue(
          root.getLinkedRecord("userInfo").getValue("imageUrl"),
          "imageUrl"
        );

        root.setLinkedRecord(payload, "userInfo");

        setUserInfoToBeUpdated({});
        setUpdateComplete(true);
      },
      onError: (err) => console.error(err),
    });
  };

  return (
    <QueryRenderer
      environment={environment}
      query={graphql`
        query ProfileUserInfoQuery {
          userInfo {
            username
            firstName
            facebookURL
            imageUrl
            instagramURL
            surname
            accountType
            address
            areaOfDistribution
            region
          }
        }
      `}
      variables={{}}
      render={({ error, props }) => {
        if (props) {
          const {
            username,
            firstName,
            facebookURL,
            imageUrl,
            instagramURL,
            surname,
            accountType,
            address,
            areaOfDistribution,
            region,
          } = props.userInfo;

          return (
            <div className="w-full flex">
              <Modal
                size="tiny"
                dimmer="inverted"
                open={updateComplete}
                onClose={() => setUpdateComplete(false)}
              >
                <Modal.Header>Update Completed</Modal.Header>
                <Modal.Content>
                  <div>
                    Your account status will be switch to PENDING and will be
                    logged out.
                  </div>
                  <div>
                    Please contact your admin to approve your account status.
                  </div>
                </Modal.Content>
                <Modal.Actions>
                  <Button
                    positive
                    icon="checkmark"
                    labelPosition="right"
                    content="Okay"
                    onClick={() => {
                      setUpdateComplete(false);

                      localStorage.clear();
                      history.push("/");
                    }}
                  />
                </Modal.Actions>
              </Modal>

              <PrimaryBar className="h-screen w-16 p-2 flex flex-col justify-between">
                <img className="cursor-pointer" src={logo1} alt="logo1" />

                <div
                  role="button"
                  tabIndex="0"
                  className="flex justify-center items-center mt-1 mb-2"
                >
                  <Dropdown pointing="left" icon="user circle">
                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          history.push("/dashboard");
                        }}
                        text="Dashboard"
                      />

                      <Dropdown.Item
                        onClick={() => {
                          history.push("/profile");
                        }}
                        text="Profile"
                      />
                      <Dropdown.Item
                        onClick={() => {
                          window.localStorage.removeItem("accessToken");
                          history.push("/");
                          window.location.reload();
                        }}
                        text="Log out"
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </PrimaryBar>
              <div className="w-full h-full overflow-auto p-16">
                <div className="text-2xl font-bold">Your Profile</div>

                <div className="flex">
                  <div>
                    <div className="my-2 flex">
                      <div>
                        <div>First Name</div>
                        <div>
                          <Input
                            onChange={(e) => {
                              setUserInfoToBeUpdated({
                                ...userInfoToBeUpdated,
                                firstName: e.target.value,
                              });
                            }}
                            value={userInfoToBeUpdated.firstName || firstName}
                          />
                        </div>
                      </div>
                      <div className="ml-12">
                        <div>
                          <div>Surname</div>
                          <div>
                            <Input
                              value={userInfoToBeUpdated.surname || surname}
                              onChange={(e) => {
                                setUserInfoToBeUpdated({
                                  ...userInfoToBeUpdated,
                                  surname: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-2 flex">
                      <div>
                        <div>Username</div>
                        <div>
                          <Input value={username} disabled={true} />
                        </div>
                      </div>

                      <div className="ml-12">
                        <div>Account Type</div>
                        <div>
                          <Input
                            value={
                              userInfoToBeUpdated.accountType || accountType
                            }
                            onChange={(e) => {
                              setUserInfoToBeUpdated({
                                ...userInfoToBeUpdated,
                                accountType: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="my-2 flex">
                      <div>
                        <div>Facebook URL</div>
                        <div>
                          <Input
                            value={
                              userInfoToBeUpdated.facebookURL || facebookURL
                            }
                            onChange={(e) => {
                              setUserInfoToBeUpdated({
                                ...userInfoToBeUpdated,
                                facebookURL: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="ml-12">
                        <div>Instagram URL</div>
                        <div>
                          <Input
                            value={
                              userInfoToBeUpdated.instagramURL || instagramURL
                            }
                            onChange={(e) => {
                              setUserInfoToBeUpdated({
                                ...userInfoToBeUpdated,
                                instagramURL: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="my-2 flex">
                      <div>
                        <div>Address</div>
                        <div>
                          <Input
                            value={userInfoToBeUpdated.address || address}
                            onChange={(e) => {
                              setUserInfoToBeUpdated({
                                ...userInfoToBeUpdated,
                                address: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                      <div className="ml-12">
                        <div>Area of Distribution</div>
                        <div>
                          <Input
                            value={
                              userInfoToBeUpdated.areaOfDistribution ||
                              areaOfDistribution
                            }
                            onChange={(e) => {
                              setUserInfoToBeUpdated({
                                ...userInfoToBeUpdated,
                                areaOfDistribution: e.target.value,
                              });
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div>Region</div>
                      <div>
                        <Input
                          value={userInfoToBeUpdated.region || region}
                          onChange={(e) => {
                            setUserInfoToBeUpdated({
                              ...userInfoToBeUpdated,
                              region: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="my-2 ml-8">
                    <Card>
                      <Image
                        src={imgFileToUpload.src || imageUrl}
                        alt="user profile"
                      />
                      <Card.Content extra>
                        <input
                          className="appearance-none w-full py-2 px-3 text-gray-700  focus:outline-none focus:shadow-outline"
                          name="userPhoto"
                          type="file"
                          onChange={(e) => {
                            const file = event.target.files[0];

                            setImgFileToUpload({
                              imgFile: file,
                              src: URL.createObjectURL(file),
                            });
                          }}
                        />
                      </Card.Content>
                    </Card>
                  </div>
                </div>
                <div className="flex justify-start mt-8">
                  <Button
                    disabled={
                      Object.keys(userInfoToBeUpdated).length <= 0 &&
                      !imgFileToUpload.src
                    }
                    positive
                    onClick={() =>
                      commitUpdateUser({ username, ...userInfoToBeUpdated })
                    }
                  >
                    Update Profile
                  </Button>
                </div>
              </div>
            </div>
          );
        }

        return <div>Loading</div>;
      }}
    />
  );
};
