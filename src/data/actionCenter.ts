import { IAction } from "types/WidgetTypes"

import {
  IoAccessibilityOutline,
  IoAirplaneOutline,
  IoBluetoothOutline,
  IoLeafOutline,
  IoWifiOutline,
  IoMoonOutline
} from "react-icons/io5"

const actions: IAction[] = [
  {
    Icon: IoWifiOutline,
    text: "Wifi Connection",
    isEnabled: true
  },
  {
    Icon: IoBluetoothOutline,
    text: "Bluetooth",
    isEnabled: true
  },
  {
    Icon: IoAirplaneOutline,
    text: "Airplane Mode"
  },
  {
    Icon: IoLeafOutline,
    text: "Battery Saving"
  },
  {
    Icon: IoMoonOutline,
    text: "Do Not Disturb",
    isEnabled: true
  },
  {
    Icon: IoAccessibilityOutline,
    text: "Accessibility"
  }
]

export default actions
