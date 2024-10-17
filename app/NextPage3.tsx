import React, { useRef } from "react";
import { Text, View, Animated, PanResponder, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Импорт навигации

const { height } = Dimensions.get("window");

export default function Index() {
  const navigation = useNavigation(); // Получение доступа к навигации

  

 

  // Функция перехода на следующую страницу
  const handleBookingPress = () => {
    navigation.navigate("Zapis"); // Перенаправляем на страницу "NextPage"
  };

  return (
    <View style={styles.container}>
        <View style={styles.contentMenu}>
          <Text style={styles.greetingText}>Мои записи</Text>



          <View style={styles.innerMenu}>
            <Text style={styles.menuTitle}>21 октября 2024                          13:00-16:00</Text>
            <View style={styles.itemRow}>
                <View style={styles.itemTextPow}>
                  <Text style={styles.HAHAText}>2 000 Р    50 минут</Text>
                </View>
                
            </View>
            <View style={styles.itemRow2}>
                <View style={styles.itemTextPow}>
                    <Text style={styles.menuTitle}>Тайм</Text>
                    <Text style={styles.HAHAText}>Якутск, Горького 94, 29</Text>
                    <View style={styles.itemRow2}>
                        <View style={styles.itemPow}></View>
                        <View style={styles.len}></View>
                        <View style={styles.itemTextPow}>
                            <Text style={styles.itemText}>Павел Ефремов</Text>
                            <Text style={styles.HAHAText}>Стрижка мужская</Text>
                        </View>
                        
                    </View>
                    <View style={styles.ddwdas}>
                        <TouchableOpacity onPress={handleBookingPress}>
                            <View style={styles.Blooklong}>
                                <Text style={styles.bookingButton}>Связаться</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleBookingPress}>
                            <View style={styles.Blooklong2}>
                                <Text style={styles.bookingButton1}>Отменить запись</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    
                </View>
                
            </View>
            
          </View>   
          <Text style={styles.greetingText1}>Прошедшие записи</Text>


          {/* Меню со специалистами */}
          <View style={styles.innerMenu}>
            <Text style={styles.menuTitle}>24 марта 2024                              13:00-16:00</Text>
            <View style={styles.itemRow}>
                <View style={styles.itemTextPow}>
                  <Text style={styles.HAHAText}>2 000 Р    50 минут</Text>
                </View>
                
            </View>
            <View style={styles.itemRow2}>
                <View style={styles.itemTextPow}>
                    <Text style={styles.menuTitle}>Тайм</Text>
                    <Text style={styles.HAHAText}>Якутск, Горького 94, 29</Text>
                    <View style={styles.itemRow2}>
                        <View style={styles.itemPow}></View>
                        <View style={styles.len}></View>
                        <View style={styles.itemTextPow}>
                            <Text style={styles.itemText}>Павел Ефремов</Text>
                            <Text style={styles.HAHAText}>Стрижка мужская</Text>
                        </View>
                    </View>
                </View>
            </View>
          </View>
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
    len: {
      marginLeft: 10,
    },
    ddwdas: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
    },
    Blooklong2:{
        backgroundColor: "#F1F1F1",
        height: 31,
        width: 152,
        alignItems: "center",
        borderRadius: 8,
    },
    BlockFi2: {
        backgroundColor: "#B3B3B3",
        height: 20,
        width: 20,
        marginLeft: 10,
        borderRadius: 19,
    },
    itemRow2:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
    },
    menuTitle2: {
        fontSize: 16,
        textAlign: "center",
        color: "white",
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
      backgroundColor: "#F1F1F1",
      height: 31,
      width: 98,
      alignItems: "center",
      borderRadius: 8,
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
    greetingText1: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 20,
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
      color: "#20A01D",
      fontWeight: "regular",
      marginTop: 7,
    },
    bookingButton1: {
        color: "#E33F4E",
        fontWeight: "regular",
        marginTop: 7,
      },
  });
  