import React, { useRef } from "react";
import { Text, View, Animated, PanResponder, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Импорт навигации

const { height } = Dimensions.get("window");

export default function Index() {
  const navigation = useNavigation(); // Получение доступа к навигации

  

 

  // Функция перехода на следующую страницу
  const handleBookingPress = () => {
    navigation.navigate("Kont"); // Перенаправляем на страницу "NextPage"
  };

  return (
    <View style={styles.container}>
        <View style={styles.contentMenu}>
          <Text style={styles.greetingText}>Тайм</Text>



          <View style={styles.innerMenu}>
            <Text style={styles.menuTitle}>Запись к специалисту</Text>
            <View style={styles.itemRow}>
            <View style={styles.itemPow}></View>
                <View style={styles.len}></View>
                <View style={styles.itemTextPow}>
                  <Text style={styles.itemText}>Павел Ефремов</Text>
                  <Text style={styles.HAHAText}>Барбер</Text>
                </View>
              </View>
          </View>


          {/* Меню со специалистами */}
          <View style={styles.innerMenu}>
            <View style={styles.BlockFi}>
                <Text style={styles.menuTitle}>Дата и время</Text>
            </View>
            <View style={styles.data1}>
                <View style={styles.col1}></View>
                <View style={styles.col2}></View>
                <View style={styles.col2}></View>
                <View style={styles.col2}></View>
            </View>
            <View style={styles.data2}>
                <View style={styles.col3}>
                    <Text style={styles.menuTitle2}>08:00</Text>
                </View>
                <View style={styles.col3}>
                    <Text style={styles.menuTitle2}>08:30</Text>
                </View>
                <View style={styles.col3}>
                    <Text style={styles.menuTitle2}>09:00</Text>
                </View>
                <View style={styles.col3}>
                    <Text style={styles.menuTitle2}>09:30</Text>
                </View>
                <View style={styles.col3}>
                    <Text style={styles.menuTitle2}>10:00</Text>
                </View>
            </View>
            <View style={styles.data3}>
            <View style={styles.col3}>
                    <Text style={styles.menuTitle2}>10:30</Text>
                </View>
                <View style={styles.col4}>
                    <Text style={styles.menuTitle2}>11:00</Text>
                </View>
            </View>
          </View>
          <TouchableOpacity onPress={handleBookingPress}>
                <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Продолжить</Text>
                </View>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "#F1F1F1",
    },
    col1:{
        height: 51,
        width: 53,
        backgroundColor: "#F1F1F1",
        borderRadius: 8,
    },
    col2: {
        height: 51,
        width: 53,
        backgroundColor: "#F1F1F1",
        borderRadius: 8,
        marginLeft: 12,
    },
    col3:{
        height: 35,
        width: 61,
        borderWidth: 1,
        borderColor: "#F1F1F1",
        borderRadius: 8,
    },
    col4: {
        height: 35,
        width: 61,
        borderWidth: 1,
        borderColor: "#F1F1F1",
        borderRadius: 8,
        marginLeft: 8,
    },
    data1: {
        height: 51,
        marginTop: 20,
        flexDirection: "row",
    },
    data2: {
        height: 32,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    data3: {
        marginTop: 10,
        flexDirection: "row",
    },
    len: {
      marginLeft: 10,
    },
    BlockFi2: {
        backgroundColor: "#B3B3B3",
        height: 20,
        width: 20,
        marginLeft: 10,
        borderRadius: 19,
    },
    menuTitle2: {
        fontSize: 16,
        textAlign: "center",
        color: "black",
        paddingTop: 7,
     },
    BlockFi: {
        flexDirection: "row",
    },
    menu: {
      position: "absolute",
      bottom: 0,
      height: height,
      width: "100%",
      backgroundColor: "#F1F1F1",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
    itemTextPow: {
      position: "relative",
      marginRight: "auto",
    },
    initialMenu: {
      height: 110,
      alignItems: "center",
    },
    itemPow: {
      width: 36,
      height: 36,
      borderRadius: 41,
      backgroundColor: "#D9D9D9",
    },
    searchBar: {
      width: "90%",
      height: 40,
      backgroundColor: "#fff",
      borderRadius: 10,
      paddingHorizontal: 10,
      marginBottom: 10,
    },
    Blooklong: {
      alignItems: "center",
      width: 361,
      height: 55,
      backgroundColor: "#20A01D",
      borderRadius: 12,
    },
    tabBar: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      width: "100%",
    },
    HAHAText: {
      color: "#D9D9D9",
    },
    tabItem: {
      fontSize: 11,
      flex: 1,
      alignItems: "center",
    },
    greetingText: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: -40,
      marginBottom: 40,
      textAlign: "center",
    },
    contentMenu: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      marginTop: 150,
    },
    innerMenu: {
      backgroundColor: "#FFF",
      padding: 10,
      borderRadius: 10,
      marginBottom: 20,
      width: "90%",
    },
    menuTitle: {
      fontSize: 16,
      fontWeight: "bold",
      marginBottom: 10,
    },
    itemList: {
      flexDirection: "column",
    },
    itemRow: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBlockColor: "#F1F1F1",
    },
    itemText: {
      fontSize: 16,
    },
    bookingButton: {
      color: "white",
      fontWeight: "regular",
      marginTop: 18,
      fontSize: 16,
    },
  });
  