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
    growEditionSizeTo: 1000,
  layersOrder: [
    { name: "0-FeMale Warrior" },
    { name: "1-female-background" },
    { name: "2-female-tail" },
    { name: "7-police-hair" },
    { name: "3-female-body" },
    { name: "4-female-eyes" },
    { name: "5-female-mouth" },
    { name: "6-police-sunglasses" },
    { name: "8-hat-police army" },
    { name: "9-handobjetcs-police-army" },
    { name: "10-female-LegToes" },
    { name: "11-1-3-armybag" },
    { name: "11-1-shirs-police-army" },
  
    { name: "11-2-pants-army-police" },
    { name: "12-Shoes-police-army" },
  ],
},

//regualr peon lady
{
  growEditionSizeTo: 2000,
  layersOrder: [
      { name: "0-FeMale Warrior" },
      { name: "1-female-background" },
      { name: "2-female-tail" },
      { name: "3-female-body" },
      { name: "4-female-eyes" },
      { name: "5-female-mouth" },
      { name: "7-hair-peon" },
      { name: "8-peon-hat" },
      { name: "9-handobjects-peon" },
      { name: "10-female-LegToes" },
      { name: "11-1-peon-shirt" },
      { name: "12-shoe-peon" },
  ],
},

//regualr tribe lady
{
  growEditionSizeTo: 3000,
  layersOrder: [
      { name: "0-FeMale Warrior" },
      { name: "1-female-background" },
      { name: "2-female-tail" },
      { name: "9-handobjects-tribe-backarrows" },
      { name: "3-female-body" },
      { name: "4-female-eyes" },
      { name: "5-female-mouth" },
      { name: "7-tribe-hair" },
      { name: "9-handobjects-tribe" },
      { name: "10-female-LegToes" },
      { name: "11-tribe-dress" },
      { name: "11-tribe-pant" },
      { name: "12-shoes-none" },
      { name: "12-1-tribe-ornaments" },
  ],
},

//////////////////////////////////////////////

///MALE////

//////////////////////////////////////////////

/* //regualr doctor executive
{
growEditionSizeTo: 20,
layersOrder: [
    { name: "0-Male Warrior" },
    { name: "1-male-background" },
    { name: "2-male-tail" },
    { name: "3-male-body" },
    { name: "4-male-eyes" },
    { name: "5-male-mouth" },
    { name: "7-hair-executive and doctor" },
    { name: "6-male-Sunglasses" }, 
    { name: "6-male-Sunglasses", display_type: 'boost_number' },
    { name: "9-handobjects-ex doctor" },
    { name: "10-male-LegToes" },
    
    { name: "11-2-doctor-executive-pants" },
    { name: "11-2-doctor-shirt-executive" },
    { name: "12-doctor-shoes" },
],
}, 
 */


/* //regualr advocate
{
growEditionSizeTo: 25,
layersOrder: [
    { name: "0-Male Warrior" },
    { name: "1-male-background" },
    { name: "2-male-tail" },
    { name: "3-male-body" },
    { name: "4-male-eyes" },
    { name: "5-male-mouth" },
    { name: "7-advocate-hair" },
    
    { name: "11-1-Shirt-advocate" },
    { name: "9-hand-objects-advocate" },
    { name: "10-male-LegToes" },
],
}, */

/* //regualr shoolam 
{
growEditionSizeTo: 30,
layersOrder: [
    { name: "0-Male Warrior" },
    { name: "1-male-background" },
    { name: "2-male-tail" },
    { name: "3-male-body" },
    { name: "4-male-eyes" },
    { name: "5-male-mouth" },
    { name: "7-shoolam-hair" },
    { name: "11-2-shoolam-boy-shirt" },
    { name: "12-shoolam-pants" },
    { name: "9-handobject-shoolam boy" },
    { name: "10-male-LegToes" },
    { name: "12-Shoes-shoolam" },
],
}, */

];

