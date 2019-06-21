import React, { Component } from 'react';
import {
  Container,
  Header,
  Icon,
  Card,
  Message,
  Dimmer,
  Loader,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { fetchFriends } from '../../actions/friends';

class FriendList extends Component {
  componentDidMount = () => {
    this.props.fetchFriends();
  };

  render() {
    const { fetchingFriends, friends } = this.props;
    return (
      <div>
        <Container style={{ marginTop: '7em' }}>
          <Header as="h2" icon textAlign="center">
            <Icon name="users" circular />
            <Header.Content>Friend List</Header.Content>
          </Header>
          <Container>
            {fetchingFriends && (
              <Dimmer active inverted>
                <Loader inverted content="Loading" />
              </Dimmer>
            )}
            {friends.length > 0 ? (
              friends.map(friend => {
                return (
                  <Card.Group key={friend.id}>
                    <Card style={{ width: '100%' }}>
                      <Card.Content>
                        <Card.Header>Name: {friend.name}</Card.Header>
                        <Card.Meta> Age: {friend.age}</Card.Meta>
                        <Card.Description>
                          <strong>Email: {friend.email}</strong>
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  </Card.Group>
                );
              })
            ) : (
              <Message header="No Friends Added" />
            )}
          </Container>
        </Container>
      </div>
    );
  }
}

export default connect(
  state => state,
  { fetchFriends },
)(FriendList);
