"use strict";

const path = require("path");
const isLocal = typeof process.pkg === "undefined";
const basePath = isLocal ? process.cwd() : path.dirname(process.execPath);
const { MODE } = require(path.join(basePath, "src/blendMode.js"));

const buildDir = path.join(basePath, "/build");
const layersDir = path.join(basePath, "/layers");

const description =
  "Mighty Mongooses NFT - Breed Collect & Earn";
const baseUri = "ipfs://Qmc66fCshEuecgP6Yhihj1KmAisowFFYZcjr2rY59aXy8t";

const outputJPEG = false; // if false, the generator outputs png's

// if you use an empty/transparent file, set the name here.
const emptyLayerName = "NONE";

//IF you need a provenance hash, turn this on
const hashImages = true;

const layerConfigurations = [
  {
    growEditionSizeTo: 10,
  layersOrder: [
    { name: "Back Accessory" },
    { name: "Head" },
    { name: "Clothes" },
    { name: "Eyes" },
    { name: "Hair" },
    { name: "Head Accessory" },
    { name: "Shirt Accessories" },
  ],
},

//regualr peon lady
{
  growEditionSizeTo: 20,
  layersOrder: [
    { name: "Back Accessory" },
    { name: "Head" },
    { name: "Clothes" },
    { name: "Eyes" },
    { name: "Hair" },
    { name: "Head Accessory" },
    { name: "Shirt Accessories" },
  ],
},

//regualr tribe lady
{
  growEditionSizeTo: 30,
  layersOrder: [
    { name: "Back Accessory" },
    { name: "Head" },
    { name: "Clothes" },
    { name: "Eyes" },
    { name: "Hair" },
    { name: "Head Accessory" },
    { name: "Shirt Accessories" },
  ],
},

//////////////////////////////////////////////

///MALE////

//////////////////////////////////////////////


];

const MalelayerConfigurations = [
 
//////////////////////////////////////////////

///MALE////

//////////////////////////////////////////////

//regualr doctor executive
{
growEditionSizeTo: 40,
layersOrder: [
 
  { name: 'ball', number: 2 },
  { name: 'eye color', number: 12 },
  { name: 'iris', number: 3 },
  { name: 'shine', number: 1 },
  { name: 'shine', number: 1 },
 
  { name: 'top lid', number: 3 },
],
}, 



//regualr advocate
{
growEditionSizeTo: 50,
layersOrder: [
  { name: 'background', number: 1 },
  { name: 'ball', number: 2 },
  
  { name: 'iris', number: 3 },
  { name: 'shine', number: 1 },
  { name: 'shine', number: 1 },
  { name: 'bottom lid', number: 3 },
 
],
},

//regualr shoolam 
{
growEditionSizeTo: 60,
layersOrder: [
  { name: 'background', number: 1 },
  { name: 'ball', number: 2 },
  { name: 'eye color', number: 12 },
  { name: 'iris', number: 3 },
 
  { name: 'shine', number: 1 },
  { name: 'bottom lid', number: 3 },
  { name: 'top lid', number: 3 },
],
},

];

/**
 * Incompatible items can be added to this object by a files cleanName
 * This works in layer order, meaning, you need to define the layer that comes
 * first as the Key, and the incompatible items that _may_ come after.
 * The current version requires all layers to have unique names, or you may
 * accidentally set incompatibilities for the _wrong_ item.
 */
const incompatible = {
  //   Red: ["Dark Long"],
  //   // directory incompatible with directory example
  //   White: ["rare-Pink-Pompadour"],
};

/**
 * Require combinations of files when constructing DNA, this bypasses the
 * randomization and weights.
 *
 * The layer order matters here, the key (left side) is an item within
 * the layer that comes first in the stack.
 * the items in the array are "required" items that should be pulled from folders
 * further in the stack
 */
 const forcedCombinations = {
//   floral: ["MetallicShades", "Golden Sakura"],
 };

const shuffleLayerConfigurations = false;

/**
 * In the event that a filename cannot be the trait value name, for example when
 * multiple items should have the same value, specify
 * clean-filename: trait-value override pairs. Wrap filenames with spaces in quotes.
 */
 const traitValueOverrides = {
//   Helmet: "Space Helmet",
//   "gold chain": "GOLDEN NECKLACE",
 };

const debugLogs = false;

const format = {
  width: 800,
  height: 800,
};

const background = {
  generate: true,
  brightness: "80%",
};

const extraMetadata = {};

const extraAttributes = (_edition) => [
  // Optionally, if you need to overwrite one of your layers attributes.
  // You can include the same name as the layer, here, and it will overwrite
  //
  //if (growEditionSizeTo: 300 
  {
    trait_type: "Gender",
    value: (_edition % 2 === 0) ? "Male" : "Female",
  },

  // {
  //   display_type: "boost_number",
  //   trait_type: "Aqua Power",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Health",
  //   value: Math.random() * 100,
  // },
  // {
  //   display_type: "boost_number",
  //   trait_type: "Mana",
  //   value: Math.floor(Math.random() * 100),
  // },
];

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.width / format.height,
  imageName: "preview.png",
};

module.exports = {
  buildDir,
  layersDir,
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  MalelayerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraAttributes,
  extraMetadata,
  incompatible,
  forcedCombinations,
  traitValueOverrides,
  outputJPEG,
  emptyLayerName,
  hashImages,
};
