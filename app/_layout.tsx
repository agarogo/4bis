import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="NextPage" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="NextPage2" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Zapis" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Kont" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="Form" 
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen name="NextPage3" 
        options={{
          headerShown:false
        }}
      />

    </Stack>
  );
}
