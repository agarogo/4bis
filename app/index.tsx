import React, { useRef } from "react";
import { Text, View, Animated, PanResponder, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Импорт навигации

const { height } = Dimensions.get("window");

export default function Index() {
  const translateY = useRef(new Animated.Value(height - 110)).current;
  const lastTranslateY = useRef(height - 110);
  const navigation = useNavigation(); // Получение доступа к навигации

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const newY = Math.max(0, lastTranslateY.current + gestureState.dy);
        translateY.setValue(newY);
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -50) {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
          }).start(() => {
            lastTranslateY.current = 0;
          });
        } else {
          Animated.spring(translateY, {
            toValue: height - 110,
            useNativeDriver: true,
          }).start(() => {
            lastTranslateY.current = height - 110;
          });
        }
      },
    })
  ).current;

  const opacity = translateY.interpolate({
    inputRange: [0, height - 110],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  // Функция перехода на следующую страницу
  const handleBookingPress = () => {
    navigation.navigate("NextPage"); // Перенаправляем на страницу "NextPage"
  };
  const handleBookingPress2 = () => {
    navigation.navigate("NextPage2"); // Перенаправляем на страницу "NextPage"
  };
  const handleBookingPress3 = () => {
    navigation.navigate("NextPage3"); // Перенаправляем на страницу "NextPage"
  };
  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.menu,
          {
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [0, height - 110],
                  outputRange: [0, height - 110],
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      >
        <Animated.View style={[styles.initialMenu, { opacity }]}>
          <TextInput
            style={styles.searchBar}
            placeholder="Поиск"
          />
          <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItem} >
              <Text>Поиск</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text>Проезд</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text>Друзья</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem} onPress={handleBookingPress3}>
              <Text>Записи</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tabItem}>
              <Text>Профиль</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Контентное меню со специалистами и услугами */}
        <View style={styles.contentMenu}>
          <Text style={styles.greetingText}>Тайм</Text>

          {/* Меню со специалистами */}
          <View style={styles.innerMenu}>
            <View style={styles.BlockFi}>
              <Text style={styles.menuTitle}>Специалисты</Text>
              <View style={styles.BlockFi2}>
                  <Text style={styles.menuTitle2}>3</Text>
              </View>
            </View>
            <View style={styles.itemList}>
              <View style={styles.itemRow}>
                <View style={styles.itemPow}></View>
                <View style={styles.len}></View>
                <View style={styles.itemTextPow}>
                  <Text style={styles.itemText}>Павел Ефремов</Text>
                  <Text style={styles.HAHAText}>Барбер</Text>
                </View>
                <TouchableOpacity onPress={handleBookingPress2}>
                  <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Запись</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.itemRow}>
              <View style={styles.itemPow}></View>
                <View style={styles.len}></View>
                <View style={styles.itemTextPow}>
                  <Text style={styles.itemText}>Кирилл Слепцов</Text>
                  <Text style={styles.HAHAText}>Косметолог</Text>
                </View>
                <TouchableOpacity onPress={handleBookingPress2}>
                  <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Запись</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.itemRow}>
              <View style={styles.itemPow}></View>
                <View style={styles.len}></View>
                <View style={styles.itemTextPow}>
                  <Text style={styles.itemText}>Эдуард Зырянов</Text>
                  <Text style={styles.HAHAText}>Бровист</Text>
                </View>
                <TouchableOpacity onPress={handleBookingPress2}>
                  <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Запись</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Меню с услугами */}
          <View style={styles.innerMenu}>
            <View style={styles.BlockFi}>
              <Text style={styles.menuTitle}>Услуги</Text>
              <View style={styles.BlockFi2}>
                  <Text style={styles.menuTitle2}>3</Text>
              </View>
            </View>
            <View style={styles.itemList}>
              <View style={styles.itemRow}>
                <View style={styles.itemTextPow}>
                  <Text style={styles.itemText}>Стрижка мужская</Text>
                  <Text style={styles.HAHAText}>2 000 Р</Text>
                </View>
                <TouchableOpacity onPress={handleBookingPress}>
                  <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Запись</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.itemRow}>
                <View style={styles.itemTextPow}>
                  <Text style={styles.itemText}>Прием у косметолога</Text>
                  <Text style={styles.HAHAText}>3 000 Р</Text>
                </View>
                <TouchableOpacity onPress={handleBookingPress}>
                  <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Запись</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.itemRow}>
                <View style={styles.itemTextPow}>
                  <Text style={styles.itemText}>Мужская коррекция бровей</Text>
                  <Text style={styles.HAHAText}>1 500 Р</Text>
                </View>
                <TouchableOpacity onPress={handleBookingPress}>
                  <View style={styles.Blooklong}>
                    <Text style={styles.bookingButton}>Запись</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "white",
  },
  len: {
    marginLeft: 10,
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
      color: "white",
   },
  BlockFi: {
      flexDirection: "row",
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
    width: 72,
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
  contentMenu: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
  },
  innerMenu: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
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
});
