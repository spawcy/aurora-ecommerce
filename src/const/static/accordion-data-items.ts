import { COMMUNICATION_DATA_ITEMS } from "./communication-data-items";
import { DISPLAY_DATA_ITEMS } from "./display-data-items";
import { SENSOR_DATA_ITEMS } from "./sensor-data-items";

export const ACCORDION_DATA = [
  {
    key: "communication",
    value: "item-1",
    trigger: "Communication Devices",
    contentData: COMMUNICATION_DATA_ITEMS,
  },
  {
    key: "sensors",
    value: "item-2",
    trigger: "Sensors",
    contentData: SENSOR_DATA_ITEMS,
  },
  {
    key: "display",
    value: "item-3",
    trigger: "Display Devices",
    children: [
      {
        key: "ipc",
        value: "lcd",
        trigger: "IPC",
        contentData: DISPLAY_DATA_ITEMS,
      },
    ],
  },
];
