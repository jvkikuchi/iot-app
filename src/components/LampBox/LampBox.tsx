import { Box, Pressable, Text } from "native-base";
import { useEffect, useState } from "react";
import LampOn from "./Lamps/LampOn";
import LampOff from "./Lamps/LampOff";

export const LampBox = () => {
  const [isLampOn, setIsLampOn] = useState(false);
  const [mac, setMac] = useState("");

  var ws = new WebSocket("ws://10.0.2.2:8080");

  useEffect(() => {
    ws.onopen = (e) => {
      console.log("Connected to the server");
    };

    ws.onclose = (e) => {
      console.log("Disconnected. Check internet or server.");
    };

    ws.onerror = (e) => {
      console.log(e);
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);

      setMac(data.code);

      if (data.value === 1) {
        setIsLampOn(true);
      } else {
        setIsLampOn(false);
      }
    };
  }, []);

  return (
    <Pressable>
      <Box
        bg={isLampOn ? "yellow.50" : "gray.300"}
        width="1/2"
        height="32"
        marginTop="10"
        borderRadius="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {isLampOn ? <LampOn /> : <LampOff />}
      </Box>
      <Text fontWeight="bold">Device MAC: {mac}</Text>
    </Pressable>
  );
};

export default LampBox;
