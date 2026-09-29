import type { DropConfig } from "./src/config.ts";

export const config: DropConfig = {
  // Robinhood Chain Mainnet
  chain: "robinhood",

  // WOOF.EXE Drop contract
  contract: "0x9590793289f2192a5cdc8f0261917bb17be34d0a",

  // OpenSea Studio starts at token 1
  tokenIdStart: 1,

  // Total supply
  maxSupply: 999,

  reveal: {
    // Reveal NFT immediately when its mint is confirmed onchain
    mode: "on-mint",

    shuffle: {
      // No shuffle: token #1 = metadata #1
      enabled: false,
      commitment: null,
    },
  },

  mintState: {
    // OpenSea Studio / SeaDrop mints sequentially
    mode: "sequential",

    // Check blockchain every 10 seconds for unminted tokens
    ttlSeconds: 10,

    // Reveal immediately after the mint is visible
    confirmations: 0,
  },

  metadata: {
    // Metadata will be read from the HTTP source
    source: "http",

    // Your metadata already contains complete image IPFS URLs
    imageBaseUri: "",

    // Metadata files are 1.json, 2.json, 3.json, etc.
    pathTemplate: "{index}.json",
  },

  placeholder: {
    name: "WOOF.EXE #{tokenId}",
    description:
      "999 dogs. One executable. No uninstall button. WOOF.EXE is running on Robinhood Chain.",
    image: "ipfs://REPLACE_WITH_YOUR_PLACEHOLDER_IMAGE_CID",
    attributes: [],
  },

  contractMetadata: null,
};

export default config;
