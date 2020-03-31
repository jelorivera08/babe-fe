import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Card, Icon, Image } from 'semantic-ui-react';
import Background from '../../components/Background';
import Header from '../../components/Header';

const ResellersContainer = styled.div`
  height: calc(100% - 3rem);
`;


const mockResellers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const ResllerDirectory = () => {
  const history = useHistory();

  return (
    <Background>
      <div className="h-full w-full bg-transparent">
        <Header history={history} />

        <ResellersContainer className="mt-12 p-32 flex flex-wrap overflow-y-scroll relative z-10">

          { mockResellers.map((v) => (
            <div key={v} className="m-2">
              <Card>
                <Image src={`https://react.semantic-ui.com/images/avatar/large/${Math.random() > 0.5 ? 'matthew.png' : 'rachel.png'}`} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>Matthew</Card.Header>
                  <Card.Meta>
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description>
                Matthew is a musician living in Nashville.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="user" />
                  22 Friends
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
