import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react';
import { graphql, preloadQuery, usePreloadedQuery } from 'react-relay/hooks';

import Background from '../../components/Background';
import Header from '../../components/Header';
import AppEnvironment from '../../../environment';

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
    }
  }
`;

// Note: call in an event-handler or similar, not during render
const result = preloadQuery(
  AppEnvironment,
  query,
);


const ResllerDirectory = () => {
  const history = useHistory();
  const { activeResellers } = usePreloadedQuery(query, result);


  return (
    <Background>
      <div className="h-full w-full bg-transparent">
        <Header history={history} />

        <ResellersContainer className="mt-12 p-32 flex flex-wrap overflow-y-scroll relative z-10">

          { activeResellers.map(({
            firstName, surname, facebookURL, instagramURL,
          }) => (
            <div key={facebookURL} className="m-2">
              <Card>
                <Image src={`https://react.semantic-ui.com/images/avatar/large/${Math.random() > 0.5 ? 'matthew.png' : 'rachel.png'}`} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{`${firstName} ${surname}`}</Card.Header>
                  <Card.Meta>
                    <span className="date">Reseller</span>
                  </Card.Meta>
                  <Card.Description>
                Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra className="flex justify-between">
                  <div className="w-1/2 text-center">
                    <Icon name="instagram" />
                    {instagramURL}
                  </div>
                  <div className="w-1/2 text-center">
                    <Icon name="facebook" />
                    {facebookURL}
                  </div>
                </Card.Content>
              </Card>
            </div>
          )) }
        </ResellersContainer>

      </div>

    </Background>
  );
};

export default ResllerDirectory;
