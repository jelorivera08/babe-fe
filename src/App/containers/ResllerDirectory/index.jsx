import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Card, Icon, Image, Input } from "semantic-ui-react";
import { graphql, preloadQuery, usePreloadedQuery } from "react-relay/hooks";

import Background from "../../components/Background";
import Header from "../../components/Header";
import AppEnvironment from "../../../environment";

const ResellersContainer = styled.div`
  height: calc(100% - 3rem);
`;

const query = graphql`
  query ResllerDirectoryQuery {
    activeResellers {
      firstName
      facebookURL
      instagramURL
      surname
      areaOfDistribution
      imageUrl
      hasStock
    }
  }
`;

// Note: call in an event-handler or similar, not during render
const result = preloadQuery(AppEnvironment, query);

const restrictLongStrings = (str) =>
  str.length >= 75
    ? [
        ...str
          .split("")
          .map((v, i) => (i < 50 ? v : null))
          .filter((v) => v !== null),
        "...",
      ].join("")
    : str;

const ResllerDirectory = () => {
  const history = useHistory();
  const { activeResellers } = usePreloadedQuery(query, result);
  const [searchKey, setSearchKey] = useState("");

  return (
    <Background>
      <div className='h-full w-full bg-transparent'>
        <Header history={history} />

        <ResellersContainer className='px-4 mt-16 md:mt-4 md:p-32 flex justify-center flex-wrap overflow-y-scroll relative z-10'>
          <div
            className='flex justify-end w-full mx-2 my-4 '
            style={{ maxHeight: "38px" }}
          >
            <Input
              placeholder='Search'
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
              icon={{ name: "search", circular: true, link: true }}
            />
          </div>
          {activeResellers
            .filter((val) =>
              `${val.firstName} ${val.surname}`
                .toLowerCase()
                .includes(searchKey.toLowerCase())
            )
            .map(
              ({
                firstName,
                surname,
                facebookURL,
                hasStock,
                instagramURL,
                areaOfDistribution,
                imageUrl,
              }) => (
                <div key={facebookURL} className='m-2 w-full'>
                  <Card fluid>
                    <div className='flex'>
                      <div className='w-2/5 flex justify-center items-center  overflow-hidden bg-black'>
                        {imageUrl !== null ? (
                          <Image src={imageUrl} wrapped ui={false} />
                        ) : (
                          <div className='w-3/5' />
                        )}
                      </div>

                      <div className='w-3/5 m-4'>
                        <div className='flex justify-between'>
                          <Card.Header>{`${firstName} ${surname}`}</Card.Header>
                          {hasStock ? (
                            <Card.Content className='flex justify-center text-green-500'>
                              <div>Stocks Available</div>
                            </Card.Content>
                          ) : (
                            <Card.Content className='flex justify-center text-red-500'>
                              <div>Stocks Unavailable</div>
                            </Card.Content>
                          )}
                        </div>

                        <Card.Meta>
                          <span className='date'>Reseller</span>
                        </Card.Meta>

                        <div className='w-full mb-2 mt-4 flex'>
                          <Icon name='find' />
                          <div className='break-all'>
                            {restrictLongStrings(areaOfDistribution || "") ||
                              "Ask your friendly reseller directly!"}
                          </div>
                        </div>

                        <div className='w-full my-2 flex'>
                          <Icon name='instagram' />
                          <a href={instagramURL} className='break-all'>
                            {restrictLongStrings(instagramURL || "")}
                          </a>
                        </div>

                        <div className='w-full my-2 flex'>
                          <Icon name='facebook' />
                          <a href={facebookURL} className='break-all'>
                            {restrictLongStrings(facebookURL || "")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            )}
        </ResellersContainer>
      </div>
    </Background>
  );
};

export default ResllerDirectory;
