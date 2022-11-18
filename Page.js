import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
  where,
} from "firebase/firestore";
import { useEffect } from "react";

export default function Page() {
  // Define a query reference using the Firebase SDK
  const ref = query(
    collection(db, "logbooks"),
    where("userId", "==", "33fqReTmOXN8sXdpXNH0Tz1jhlH2")
  );

  // Provide the query to the hook
  const { isLoading, data: logbooks } = useFirestoreQuery(["logbooks"], ref);

  //   useEffect(() => {
  //     if (!isLoading) {
  //       console.log("LOGBOOKS", data.docs);
  //       data.docs.forEach((logbook) => console.log("logbook", logbook.data()));
  //     }
  //   }, [logbooks, isLoading]);
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
        console.log("LOGBOOK", logbook);
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
