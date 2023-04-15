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

const MenuSelect = ({ selectList }) => {
  const [isSelect, setIsSelect] = useState(false);
  const [selectChoice, setSelectChoice] = useState("");
  //3항 연산자 조건 ? {참} : {거짓}
  return (
    <View
      style={{
        alignItems: "center",
        paddingTop: 70,
      }}
    >
      <Text style>{isSelect ? "선택완료" : "메뉴를 고르세요"}</Text>
      {isSelect ? (
        <>
          <Text style={{ fontSize: 30 }}>{selectChoice}</Text>
          <Text style={{ fontSize: 30 }}>다시 선택하시겠습니까?</Text>
        </>
      ) : (
        <></>
      )}
      <View>
        <Button
          title={"메뉴선택"}
          onPress={() => {
            if (selectList[selectList.length - 1] === "") {
              Alert.alert("메뉴를 입력하세요", "메뉴를 입력하고 추가하세요", [
                {
                  text: "네",
                  onPress: () => {
                    console.log("OK!!");
                  },
                },
              ]);
            } else {
              setSelectList(true);
              setSelectChoice(
                // 3 * 0~1 = 0 ~ 3
                // 0, 1, 2
                selectList[Math.floor(Math.random() * selectList.length)]
              );
            }
          }}
        ></Button>
      </View>
    </View>
  );
};

export { MenuSelect };
