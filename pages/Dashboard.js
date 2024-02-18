import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Appbar, Card, Title, Paragraph, Button, Avatar } from 'react-native-paper';
import Nav from '../components/Nav';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="Welcome back, Marko" />
        <Appbar.Action icon="menu" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView style={styles.scrollView}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{ uri: '/assets/marko.jpeg' }}
            size={80}
          />
          <View style={styles.userInfoText}>
            <Title style={styles.name}>My points: 1,036</Title>
            <Paragraph style={styles.streak}>🔥You're on a 2 day streak!</Paragraph>
          </View>
        </View>

        <View style={styles.activitySection}>
          <Card style={styles.card}>
            <Card.Content>
              <Title>Annie Gale Park</Title>
              <Paragraph>Visited on 13/02/2024</Paragraph>
              <Paragraph>Status: Completed</Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content>
              <Title>Sage Hill Natural Area</Title>
              <Paragraph>Visited on 12/02/2024</Paragraph>
              <Paragraph>Status: Verified ✅</Paragraph>
            </Card.Content>
          </Card>
        </View>

        <Button mode="contained" onPress={() => {}}>
          Find more gardens
        </Button>
      </ScrollView>
      
      <Nav /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  userInfoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userInfoText: {
    marginLeft: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  streak: {
    fontStyle: 'italic',
  },
  activitySection: {
    padding: 10,
  },
  card: {
    marginBottom: 10,
  },
});

export default Dashboard;
