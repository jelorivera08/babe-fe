import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Card, Icon, Image } from "semantic-ui-react";
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
      imageUrl
      hasStock
    }
  }
`;

// Note: call in an event-handler or similar, not during render
const result = preloadQuery(AppEnvironment, query);

const ResllerDirectory = () => {
  const history = useHistory();
  const { activeResellers } = usePreloadedQuery(query, result);

  return (
    <Background>
      <div className='h-full w-full bg-transparent'>
        <Header history={history} />

        <ResellersContainer className='mt-12 p-32 flex justify-center flex-wrap overflow-y-scroll relative z-10'>
          {activeResellers.map(
            ({
              firstName,
              surname,
              facebookURL,
              hasStock,
              instagramURL,
              imageUrl,
            }) => (
              <div key={facebookURL} className='m-2'>
                <Card>
                  <div
                    style={{
                      height: "26rem",
                    }}
                    className='flex justify-center items-center  overflow-hidden bg-black'
                  >
                    <Image src={imageUrl} wrapped ui={false} />
                  </div>

                  <Card.Content>
                    <Card.Header>{`${firstName} ${surname}`}</Card.Header>
                    <Card.Meta>
                      <span className='date'>Reseller</span>
                    </Card.Meta>
                  </Card.Content>

                  {hasStock ? (
                    <Card.Content className='flex justify-center text-green-500'>
                      <div>Stocks Available</div>
                    </Card.Content>
                  ) : (
                    <Card.Content className='flex justify-center text-red-500'>
                      <div>Stocks Unavailable</div>
                    </Card.Content>
                  )}

                  <Card.Content extra>
                    <div className='w-full flex text-center'>
                      <Icon name='instagram' />
                      <textarea
                        className='w-full resize-none'
                        defaultValue={instagramURL}
                      />
                    </div>
                  </Card.Content>

                  <Card.Content extra>
                    <div className='w-full flex text-center'>
                      <Icon name='facebook' />
                      <textarea
                        className='w-full resize-none'
                        defaultValue={facebookURL}
                      />
                    </div>
                  </Card.Content>
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