const MalelayerConfigurations = [
  /* {
    growEditionSizeTo: 5,
  layersOrder: [
    { name: "0-FeMale Warrior" },
    { name: "1-female-background" },
    { name: "2-female-tail" },
    { name: "7-police-hair" },
    { name: "3-female-body" },
    { name: "4-female-eyes" },
    { name: "5-female-mouth" },
    { name: "6-police-sunglasses" },
    { name: "8-hat-police army" },
    { name: "9-handobjetcs-police-army" },
    { name: "10-female-LegToes" },
    { name: "11-1-3-armybag" },
    { name: "11-1-shirs-police-army" },
  
    { name: "11-2-pants-army-police" },
    { name: "12-Shoes-police-army" },
  ],
}, */

/* //regualr peon lady
{
  growEditionSizeTo: 10,
  layersOrder: [
      { name: "0-FeMale Warrior" },
      { name: "1-female-background" },
      { name: "2-female-tail" },
      { name: "3-female-body" },
      { name: "4-female-eyes" },
      { name: "5-female-mouth" },
      { name: "7-hair-peon" },
      { name: "8-peon-hat" },
      { name: "9-handobjects-peon" },
      { name: "10-female-LegToes" },
      { name: "11-1-peon-shirt" },
      { name: "12-shoe-peon" },
  ],
}, */

/* //regualr tribe lady
{
  growEditionSizeTo: 15,
  layersOrder: [
      { name: "0-FeMale Warrior" },
      { name: "1-female-background" },
      { name: "2-female-tail" },
      { name: "9-handobjects-tribe-backarrows" },
      { name: "3-female-body" },
      { name: "4-female-eyes" },
      { name: "5-female-mouth" },
      { name: "7-tribe-hair" },
      { name: "9-handobjects-tribe" },
      { name: "10-female-LegToes" },
      { name: "11-tribe-dress" },
      { name: "11-tribe-pant" },
      { name: "12-shoes-none" },
      { name: "12-1-tribe-ornaments" },
  ],
},
 */
//////////////////////////////////////////////

///MALE////

//////////////////////////////////////////////

//regualr doctor executive
{
growEditionSizeTo: 1000,
layersOrder: [
    { name: "0-Male Warrior" },
    { name: "1-male-background" },
    { name: "2-male-tail" },
    { name: "3-male-body" },
    { name: "4-male-eyes" },
    { name: "5-male-mouth" },
    { name: "7-hair-executive and doctor" },
    { name: "6-male-Sunglasses" }, 
    { name: "6-male-Sunglasses", display_type: 'boost_number' },
    { name: "9-handobjects-ex doctor" },
    { name: "10-male-LegToes" },
    
    { name: "11-2-doctor-executive-pants" },
    { name: "11-2-doctor-shirt-executive" },
    { name: "12-doctor-shoes" },
],
}, 



//regualr advocate
{
growEditionSizeTo: 2000,
layersOrder: [
    { name: "0-Male Warrior" },
    { name: "1-male-background" },
    { name: "2-male-tail" },
    { name: "3-male-body" },
    { name: "4-male-eyes" },
    { name: "5-male-mouth" },
    { name: "7-advocate-hair" },
    
    { name: "11-1-Shirt-advocate" },
    { name: "9-hand-objects-advocate" },
    { name: "10-male-LegToes" },
],
},

//regualr shoolam 
{
growEditionSizeTo: 3000,
layersOrder: [
    { name: "0-Male Warrior" },
    { name: "1-male-background" },
    { name: "2-male-tail" },
    { name: "3-male-body" },
    { name: "4-male-eyes" },
    { name: "5-male-mouth" },
    { name: "7-shoolam-hair" },
    { name: "11-2-shoolam-boy-shirt" },
    { name: "12-shoolam-pants" },
    { name: "9-handobject-shoolam boy" },
    { name: "10-male-LegToes" },
    { name: "12-Shoes-shoolam" },
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
    trait_type: "0-Male Warrior",
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
