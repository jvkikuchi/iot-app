import Svg, { Path, G } from "react-native-svg";

const LampOn = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={100}
    height={100}
    viewBox="0 0 64 64"
    {...props}
  >
    <Path
      fill="#F9EBB2"
      d="M41.15 44H36V25a2 2 0 0 1 4 0 1 1 0 1 0 2 0 4 4 0 0 0-4-4 3.971 3.971 0 0 0-3 1.381c-.733-.84-1.799-1.381-3-1.381s-2.267.541-3 1.381A3.971 3.971 0 0 0 26 21a4 4 0 0 0-4 4 1 1 0 1 0 2 0 2 2 0 0 1 4 0v19h-5.15C15.271 40.525 10 32.883 10 24c0-12.15 9.85-22 22-22s22 9.85 22 22c0 8.883-5.271 16.527-12.85 20z"
    />
    <G fill="#394240">
      <Path d="M32 0C18.745 0 8 10.746 8 24c0 9.684 5.743 18.006 14 21.801V60c0 2.211 1.789 4 4 4h12c2.211 0 4-1.789 4-4V45.801C50.257 42.006 56 33.684 56 24 56 10.746 45.255 0 32 0zm8 60a2 2 0 0 1-2 2H26a2 2 0 0 1-2-2v-2h16v2zm0-4H24v-4h16v4zm0-6H24v-4h16v4zm-10-6V25a2 2 0 0 1 4 0v19h-4zm11.15 0H36V25a2 2 0 0 1 4 0 1 1 0 1 0 2 0 4 4 0 0 0-4-4 3.971 3.971 0 0 0-3 1.381c-.733-.84-1.799-1.381-3-1.381s-2.267.541-3 1.381A3.971 3.971 0 0 0 26 21a4 4 0 0 0-4 4 1 1 0 1 0 2 0 2 2 0 0 1 4 0v19h-5.15C15.271 40.525 10 32.883 10 24c0-12.15 9.85-22 22-22s22 9.85 22 22c0 8.883-5.271 16.527-12.85 20z" />
      <Path d="M32 6a1 1 0 1 0 0 2c4.418 0 8.418 1.791 11.313 4.688 0 0 .944 1.055 1.687.312s-.271-1.729-.271-1.729A17.955 17.955 0 0 0 32 6z" />
    </G>
    <G fill="#B4CCB9">
      <Path d="M24 60a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2H24v2zM24 52h16v4H24zM24 46h16v4H24z" />
    </G>
    <Path fill="#F9EBB2" d="M34 44h-4V25a2 2 0 0 1 4 0v19z" />
  </Svg>
);
export default LampOn;
