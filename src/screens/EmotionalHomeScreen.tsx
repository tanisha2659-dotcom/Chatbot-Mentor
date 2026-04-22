import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function EmotionalHomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#fbf9f5', '#eef2f5']}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.header}>
        <View style={styles.avatarContainer}>
          <Image 
            source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp9D37Rho22fBkwWQhNJEGQQLX_65Vlu-IaU-GqoYB0SVUUTSvdeooL3ohtLqEMaEPXVayE9wTUVu-w7myELNVuEhboeLeKaSsJEIGgl3JMdf3KuhEHr4TMAjCC7qBRQfTmrHQX0Jsd8G-sUFSKy4CRcWf6N0dueec6el01Gu2WGc9-VaB4w9ChQX92Z8h0Sup_1r1oV2Bu_yFCeqpFMUlaHoljD8K7OfCtnJUrb3TKt6H-n5bV7YWHpV2drkzzYdc2ii5kGMdJ-_e'}} 
            style={styles.avatar}
          />
        </View>
        <Text style={styles.headerTitle}>Sanctuary</Text>
        <TouchableOpacity style={styles.settingsBtn} onPress={() => Alert.alert('Settings', 'Preferences and profile settings would appear here.')}>
          <MaterialIcons name="settings" size={24} color="#8ba88e" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.greetingSection}>
          <Text style={styles.greetingText}>Hello, I'm here for you.</Text>
          <Text style={styles.subGreetingText}>How are you really feeling today?</Text>
        </View>

        <View style={styles.moodGrid}>
          <TouchableOpacity 
            style={[styles.moodCard, { borderColor: 'rgba(139,168,142,0.5)' }]}
            onPress={() => navigation.navigate('ConfidantChat', { mood: 'Quiet' })}
          >
            <View style={[styles.moodIconBg, { backgroundColor: 'rgba(172,203,216,0.2)' }]}>
              <MaterialIcons name="water-drop" size={28} color="#45636e" />
            </View>
            <Text style={styles.moodText}>Quiet</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.moodCard, { borderColor: 'rgba(186,26,26,0.3)' }]}
            onPress={() => navigation.navigate('ConfidantChat', { mood: 'Overwhelmed' })}
          >
            <View style={[styles.moodIconBg, { backgroundColor: 'rgba(255,218,214,0.6)' }]}>
              <MaterialIcons name="storm" size={28} color="#ba1a1a" />
            </View>
            <Text style={styles.moodText}>Overwhelmed</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.moodCard, { borderColor: 'rgba(204,234,206,0.5)' }]}
            onPress={() => navigation.navigate('ConfidantChat', { mood: 'Hopeful' })}
          >
            <View style={[styles.moodIconBg, { backgroundColor: 'rgba(204,234,206,0.6)' }]}>
              <MaterialIcons name="wb-sunny" size={28} color="#4a654e" />
            </View>
            <Text style={styles.moodText}>Hopeful</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.instructionText}>Select how you're feeling to begin.</Text>

        <TouchableOpacity 
          style={styles.ventButton}
          onPress={() => navigation.navigate('ConfidantChat', { mood: 'Venting' })}
        >
          <MaterialIcons name="mic" size={24} color="#4a654e" />
          <Text style={styles.ventButtonText}>I JUST NEED TO VENT</Text>
        </TouchableOpacity>
        <Text style={styles.ventSubText}>Speak or type freely. It's a safe space.</Text>

        <View style={styles.insightCard}>
          <View style={styles.insightIconBg}>
            <MaterialIcons name="auto-awesome" size={20} color="#5c5a82" />
          </View>
          <View style={styles.insightContent}>
            <Text style={styles.insightTitle}>A thought from yesterday</Text>
            <Text style={styles.insightText}>"You noticed that quiet moments in the morning help center you before the rush."</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf9f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingTop: 20, paddingBottom: 10 },
  avatarContainer: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: '#eae8e4' },
  avatar: { width: '100%', height: '100%' },
  headerTitle: { fontSize: 20, fontWeight: '500', color: '#8ba88e' },
  settingsBtn: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.5)' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40, alignItems: 'center' },
  greetingSection: { marginTop: 40, marginBottom: 40, alignItems: 'center' },
  greetingText: { fontSize: 28, color: '#4a654e', fontWeight: '600', marginBottom: 8, textAlign: 'center' },
  subGreetingText: { fontSize: 20, color: '#5c5a82', textAlign: 'center' },
  moodGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 20 },
  moodCard: { width: 140, height: 140, borderRadius: 40, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderWidth: 1, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8 },
  moodIconBg: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  moodText: { fontSize: 14, color: '#424842', fontWeight: '500' },
  instructionText: { fontSize: 14, color: '#737972', fontStyle: 'italic', marginBottom: 40 },
  ventButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ffffff', paddingVertical: 16, paddingHorizontal: 32, borderRadius: 30, borderWidth: 1, borderColor: '#e4e2de', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 8, marginBottom: 12 },
  ventButtonText: { fontSize: 12, fontWeight: '600', color: '#4a654e', letterSpacing: 1, marginLeft: 12 },
  ventSubText: { fontSize: 13, color: '#737972', marginBottom: 40 },
  insightCard: { flexDirection: 'row', backgroundColor: 'rgba(245,243,239,0.8)', borderRadius: 24, padding: 20, width: '100%', borderWidth: 1, borderColor: 'rgba(228,226,222,0.3)' },
  insightIconBg: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(210,208,254,0.3)', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  insightContent: { flex: 1 },
  insightTitle: { fontSize: 14, fontWeight: '500', color: '#1b1c1a', marginBottom: 4 },
  insightText: { fontSize: 16, color: '#424842', fontStyle: 'italic', lineHeight: 24 },
});
