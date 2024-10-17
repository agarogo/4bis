import React, { useRef, useState  } from "react";
import { Text, View, Switch, Animated, PanResponder, CheckBox, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Импорт навигации
import Icon from "react-native-vector-icons/MaterialIcons";
const { height } = Dimensions.get("window");

export default function Index() {
  const navigation = useNavigation(); // Получение доступа к навигации

  

  const [checked, setChecked] = useState(false);

  // Функция перехода на следующую страницу
  const handleBookingPress = () => {
    navigation.navigate("Form"); // Перенаправляем на страницу "NextPage"
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
                <Text style={styles.menuTitle}>Контактная информация</Text>
            </View>
            <View style={styles.data2}>
                <TextInput
                    style={styles.searchBar}
                    placeholder="Ваше ИМЯ"
                />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Ваша фамилия"
                />
                <TextInput
                    style={styles.searchBar}
                    placeholder="+7 (___) ___-__-__"
                />
                <TextInput
                    style={styles.searchBar}
                    placeholder="Комментарий"
                />
                <TouchableOpacity onPress={() => setChecked(!checked)}>
                    <View style={{ flexDirection: "row", alignItems: "center" ,}}>
                        <Icon name={checked ? "check-box" : "check-box-outline-blank"} size={20} color="#FFFFF" />
                        <Text style={styles.port}>{checked ? "Согласен на обработку персональных данных" : "Согласен на обработку персональных данных"}</Text>
                    </View>
                </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity onPress={handleBookingPress}>
                <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Записаться</Text>
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
        height: 343,
        width: 361,
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "space-between",
    },
    data3: {
        marginTop: 10,
        flexDirection: "row",
    },
    port:{
        fontSize: 12,
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
      width: "92%",
      height: 55,
      backgroundColor: "#F1F1F1",
      borderRadius: 12,
      paddingHorizontal: 10,
      marginBottom: 0,
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
  