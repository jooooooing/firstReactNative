import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Alert,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { MenuInputFunc } from "./components/MenuInputfunc";
import { MenuSelect } from "./components/MenuSelect";

export default function App() {
  const [selectList, setSelectList] = useState([""]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ height: 200 }}>
          <MenuSelect selectList={selectList} />
          <MenuInputFunc
            selectList={selectList}
            setSelectList={setSelectList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
