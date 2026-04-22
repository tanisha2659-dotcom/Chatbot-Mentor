import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function LifeScheduleScreen() {
  const scheduleItems = [
    { time: '09:00 AM', title: 'Morning Reflection', type: 'Self Care' },
    { time: '11:00 AM', title: 'Deep Work Block', type: 'Productivity' },
    { time: '02:00 PM', title: 'Check-in with Mentor', type: 'Emotional' },
    { time: '06:00 PM', title: 'Evening Walk', type: 'Health' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Life Schedule</Text>
      </View>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.subText}>Your gentle daily rhythm.</Text>
        
        {scheduleItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.scheduleCard}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.titleText}>{item.title}</Text>
              <Text style={styles.typeText}>{item.type}</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#c2c8c0" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf9f5' },
  header: { padding: 24, paddingBottom: 10 },
  headerTitle: { fontSize: 24, fontWeight: '600', color: '#4a654e' },
  content: { padding: 24, paddingBottom: 40 },
  subText: { fontSize: 16, color: '#737972', fontStyle: 'italic', marginBottom: 24 },
  scheduleCard: { flexDirection: 'row', backgroundColor: '#ffffff', padding: 16, borderRadius: 16, marginBottom: 12, alignItems: 'center', elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4 },
  timeContainer: { width: 80, borderRightWidth: 1, borderRightColor: '#eae8e4', marginRight: 16 },
  timeText: { fontSize: 14, fontWeight: '600', color: '#4a654e' },
  infoContainer: { flex: 1 },
  titleText: { fontSize: 16, fontWeight: '500', color: '#1b1c1a', marginBottom: 4 },
  typeText: { fontSize: 13, color: '#5c5a82' },
});
