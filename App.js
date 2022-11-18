import { useState, useEffect } from "react";
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
  getDocs,
} from "firebase/firestore";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import Page from "./Page";
const queryClient = new QueryClient();

export default function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let querySnapshot;
  //     try {
  //       querySnapshot = await getDocs(collection(db, "logbooks"));
  //     } catch (error) {
  //       console.log("ERROR:", error);
  //     }
  //     console.log("QUERY SNAPSHOT", querySnapshot);
  //     setData(querySnapshot);
  //     querySnapshot.forEach((doc) => {
  //       console.log(`${doc.id} => ${doc.data()}`);
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Page />
    </QueryClientProvider>
  );
  // return (
  //   <View>
  //     <Text style={{ marginTop: 100 }}>Hello World {JSON.stringify(data)}</Text>
  //   </View>
  // );
}
