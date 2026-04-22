import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DashboardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Life Management</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subText}>Your emotional journey at a glance.</Text>
        
        <View style={styles.cardContainer}>
          <View style={[styles.statCard, { backgroundColor: 'rgba(204,234,206,0.4)' }]}>
            <MaterialIcons name="wb-sunny" size={32} color="#4a654e" style={styles.icon} />
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Hopeful Days</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: 'rgba(172,203,216,0.4)' }]}>
            <MaterialIcons name="water-drop" size={32} color="#45636e" style={styles.icon} />
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Quiet Days</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: 'rgba(255,218,214,0.4)' }]}>
            <MaterialIcons name="storm" size={32} color="#ba1a1a" style={styles.icon} />
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Overwhelmed</Text>
          </View>
          <View style={[styles.statCard, { backgroundColor: 'rgba(210,208,254,0.4)' }]}>
            <MaterialIcons name="self-improvement" size={32} color="#5c5a82" style={styles.icon} />
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Mentor Chats</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf9f5' },
  header: { padding: 24, paddingBottom: 10 },
  headerTitle: { fontSize: 24, fontWeight: '600', color: '#4a654e' },
  content: { padding: 24 },
  subText: { fontSize: 16, color: '#737972', fontStyle: 'italic', marginBottom: 24 },
  cardContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', gap: 16 },
  statCard: { width: '47%', padding: 20, borderRadius: 20, alignItems: 'center', marginBottom: 16 },
  icon: { marginBottom: 12 },
  statNumber: { fontSize: 32, fontWeight: '700', color: '#1b1c1a', marginBottom: 4 },
  statLabel: { fontSize: 14, color: '#424842', fontWeight: '500' },
});
