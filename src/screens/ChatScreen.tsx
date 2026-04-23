import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ChatScreen({ route, navigation }: any) {
  const scrollViewRef = useRef<ScrollView>(null);

  const [messages, setMessages] = useState<{ role: 'user' | 'mentor'; text: string }[]>([
    {
      role: 'mentor',
      text: `Hello. I see you're feeling ${
        route.params?.mood || 'a bit overwhelmed'
      }. I'm here for you. What's on your mind?`
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const scrollToBottom = () => {
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  // ✅ FIXED: direct backend call (NO geminiService anymore)
const sendMessage = async () => {
  if (!inputText.trim() || loading) return;

  const userText = inputText.trim();

  setMessages(prev => [...prev, { role: 'user', text: userText }]);
  setInputText('');
  setLoading(true);

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.EXPO_PUBLIC_GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: userText }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from AI";

    setMessages(prev => [
      ...prev,
      { role: 'mentor', text: reply }
    ]);

  } catch (error) {
    setMessages(prev => [
      ...prev,
      { role: 'mentor', text: "Error connecting to AI 💛" }
    ]);
  } finally {
    setLoading(false);
    scrollToBottom();
  }
};

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <MaterialIcons name="arrow-back" size={24} color="#4a654e" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Empathetic Mentor</Text>
        <View style={{ width: 40 }} />
      </View>

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Chat */}
        <ScrollView
          ref={scrollViewRef}
          contentContainerStyle={styles.chatContainer}
          showsVerticalScrollIndicator={false}
        >
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.messageBubble,
                msg.role === 'user' ? styles.userBubble : styles.mentorBubble
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  msg.role === 'user' ? styles.userText : styles.mentorText
                ]}
              >
                {msg.text}
              </Text>
            </View>
          ))}

          {loading && (
            <View style={[styles.messageBubble, styles.mentorBubble]}>
              <Text style={[styles.messageText, styles.mentorText, styles.typing]}>
                Mentor is typing...
              </Text>
            </View>
          )}
        </ScrollView>

        {/* Input */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your thoughts quietly..."
            placeholderTextColor="#737972"
            value={inputText}
            onChangeText={setInputText}
            multiline
          />

          <TouchableOpacity
            style={[styles.sendButton, loading && { opacity: 0.6 }]}
            onPress={sendMessage}
            disabled={loading}
          >
            <MaterialIcons name="send" size={24} color="#ffffff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fbf9f5' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(251,249,245,0.9)',
    borderBottomWidth: 1,
    borderBottomColor: '#eae8e4'
  },

  backBtn: { padding: 8 },

  headerTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#4a654e'
  },

  chatContainer: {
    padding: 16,
    paddingBottom: 40
  },

  messageBubble: {
    maxWidth: '80%',
    padding: 16,
    borderRadius: 20,
    marginBottom: 16
  },

  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#4a654e',
    borderBottomRightRadius: 4
  },

  mentorBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#eae8e4',
    borderBottomLeftRadius: 4
  },

  messageText: {
    fontSize: 16,
    lineHeight: 24
  },

  userText: { color: '#ffffff' },
  mentorText: { color: '#1b1c1a' },

  typing: {
    fontStyle: 'italic',
    opacity: 0.7
  },

  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#eae8e4',
    alignItems: 'flex-end'
  },

  input: {
    flex: 1,
    backgroundColor: '#f5f3ef',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#1b1c1a',
    maxHeight: 120
  },

  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#4a654e',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12
  }
});