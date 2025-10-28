import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function App() {
  return (
    <View style={styles.root}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome to 14ers!</Text>
        <Text style={styles.subtitle}>Plain Expo app running.</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#F9FAFB" },
  card: { padding: 24, borderRadius: 16, backgroundColor: "#FFFFFF" },
  title: { fontSize: 22, fontWeight: "700", color: "#537DA7", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#6B7280", textAlign: "center" },
});
