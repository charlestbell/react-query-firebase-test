import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { query, collection, where } from "firebase/firestore";

export default function Page() {
  // Define a query reference using the Firebase SDK
  const ref = query(
    collection(db, "logbooks"),
    where("userId", "==", "33fqReTmOXN8sXdpXNH0Tz1jhlH2")
  );

  // Provide the query to the hook
  const { isLoading, data: logbooks } = useFirestoreQuery(["logbooks"], ref);

  console.log("IS LOADING", isLoading);
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {logbooks.docs.map((logbookSnapshot) => {
        const logbook = logbookSnapshot.data();
        return <Text key={logbook.id}>{JSON.stringify(logbook.title)}</Text>;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
