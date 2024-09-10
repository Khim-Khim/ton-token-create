import { useSearchParams } from "react-router-dom";

export function getNetwork(): "testnet" {
  return "testnet";
}

export function useNetwork(): { network: "mainnet" | "testnet" } {
  return {
    network: getNetwork(),
  };
}
