import React, { useState } from "react";
import { Pressable, Heading, NativeBaseProvider, VStack, Box } from "native-base";
import LampBox from "./components/LampBox/LampBox";

export default function App() {
  return (
    <NativeBaseProvider>
      <VStack>
        <Heading size="md" bg="indigo.500" padding="3" marginTop="16">
          App Iot
        </Heading>
        <LampBox />
      </VStack>
    </NativeBaseProvider>
  );
}
