import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { firestore } from "./firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

export default function App() {
  // Define a query reference using the Firebase SDK
  const ref = query(collection(firestore, "logbooks"));

  // Provide the query to the hook
  const query = useFirestoreQuery(["logbooks"], ref);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  const snapshot = query.data;

  return snapshot.docs.map((docSnapshot) => {
    const data = docSnapshot.data();

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
        <div key={docSnapshot.id}>{data.name}</div>;
      </View>
    );
  });
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
