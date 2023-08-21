import "react-native-gesture-handler";
import MainStack from "./src/navigation/Stack";
import { GlobalProvider } from "./src/context/GlobalContext";

export default function App() {
  return (
    <GlobalProvider>
      <MainStack />
    </GlobalProvider>
  );
}
