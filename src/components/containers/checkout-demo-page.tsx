import { InteractiveCheckout, Product } from "@/components/ui/interactive-checkout";

export const defaultProducts: Product[] = [
  {
    id: "1",
    name: "Smart Zigbee Multi-Sensor",
    price: 2_999_999,
    category: ["serial-converter", "touch-screen"],
    image: "/product__placeholder.png",
    color: "Black/White",
  },
  {
    id: "2",
    name: "LoRaWAN Air Quality Monitor",
    price: 1_999_999,
    category: ["non-touch-screen"],
    image: "/product__placeholder__2.png",
    color: "Grey/Blue",
  },
  {
    id: "3",
    name: "WiFi Smart Plug Energy Meter",
    price: 3_500_000,
    category: ["touch-screen", "hub"],
    image: "/product__placeholder__3.png",
    color: "White/Red",
  },
];

function InteractiveCheckoutDemo() {
  return <InteractiveCheckout products={defaultProducts} />;
}

export { InteractiveCheckoutDemo };
