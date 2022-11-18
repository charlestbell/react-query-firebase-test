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
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

export default function Page() {
  // Define a query reference using the Firebase SDK
  const ref = query(collection(firestore, "logbooks"));

  // Provide the query to the hook
  const { isLoading, data: logbooks } = useFirestoreQuery(["logbooks"], ref);
  console.log("LOGBOOKS", logbooks);
  // if (query.isLoading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      {logbooks.map((logbook) => {
        <div key={logbook.id}>{JSON.stringify(logbook)}</div>;
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
