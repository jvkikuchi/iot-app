import { Box, Pressable } from "native-base";
import { useEffect, useRef, useState } from "react";
import LampOn from "./Lamps/LampOn";
import LampOff from "./Lamps/LampOff";

export const LampBox = () => {
  const [isOn, setIsOn] = useState(0);

  var ws = new WebSocket('ws://10.0.2.2:8080');


  useEffect(() => {
    // const serverMessagesList = [];
    ws.onopen = (e) => {
      console.log('Connected to the server')
      // setDisableButton(false);
    };

    ws.onclose = (e) => {
      console.log('Disconnected. Check internet or server.')
      // setDisableButton(true);
    };

    ws.onerror = (e) => {
      console.log(e);
    };
    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      setIsOn(data.value);
    };
  }, [])

  return (
    <Pressable>
      <Box
        bg={isOn === 0 ? "gray.300" : "yellow.50"}
        width="1/2"
        height="32"
        marginTop="10"
        borderRadius="10"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {isOn ? <LampOn /> : <LampOff />}
      </Box>
    </Pressable>
  );
};

export default LampBox;
