import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Dashboard from '../pages/Dashboard';
import MapPage from '../pages/MapPage';
import Leaderboard from '../pages/Leaderboard';

const DashboardRoute = () => {
    return (
        <View >
            <Dashboard />
        </View>
    );
}; 
const MapRoute = () => {
    return (
        <View >
            <MapPage />
        </View>
    );
}

const LeaderboardRoute = () => {
    return (
        <View>
            <Leaderboard />
        </View>
    );
}

const Nav = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'dashboard', title: 'Dashboard', icon: 'view-dashboard' },
    { key: 'map', title: 'Map', icon: 'map' },
    { key: 'leaderboard', title: 'Leaderboard', icon: 'podium-gold' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardRoute,
    map: MapRoute,
    leaderboard: LeaderboardRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });

export default Nav
