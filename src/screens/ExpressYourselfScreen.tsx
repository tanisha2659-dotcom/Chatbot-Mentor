import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView, Image, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ExpressYourselfScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.menuBtn} onPress={() => Alert.alert('Menu', 'Side navigation menu coming soon.')}>
          <MaterialIcons name="menu" size={24} color="#4a654e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Express Yourself</Text>
        <View style={styles.avatarContainer}>
          <Image 
            source={{uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWg8da_N6OsUiUnZvpbZ78zNE7PeM6tU1L8wTsGelSqBaBOWTcoNYJyIpVVFEE426VtIsTIOkvURXkTDDp0c7o5pZlZLb5FOzAlR0sutdLfTnM5o2ckl_xLTJ9ATk_DC7__pxI7PEp6GPxlLRqrOLC5uoQFuWn23vinQ4JsiejFjOQx6OpPnc-yy4tnJzulR5ttPKbD__deipY08SyO_bS1mKxoJZ1g9ruP_NA-_SELQhoZt4wav69Riyp-Mf2LFIVXa-EZxc2prXM'}} 
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>"Your voice matters. This is your safe space."</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Choose Your Guide</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalScroll}>
            <TouchableOpacity style={styles.guideCard} onPress={() => Alert.alert('Guide Selected', 'Empathetic Friend will now be your guide.')}>
              <View style={[styles.guideIconBg, { backgroundColor: '#8ba88e' }]}>
                <MaterialIcons name="favorite" size={24} color="#ffffff" />
              </View>
              <Text style={styles.guideTitle}>Empathetic Friend</Text>
              <Text style={styles.guideDesc}>Warm, validating, and ready to listen without judgment.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.guideCard} onPress={() => Alert.alert('Guide Selected', 'Wise Guardian will now be your guide.')}>
              <View style={[styles.guideIconBg, { backgroundColor: '#87a5b2' }]}>
                <MaterialIcons name="shield" size={24} color="#ffffff" />
              </View>
              <Text style={styles.guideTitle}>Wise Guardian</Text>
              <Text style={styles.guideDesc}>Protective, grounding, offering calm perspective in storms.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.guideCard, { borderWidth: 1, borderColor: '#4a654e' }]} onPress={() => Alert.alert('Guide Selected', 'Gentle Mentor will now be your guide.')}>
              <View style={[styles.guideIconBg, { backgroundColor: '#4a654e' }]}>
                <MaterialIcons name="eco" size={24} color="#ffffff" />
              </View>
              <Text style={styles.guideTitle}>Gentle Mentor</Text>
              <Text style={styles.guideDesc}>Guiding, reflective, helping you find your own answers.</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>How would you like to express?</Text>
          
          <TouchableOpacity style={styles.modeCard} onPress={() => navigation.navigate('Chat', { mood: 'Expressing' })}>
            <View style={[styles.modeIconBg, { shadowColor: '#4a654e' }]}>
              <MaterialIcons name="chat-bubble-outline" size={24} color="#4a654e" />
            </View>
            <View style={styles.modeContent}>
              <Text style={styles.modeTitle}>Start a Conversation</Text>
              <Text style={styles.modeDesc}>Type your thoughts quietly</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#737972" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modeCard} onPress={() => navigation.navigate('Chat', { mood: 'Venting verbally' })}>
            <View style={[styles.modeIconBg, { shadowColor: '#45636e' }]}>
              <MaterialIcons name="mic-none" size={24} color="#45636e" />
            </View>
            <View style={styles.modeContent}>
              <Text style={styles.modeTitle}>Voice Venting</Text>
              <Text style={styles.modeDesc}>Speak freely, let it out</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#737972" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.modeCard} onPress={() => Alert.alert('Guided Journaling', 'Interactive journaling flow coming soon.')}>
            <View style={[styles.modeIconBg, { shadowColor: '#5c5a82' }]}>
              <MaterialIcons name="edit-note" size={24} color="#5c5a82" />
            </View>
            <View style={styles.modeContent}>
              <Text style={styles.modeTitle}>Guided Journaling</Text>
              <Text style={styles.modeDesc}>Reflect with gentle prompts</Text>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#737972" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf9f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 24, paddingTop: 20, paddingBottom: 10 },
  menuBtn: { padding: 8 },
  headerTitle: { fontSize: 20, fontWeight: '600', color: '#4a654e' },
  avatarContainer: { width: 40, height: 40, borderRadius: 20, overflow: 'hidden', backgroundColor: '#e4e2de' },
  avatar: { width: '100%', height: '100%' },
  scrollContent: { paddingHorizontal: 24, paddingBottom: 40 },
  welcomeSection: { marginTop: 24, marginBottom: 32, alignItems: 'center' },
  welcomeText: { fontSize: 18, color: '#4a654e', fontStyle: 'italic', opacity: 0.9, textAlign: 'center' },
  section: { marginBottom: 32 },
  sectionTitle: { fontSize: 22, fontWeight: '500', color: '#1b1c1a', marginBottom: 16 },
  horizontalScroll: { gap: 16, paddingRight: 24 },
  guideCard: { width: 220, backgroundColor: '#f5f3ef', borderRadius: 24, padding: 20, elevation: 1, shadowColor: '#4a654e', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, marginRight: 16 },
  guideIconBg: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  guideTitle: { fontSize: 18, fontWeight: '500', color: '#1b1c1a', marginBottom: 4 },
  guideDesc: { fontSize: 14, color: '#424842', opacity: 0.8, lineHeight: 20 },
  modeCard: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#efeeea', borderRadius: 20, padding: 16, marginBottom: 12 },
  modeIconBg: { width: 48, height: 48, borderRadius: 16, backgroundColor: '#fbf9f5', justifyContent: 'center', alignItems: 'center', elevation: 1 },
  modeContent: { flex: 1, marginLeft: 16 },
  modeTitle: { fontSize: 16, fontWeight: '500', color: '#1b1c1a', marginBottom: 2 },
  modeDesc: { fontSize: 13, color: '#424842' },
});
