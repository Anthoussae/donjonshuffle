// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var cardList = [
//easiest rooms
{
  roomName: "Shatterglass Trap",
  attack: 0,
  curse: 0,
  trap: 2,
  itemName: "Monocle",
  armor: 0,
  ward: 0,
  detectTraps: 1,
  copies: 3
}, {
  roomName: "Cracked Flagstones",
  attack: 0,
  curse: 2,
  trap: 0,
  itemName: "Cracked Amulet",
  armor: 1,
  ward: 0,
  detectTraps: 0,
  copies: 3
}, {
  roomName: "Goblin Warren",
  attack: 2,
  curse: 0,
  trap: 0,
  itemName: "Lucky Coin",
  armor: 0,
  ward: 1,
  detectTraps: 0,
  copies: 3
}, {
  roomName: "Dust Weevil Burrow",
  attack: 1,
  curse: 0,
  trap: 0,
  itemName: "Ashes",
  armor: 0,
  ward: 0,
  detectTraps: 0,
  copies: 6
},
//basic rooms
{
  roomName: "Spike Pit",
  attack: 0,
  curse: 0,
  trap: 3,
  itemName: "Trapdoor Shield",
  armor: 2,
  ward: 0,
  detectTraps: 0,
  copies: 3
}, {
  roomName: "Malevolent Mirror-hall",
  attack: 0,
  curse: 3,
  trap: 0,
  itemName: "Mirror Shard",
  armor: 0,
  ward: 2,
  detectTraps: 0,
  copies: 3
}, {
  roomName: "Bandit Ambush",
  attack: 3,
  curse: 0,
  trap: 0,
  itemName: "Burglar's Tools",
  armor: 0,
  ward: 0,
  detectTraps: 2,
  copies: 3
},
//medium rooms
{
  roomName: "Guillotine Gauntlet",
  attack: 0,
  curse: 0,
  trap: 6,
  itemName: "Scimitar",
  armor: 3,
  ward: 0,
  detectTraps: 0,
  copies: 3
}, {
  roomName: "Arcane Labyrinth",
  attack: 0,
  curse: 6,
  trap: 0,
  itemName: "Lodestone",
  armor: 0,
  ward: 3,
  detectTraps: 0,
  copies: 3
}, {
  roomName: "Orc Camp",
  attack: 6,
  curse: 0,
  trap: 0,
  itemName: "Dousing Rod",
  armor: 0,
  ward: 0,
  detectTraps: 3,
  copies: 3
},
//hard rooms
{
  roomName: "Poisoned Pit",
  attack: 0,
  curse: 4,
  trap: 4,
  itemName: "Poisoned Dagger",
  armor: 3,
  ward: -1,
  detectTraps: 0,
  copies: 2
}, {
  roomName: "Undead Catacombs",
  attack: 4,
  curse: 4,
  trap: 0,
  itemName: "Cursed Blade",
  armor: +4,
  ward: -2,
  detectTraps: 0,
  copies: 2
},
//extreme rooms
{
  roomName: "Razorwire Maze",
  attack: 0,
  curse: 2,
  trap: 8,
  itemName: "Crown of Razors",
  armor: 3,
  ward: 1,
  detectTraps: 1,
  copies: 1,
  injuresOnLoot: 3 // injures player on loot
}, {
  roomName: "Chamber of Mists",
  attack: 2,
  curse: 4,
  trap: 4,
  itemName: "Mist Shroud",
  armor: 1,
  ward: 2,
  detectTraps: 1,
  copies: 1
}, {
  roomName: "Giant Spider Lair",
  attack: 5,
  curse: 0,
  trap: 5,
  itemName: "Spidersilk Cloak",
  armor: 2,
  ward: 0,
  detectTraps: 2,
  copies: 1
}, {
  roomName: "Dragon's Den",
  attack: 5,
  curse: 5,
  trap: 5,
  itemName: "Dragon's Gold",
  armor: 0,
  ward: 0,
  detectTraps: 0,
  copies: 1
},
//potion rooms
{
  roomName: "Hall of Brine",
  attack: 0,
  curse: 1,
  trap: 0,
  itemName: "Lesser Healing Potion",
  armor: 0,
  ward: 0,
  detectTraps: 0,
  heals: 5,
  consumable: true,
  copies: 3
}, {
  roomName: "Hall of Alchemy",
  attack: 1,
  curse: 1,
  trap: 1,
  itemName: "Healing Potion",
  armor: 0,
  ward: 0,
  detectTraps: 0,
  heals: 10,
  consumable: true,
  copies: 5
}, {
  roomName: "Hall of Shattered Glass",
  attack: 0,
  curse: 0,
  trap: 1,
  itemName: "Lesser Rainbow Potion",
  armor: 1,
  ward: 1,
  detectTraps: 1,
  consumable: true,
  copies: 1
}, {
  roomName: "Hall of Prisms",
  attack: 1,
  curse: 2,
  trap: 2,
  itemName: "Rainbow Potion",
  armor: 3,
  ward: 3,
  detectTraps: 3,
  heals: 5,
  consumable: true,
  copies: 3
}, {
  roomName: "Hall of Arcane Snares",
  attack: 0,
  curse: 2,
  trap: 2,
  itemName: "Magic Immunity Potion",
  armor: 0,
  ward: 100,
  detectTraps: 0,
  consumable: true,
  copies: 2
}, {
  roomName: "Hall of the Medusa",
  attack: 2,
  curse: 2,
  trap: 0,
  itemName: "Stoneskin Potion",
  armor: 100,
  ward: 0,
  detectTraps: 0,
  consumable: true,
  copies: 2
}, {
  roomName: "Hall of Assassins",
  attack: 2,
  curse: 0,
  trap: 2,
  itemName: "Spidersense Potion",
  armor: 0,
  ward: 0,
  detectTraps: 100,
  consumable: true,
  copies: 2
},
// blessed rooms
{
  roomName: "Blessed Chamber of the Amulet",
  attack: 0,
  curse: 0,
  trap: 0,
  itemName: "Nazar Amulet",
  armor: 0,
  ward: 3,
  detectTraps: 0,
  copies: 1
}, {
  roomName: "Blessed Chamber of the Aegis",
  attack: 0,
  curse: 0,
  trap: 0,
  itemName: "Aegis Shield",
  armor: 3,
  ward: 0,
  detectTraps: 0,
  copies: 1
}, {
  roomName: "Blessed Chamber of the Ring",
  attack: 0,
  curse: 0,
  trap: 0,
  itemName: "Ring of Truesight",
  armor: 0,
  ward: 0,
  detectTraps: 3,
  copies: 1
}, {
  roomName: "Blessed Healing Fountain",
  attack: 0,
  curse: 0,
  trap: 0,
  itemName: "Fountain Blessing",
  armor: 0,
  ward: 0,
  detectTraps: 0,
  heals: 20,
  // amount healed
  autoUseOnLoot: true,
  copies: 7
}, //harmful rooms
_defineProperty(_defineProperty(_defineProperty({
  roomName: "Vile Barbed Tunnel",
  attack: 2,
  curse: 0,
  trap: 1,
  itemName: "Scarring Barb",
  armor: -1
}, "curse", 0), "detectTraps", 0), "copies", 2), _defineProperty(_defineProperty(_defineProperty({
  roomName: "Vile Traumatizing Fog",
  attack: 0,
  curse: 3,
  trap: 0,
  itemName: "Mental Trauma",
  armor: 0
}, "curse", -1), "detectTraps", 0), "copies", 2), _defineProperty(_defineProperty(_defineProperty({
  roomName: "Vile Intoxicating Still",
  attack: 0,
  curse: 1,
  trap: 2,
  itemName: "Disorientating Brew",
  armor: 0
}, "curse", 0), "detectTraps", -1), "copies", 2), _defineProperty(_defineProperty(_defineProperty({
  roomName: "Vile Torture Chamber",
  attack: 2,
  curse: 2,
  trap: 2,
  itemName: "Horrific Injuries",
  armor: -1
}, "curse", -1), "detectTraps", -1), "copies", 1),
//cursed rooms
{
  roomName: "Cursed Oubliette",
  attack: 0,
  curse: 0,
  trap: 0,
  effectOnRoomReveal: true,
  effect: "discard a random item from belt",
  itemName: "Ashes",
  armor: 0,
  ward: 0,
  detectTraps: 0,
  copies: 5
}, {
  roomName: "Cursed Rust Portal",
  attack: 0,
  curse: 2,
  trap: 2,
  effectOnRoomReveal: true,
  effect: "discard a random item from belt",
  itemName: "Rust",
  armor: -1,
  ward: 0,
  detectTraps: 0,
  copies: 1
}, {
  roomName: "Cursed Fire Pit",
  attack: 0,
  curse: 2,
  trap: 3,
  itemName: "Burning Coals",
  injuresOnLoot: 3,
  // injures player on loot
  armor: 1,
  ward: 1,
  detectTraps: 1,
  copies: 2
}, {
  roomName: "Cursed Bestiary",
  attack: 3,
  curse: 0,
  trap: 0,
  itemName: "Cursed Paw",
  armor: -1,
  ward: +1,
  detectTraps: 0,
  copies: 2
}, {
  roomName: "Cursed Statuary",
  attack: 0,
  curse: 3,
  trap: 0,
  itemName: "Cursed Idol",
  armor: 0,
  ward: -1,
  detectTraps: +1,
  copies: 2
}, {
  roomName: "Cursed Herbary",
  attack: 0,
  curse: 0,
  trap: 3,
  itemName: "Cursed Thorn",
  armor: +1,
  ward: 0,
  detectTraps: -1,
  copies: 2
},
//detonating rooms
{
  roomName: "Sudden Fireball Trap",
  attack: 0,
  curse: 1,
  trap: 1,
  effectOnRoomReveal: true,
  effect: "lose HP",
  hpLoss: 3,
  itemName: "Ashes",
  armor: 0,
  ward: 0,
  detectTraps: 0,
  copies: 3
}, {
  roomName: "Sudden Death Fog Trap",
  attack: 0,
  curse: 2,
  trap: 2,
  effectOnRoomReveal: true,
  effect: "lose HP",
  hpLoss: 5,
  itemName: "Gasmask",
  armor: 1,
  ward: 0,
  detectTraps: 1,
  copies: 1
}, {
  roomName: "Sudden Crumbling Staircase",
  attack: 2,
  curse: 2,
  trap: 2,
  effectOnRoomReveal: true,
  effect: "lose special HP",
  itemName: "brick",
  armor: 1,
  ward: 0,
  detectTraps: 0,
  copies: 1
},
//special rooms
{
  roomName: "Golem Forge",
  attack: 10,
  curse: 5,
  trap: 0,
  effectOnRoomReveal: true,
  effect: "nerf if player has ashes or coals",
  itemName: "Golem Armor",
  armor: 5,
  ward: 2,
  detectTraps: 0,
  copies: 1
}, {
  roomName: "Forbidden Bazaar",
  attack: 1,
  curse: 1,
  trap: 1,
  effectOnRoomReveal: true,
  effect: "discard all of player's cursed items",
  itemName: "Forbidden Tome",
  armor: 1,
  ward: 1,
  detectTraps: 1,
  copies: 1
}, {
  roomName: "Demonic Circle",
  attack: 6,
  curse: 6,
  trap: 6,
  itemName: "Demonic Rune",
  armor: -6,
  ward: -6,
  detectTraps: -6,
  copies: 1
}, {
  roomName: "Blessed Chapel of Angels",
  attack: 0,
  curse: 0,
  trap: 0,
  itemName: "Blessed Halo",
  armor: 1,
  ward: 3,
  detectTraps: 1,
  copies: 1
}, {
  roomName: "Iron Golem Foundry",
  attack: 4,
  curse: 4,
  trap: 4,
  itemName: "Iron Golem Helm",
  armor: 2,
  ward: 2,
  detectTraps: 2,
  copies: 1
}];
function createInitialState() {
  return {
    phase: "explore",
    log: [],
    deckPile: [],
    discardPile: [],
    roomPile: [],
    itemPile: [],
    lootPile: [],
    selectionPile: [],
    levelTrackerPile: [],
    tempBuffs: {
      armor: 0,
      ward: 0,
      detectTraps: 0
    },
    characterSheet: {
      hp: 30,
      armor: 0,
      ward: 0,
      detectTraps: 0
    },
    cardList: cardList
  };
}
function newGame() {
  var state = createInitialState();

  // Populate deck
  state.cardList.forEach(function (card) {
    for (var i = 0; i < card.copies; i++) {
      state.deckPile.push(_objectSpread({}, card));
    }
  });

  //prep game
  shuffle(state.deckPile);
  state.discardPile = state.deckPile.splice(0, 10); // burn 10 - on paper, used to track HP.

  console.log("New game started. countCards:", countCards(state), state);
  //log game start
  state.log.unshift("New donjon run started.");
  advanceLevel(state);
}
function advanceLevel(state) {
  var newState = _objectSpread({}, state);

  // Draw the next level card (if available)
  if (newState.deckPile.length > 0) {
    var card = newState.deckPile.shift();
    newState.levelTrackerPile.push(card);
    console.log("Advanced to level " + newState.levelTrackerPile.length);
  }

  // Victory check: if the deck is now empty
  if (newState.deckPile.length === 0) {
    newState.phase = "victory";
    newState.log.unshift("You have survived the donjon! Victory at level ".concat(newState.levelTrackerPile.length, "! Can you beat it in fewer levels?"));
    render(newState);
    return;
  }

  // Continue normal flow
  newState.phase = "explore";
  newState.log.unshift("Advanced to level ".concat(newState.levelTrackerPile.length, "."));
  console.log("Advanced to level ".concat(newState.levelTrackerPile.length, ". countCards:"), countCards(newState), newState);
  render(newState);
}

//utility function to count cards
function countCards(state) {
  var cardTotal = state.deckPile.length + state.discardPile.length + state.roomPile.length + state.itemPile.length + state.lootPile.length + state.selectionPile.length + state.levelTrackerPile.length;
  return cardTotal;
}

//utility function to shuffle
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref5 = [array[j], array[i]];
    array[i] = _ref5[0];
    array[j] = _ref5[1];
  }
}
//calculate danger outcomes and return them as an object.
function calculateDangerOutcome(state, roomPile) {
  // Step 1: Sum threats
  var total = roomPile.reduce(function (acc, room) {
    acc.attack += room.attack || 0;
    acc.curse += room.curse || 0;
    acc.trap += room.trap || 0;
    return acc;
  }, {
    attack: 0,
    curse: 0,
    trap: 0
  });

  // Step 2: Sum defenses
  var armor = state.characterSheet.armor + state.tempBuffs.armor;
  var ward = state.characterSheet.ward + state.tempBuffs.ward;
  var detectTraps = state.characterSheet.detectTraps + state.tempBuffs.detectTraps;

  // Step 3: Calculate difference
  var dangerDiff = function dangerDiff(danger, stat) {
    return Math.max(0, danger - stat);
  };
  var diffAttack = dangerDiff(total.attack, armor);
  var diffCurse = dangerDiff(total.curse, ward);
  var diffTrap = dangerDiff(total.trap, detectTraps);
  var totalIncoming = diffAttack + diffCurse + diffTrap;

  // Step 4: Log the outcome
  var logMessage = "Total Threats: Attack: ".concat(total.attack, ", Curse: ").concat(total.curse, ", Trap: ").concat(total.trap, ". ") + "Stats - Armor: ".concat(armor, ", Ward: ").concat(ward, ", Detect Traps: ").concat(detectTraps, ". ") + "Differences - Attack: ".concat(diffAttack, ", Curse: ").concat(diffCurse, ", Trap: ").concat(diffTrap, ". ") + "Total Incoming Damage: ".concat(totalIncoming, ".");
  console.log(logMessage);
  return {
    threats: total,
    stats: {
      armor: armor,
      ward: ward,
      detectTraps: detectTraps
    },
    diff: {
      attack: diffAttack,
      curse: diffCurse,
      trap: diffTrap
    },
    totalIncoming: totalIncoming
  };
}
function death(state) {
  var newState = _objectSpread({}, state);
  newState.log.unshift("You have died on level " + newState.levelTrackerPile.length + ". Game Over!");
  newState.phase = "death"; // set phase to death
  render(newState);
  return newState;
}
function explore(state) {
  if (state.roomPile.length >= 5) {
    console.log("Room limit reached (5). Can't explore more.");
    return;
  }
  //  copy state
  var newState = _objectSpread({}, state);

  //move 3 or all from deck to room selection pile
  var numToDraw = Math.min(3, newState.deckPile.length);
  for (var i = 0; i < numToDraw; i++) {
    var card = _objectSpread({}, newState.deckPile.shift()); // clone each card
    newState.selectionPile.push(card);
  }
  console.log("selection pile " + newState.selectionPile[0].roomName);

  //third card is face down
  if (newState.selectionPile[2]) {
    newState.selectionPile[2].faceDown = true;
  }

  //check triggers
  newState = checkRoomRevealTriggers(newState);

  //advance game phase
  newState.phase = "roomSelect";

  //log the rooms that were offered.
  var logMessage = "Rooms offered: ";
  newState.selectionPile.forEach(function (room, index) {
    if (room.faceDown) {
      logMessage += " ??? (Face Down), ";
    } else {
      logMessage += " ".concat(room.roomName, ", ");
    }
  });
  newState.log.unshift(logMessage);

  //render the new state

  render(newState);
}
function checkRoomRevealTriggers(state) {
  var newState = _objectSpread({}, state);
  newState.selectionPile.forEach(function (room) {
    if (!room.faceDown) {
      newState = applyRoomRevealEffect(room, newState);
    }
  });
  return newState;
}
function checkRoomRevealTriggersForRoomPile(state) {
  var newState = _objectSpread({}, state);
  newState.roomPile.forEach(function (room) {
    if (!room.faceDown) {
      newState = applyRoomRevealEffect(room, newState);
    }
  });
  return newState;
}
function applyRoomRevealEffect(room, state) {
  var newState = _objectSpread({}, state);
  if (!room.effectOnRoomReveal) return newState;
  if (room.effect === "discard a random item from belt" && newState.itemPile.length > 0) {
    var cursedNames = ["Ashes", "Burning Coals", "Cursed Paw", "Cursed Idol", "Cursed Thorn", "Demonic Rune"];
    var cursedIndex = newState.itemPile.findIndex(function (item) {
      return cursedNames.includes(item.itemName);
    });
    var discardedItem;
    if (cursedIndex !== -1) {
      discardedItem = newState.itemPile.splice(cursedIndex, 1)[0];
    } else {
      var randomIndex = Math.floor(Math.random() * newState.itemPile.length);
      discardedItem = newState.itemPile.splice(randomIndex, 1)[0];
    }
    newState.discardPile.push(discardedItem);
    newState = itemDropTriggerCheck(newState, discardedItem, room.roomName);
  }
  if (room.effect === "lose HP") {
    newState.characterSheet.hp -= room.hpLoss || 3; // default to 3 if not specified
    newState.log.unshift("Lost " + room.hpLoss + " HP from " + room.roomName + " effect.");
    newState = checkDeath(newState);
  }
  if (room.effect === "lose special HP") {
    var stairCollapseDamage = Math.floor(newState.levelTrackerPile.length / 2);
    stairCollapseDamage = Math.max(stairCollapseDamage - 5, 1);
    newState.characterSheet.hp -= stairCollapseDamage;
    newState.log.unshift("Lost " + stairCollapseDamage + " HP from " + room.roomName + " effect.");
    newState = checkDeath(newState);
  }
  if (room.effect === "nerf if player has ashes or coals") {
    var hasAshes = newState.itemPile.some(function (item) {
      return item.itemName === "Ashes";
    });
    var hasCoals = newState.itemPile.some(function (item) {
      return item.itemName === "Burning Coals";
    });
    if (hasAshes || hasCoals) {
      newState.log.unshift("The golems appreciate your devotion.");
      room.attack -= 10;
      room.curse -= 5;
    }
  }
  if (room.effect === "discard all of player's cursed items") {
    var cursedItems = newState.itemPile.filter(function (item) {
      return ["Cursed Thorn", "Cursed Idol", "Cursed Paw"].includes(item.itemName);
    });
    if (cursedItems.length > 0) {
      cursedItems.forEach(function (item) {
        newState.itemPile = newState.itemPile.filter(function (i) {
          return i !== item;
        });
        newState.discardPile.push(item);
        newState.log.unshift("Discarded cursed item: ".concat(item.itemName, "."));
        newState = itemDropTriggerCheck(newState, item, room.roomName);
      });
    } else {
      newState.log.unshift("No cursed items to discard.");
    }
  }
  return newState;
}
function checkDeath(state) {
  var newState = _objectSpread({}, state);
  if (newState.characterSheet.hp <= 0) {
    return death(newState);
  }
  return newState;
}

//this function handles a player clicking on one of the 3 rooms from the selection pile while in the roomSelect phase.
//the chosen room (indicated by index number) is moved from the selectionPile to the roomPile, and the other two are placed on the bottom of the deckPile in a random order.
function selectRoomFromPile(state, index) {
  var newState = _objectSpread({}, state);

  // Move the selected room to roomPile
  var selectedRoom = newState.selectionPile.splice(index, 1)[0];
  newState.roomPile.push(selectedRoom);

  //log chosen room
  if (selectedRoom.faceDown) {
    newState.log.unshift("Selected room: ???.");
  } else {
    newState.log.unshift("Selected room: ".concat(selectedRoom.roomName, "."));
  }

  // Shuffle the remaining two, turn them face-up, and place them on the bottom of the deckPile
  var unchosenRooms = _toConsumableArray(newState.selectionPile);
  shuffle(unchosenRooms);
  unchosenRooms.forEach(function (card) {
    card.faceDown = false;
  });
  newState.deckPile = newState.deckPile.concat(unchosenRooms);

  // Clear the selection pile
  newState.selectionPile = [];

  // Reset phase to explore
  newState.phase = "explore";
  render(newState);
}

//venture forth into the current configuration of explored rooms.

function venture(state) {
  var newState = _objectSpread({}, state);

  // 1. Add one secret room to roomPile
  if (newState.deckPile.length > 0) {
    var secretRoom = _objectSpread(_objectSpread({}, newState.deckPile.shift()), {}, {
      faceDown: true
    });
    newState.roomPile.push(secretRoom);
  }

  // 1.5 Reveal all face-down rooms
  newState.roomPile.forEach(function (room) {
    if (room.faceDown) {
      room.faceDown = false;
    }
  });

  // 2. Calculate danger
  var danger = calculateDangerOutcome(newState, newState.roomPile);
  var damageTaken = danger.totalIncoming;

  // 3. Apply damage
  newState.characterSheet.hp -= damageTaken;

  //log the rooms explored.
  newState.log.unshift("Ventured through: ".concat(newState.roomPile.map(function (room) {
    return room.faceDown ? "???" : room.roomName;
  }).join(", "), "."));
  //log the damage taken from each damage type.
  newState.log.unshift("Damage taken: Attack: ".concat(danger.diff.attack, ", Curse: ").concat(danger.diff.curse, ", Trap: ").concat(danger.diff.trap, ", Total: ").concat(damageTaken, "."));

  // 4. Check if player is dead
  if (newState.characterSheet.hp <= 0) {
    death(newState);
  } else {
    // Victory check: deck is empty and player is alive
    if (newState.deckPile.length === 0) {
      newState.phase = "victory";
      newState.log.unshift("You have survived the donjon! Victory at level ".concat(newState.levelTrackerPile.length, "!"));
      render(newState);
      return;
    }

    // If not victory, proceed to loot
    newState.tempBuffs = {
      armor: 0,
      ward: 0,
      detectTraps: 0
    };
    loot(newState);
  }
}

// Loot phase where player can choose an item from lootPile

function loot(state) {
  var newState = _objectSpread({}, state);
  //sets the phase to "loot" .
  newState.phase = "loot";
  //randomly discards a single card from the roomPile.
  if (newState.roomPile.length > 0) {
    var randomIndex = Math.floor(Math.random() * newState.roomPile.length);
    var discardedRoom = newState.roomPile.splice(randomIndex, 1)[0];
    newState.discardPile.push(discardedRoom);
    console.log("Discarded room: ".concat(discardedRoom.roomName));
  }
  //next, it moves all the remaining cards from the roomPile to the lootPile.
  newState.lootPile = newState.lootPile.concat(newState.roomPile);
  newState.roomPile = [];
  render(newState);
}

// This function handles picking an item from the lootPile, assigned to the buttons created in render.
function pickItem(state, index) {
  var newState = _objectSpread({}, state);
  //the selected item is moved from the lootPile to the itemPile
  var selectedItem = newState.lootPile.splice(index, 1)[0];
  if (selectedItem.autoUseOnLoot) {
    newState = itemPickupTriggerCheck(newState, selectedItem);

    // Check if dead, and STOP if so
    if (newState.phase === "death") return;
    console.log("Auto-used item: ".concat(selectedItem.itemName));
    return advanceLevel(newState); // Proceed to next level after auto-use
  }
  newState.itemPile.push(selectedItem);
  //log the item pickup
  newState.log.unshift("Picked up item: ".concat(selectedItem.itemName, "."));
  //the remaining items are all discarded.
  newState.discardPile = newState.discardPile.concat(newState.lootPile);
  newState.lootPile = [];

  //check for item pickup triggers
  newState = itemPickupTriggerCheck(newState, selectedItem);
  newState = checkDeath(newState);

  // Check if dead, and STOP if so
  if (newState.phase === "death") return;
  advanceLevel(newState);
}

//checks for effects and stat mods on equipping or picking up an item.
function itemPickupTriggerCheck(state, item) {
  var newState = _objectSpread({}, state);
  //check for stat boost items
  if (!item.consumable) {
    if (item.armor) {
      newState.characterSheet.armor += item.armor;
    }
    if (item.ward) {
      newState.characterSheet.ward += item.ward;
    }
    if (item.detectTraps) {
      newState.characterSheet.detectTraps += item.detectTraps;
    }
  }
  if (item.heals && item.autoUseOnLoot) {
    newState.characterSheet.hp += item.heals;
    // Ensure HP does not exceed max (e.g., 30)
    newState.characterSheet.hp = Math.min(newState.characterSheet.hp, 30);
    // Log the healing
    newState.log.unshift("Healed for ".concat(item.heals, ". Current HP: ").concat(newState.characterSheet.hp));
    newState.discardPile.push(item); // Auto-use items are discarded after use
  }
  if (item.injuresOnLoot) {
    newState.characterSheet.hp -= item.injuresOnLoot;
    newState.log.unshift("The ".concat(item.itemName, " injured you for ").concat(item.injuresOnLoot, " HP."));
    newState = checkDeath(newState);
  }
  console.log("checking pickup triggers for " + item.itemName);
  newState = checkDeath(newState);
  return newState;
}

//checks for effects and stat drops on dropping an item. - to be expanded.
function itemDropTriggerCheck(state, item, roomName) {
  var newState = _objectSpread({}, state);
  //check for stat drop items
  console.log("checking drop triggers for " + item.itemName);
  if (!item.consumable) {
    if (item.armor) {
      newState.characterSheet.armor -= item.armor;
    }
    if (item.ward) {
      newState.characterSheet.ward -= item.ward;
    }
    if (item.detectTraps) {
      newState.characterSheet.detectTraps -= item.detectTraps;
    }
  }
  // Log the item drop
  newState.log.unshift("Exploring ".concat(roomName, " caused item: ").concat(item.itemName, " to be destroyed."));
  return newState;
}
function useConsumable(state, itemIndex) {
  var newState = _objectSpread({}, state);

  // Clone itemPile to avoid mutation
  var consumable = newState.itemPile[itemIndex];
  if (!consumable || !consumable.consumable) return newState;

  // Apply effects
  if (consumable.armor) {
    newState.tempBuffs.armor += consumable.armor;
  }
  if (consumable.ward) {
    newState.tempBuffs.ward += consumable.ward;
  }
  if (consumable.detectTraps) {
    newState.tempBuffs.detectTraps += consumable.detectTraps;
  }
  if (consumable.heals) {
    newState.characterSheet.hp += consumable.heals;
    newState.characterSheet.hp = Math.min(newState.characterSheet.hp, 30);
    newState.log.unshift("Used ".concat(consumable.itemName, ", healed for ").concat(consumable.heals, ". HP is now ").concat(newState.characterSheet.hp));
  } else {
    newState.log.unshift("Used ".concat(consumable.itemName, "."));
  }

  // Remove from itemPile and discard it
  var removed = newState.itemPile.splice(itemIndex, 1)[0];
  newState.discardPile.push(removed);
  render(newState);
  return newState;
}

//main render function of state.

function render(state) {
  var output = document.getElementById("output");
  output.innerHTML = "";

  // HEADER
  var headerDiv = document.createElement("div");
  headerDiv.className = "game-header";
  var title = document.createElement("h1");
  title.textContent = "DONJONSHUFFLE";
  var subtitle = document.createElement("p");
  subtitle.innerHTML = "<em>Try to reach the end of the donjon in the fewest possible levels!</em>";
  headerDiv.appendChild(title);
  headerDiv.appendChild(subtitle);
  output.appendChild(headerDiv);

  // LEVEL
  var levelDiv = document.createElement("div");
  levelDiv.className = "level-info";
  levelDiv.textContent = "Level: ".concat(state.levelTrackerPile.length, " Donjon: ").concat(state.deckPile.length, " Graveyard: ").concat(state.discardPile.length);
  output.appendChild(levelDiv);

  // COMPACT STATS LINE
  var statsDiv = document.createElement("div");
  statsDiv.className = "compact-stats";
  statsDiv.innerHTML = "\n    <strong>HP:</strong> ".concat(state.characterSheet.hp, " |\n    <strong>Armor:</strong> ").concat(state.characterSheet.armor + state.tempBuffs.armor, " |\n    <strong>Ward:</strong> ").concat(state.characterSheet.ward + state.tempBuffs.ward, " |\n    <strong>Detect Traps:</strong> ").concat(state.characterSheet.detectTraps + state.tempBuffs.detectTraps, "\n  ");
  output.appendChild(statsDiv);

  // ITEMS
  var equipment = state.itemPile.filter(function (i) {
    return !i.consumable;
  });
  var consumables = state.itemPile.filter(function (i) {
    return i.consumable;
  });
  var equipmentDiv = document.createElement("div");
  equipmentDiv.className = "equipment-block";
  equipmentDiv.innerHTML = "<strong>Equipment:</strong><br>";
  if (equipment.length === 0) {
    equipmentDiv.innerHTML += "None";
  } else {
    equipment.forEach(function (item) {
      var props = [];
      if (item.armor) props.push("Armor: ".concat(item.armor));
      if (item.ward) props.push("Ward: ".concat(item.ward));
      if (item.detectTraps) props.push("Detect Traps: ".concat(item.detectTraps));
      var line = props.length > 0 ? "".concat(item.itemName, " (").concat(props.join(", "), ")") : "".concat(item.itemName);
      equipmentDiv.innerHTML += line + "<br>";
    });
  }
  output.appendChild(equipmentDiv);
  var consumablesDiv = document.createElement("div");
  consumablesDiv.className = "consumables-block";
  consumablesDiv.innerHTML = "<strong>Consumables:</strong> ";
  if (consumables.length === 0) {
    consumablesDiv.innerHTML += "None";
  } else {
    consumables.forEach(function (item) {
      var btn = document.createElement("button");
      btn.className = "consumable-button";
      btn.textContent = "".concat(item.itemName);
      btn.onclick = function () {
        return useConsumable(state, state.itemPile.indexOf(item));
      };
      consumablesDiv.appendChild(btn);
    });
  }
  output.appendChild(consumablesDiv);

  // CURRENT DUNGEON FLOOR
  var floorDiv = document.createElement("div");
  floorDiv.className = "floor-section";
  floorDiv.innerHTML = "<strong>Current Donjon Floor:</strong><br>";
  var floorTable = document.createElement("table");
  floorTable.className = "floor-table";
  state.roomPile.forEach(function (room) {
    var row = document.createElement("tr");
    row.className = room.faceDown ? "room-face-down" : "room-face-up";
    if (room.faceDown) {
      row.innerHTML = "\n    <td class=\"room-name\"><em>???</em></td>\n    <td class=\"room-stat\">ATK: ?</td>\n    <td class=\"room-stat\">CUR: ?</td>\n    <td class=\"room-stat\">TRP: ?</td>\n  ";
    } else {
      row.innerHTML = "\n    <td class=\"room-name\">".concat(room.roomName, "</td>\n    <td class=\"room-stat\">").concat(room.attack !== 0 ? "ATK: ".concat(room.attack) : "", "</td>\n    <td class=\"room-stat\">").concat(room.curse !== 0 ? "CUR: ".concat(room.curse) : "", "</td>\n    <td class=\"room-stat\">").concat(room.trap !== 0 ? "TRP: ".concat(room.trap) : "", "</td>\n  ");
    }
    floorTable.appendChild(row);
  });
  floorDiv.appendChild(floorTable);
  output.appendChild(floorDiv);

  // ROOM SELECTION
  if (state.phase === "roomSelect") {
    var selectionDiv = document.createElement("div");
    selectionDiv.className = "room-selection";
    selectionDiv.innerHTML = "<strong>Select a Room:</strong><br>";
    state.selectionPile.forEach(function (card, index) {
      var cardDiv = document.createElement("div");
      cardDiv.className = "room-card";
      if (card.faceDown) {
        cardDiv.textContent = "??? (Face Down)";
      } else {
        var lines = ["<strong>".concat(card.roomName, "</strong>")];
        if (card.attack !== 0) lines.push("Attack: ".concat(card.attack));
        if (card.curse !== 0) lines.push("Curse: ".concat(card.curse));
        if (card.trap !== 0) lines.push("Trap: ".concat(card.trap));
        cardDiv.innerHTML = lines.join("<br>");
      }
      cardDiv.onclick = function () {
        return selectRoomFromPile(state, index);
      };
      selectionDiv.appendChild(cardDiv);
    });
    output.appendChild(selectionDiv);
  }

  // LOOTING PHASE DISPLAY
  if (state.phase === "loot") {
    var lootDiv = document.createElement("div");
    lootDiv.className = "loot-section";
    lootDiv.innerHTML = "<strong>Choose one item to loot:</strong><br>";
    state.lootPile.slice(0, 3).forEach(function (item, index) {
      var itemDiv = document.createElement("div");
      itemDiv.className = "loot-card";
      var lines = ["<strong>".concat(item.itemName, "</strong>")];
      if (item.armor) lines.push("Armor: ".concat(item.armor));
      if (item.ward) lines.push("Ward: ".concat(item.ward));
      if (item.detectTraps) lines.push("Detect Traps: ".concat(item.detectTraps));
      if (item.heals) lines.push("Heals: ".concat(item.heals));
      if (item.consumable) lines.push("<em>Consumable</em>");
      itemDiv.innerHTML = lines.join("<br>");
      itemDiv.onclick = function () {
        return pickItem(state, index);
      };
      lootDiv.appendChild(itemDiv);
    });
    output.appendChild(lootDiv);
  }

  // BUTTONS
  var buttonDiv = document.createElement("div");
  buttonDiv.className = "action-buttons";
  var exploreBtn = document.createElement("button");
  exploreBtn.className = "explore-button";
  exploreBtn.textContent = "Explore";
  exploreBtn.disabled = state.phase !== "explore" || state.roomPile.length >= 5 || state.deckPile.length === 0;
  exploreBtn.onclick = function () {
    return explore(state);
  };
  buttonDiv.appendChild(exploreBtn);
  var ventureBtn = document.createElement("button");
  ventureBtn.className = "venture-button";
  ventureBtn.textContent = "Venture";
  ventureBtn.disabled = state.phase !== "explore" || state.roomPile.length === 0;
  ventureBtn.onclick = function () {
    return venture(state);
  };
  buttonDiv.appendChild(ventureBtn);
  output.appendChild(buttonDiv);

  // LOG AREA
  var logDiv = document.createElement("div");
  logDiv.className = "log-container";
  logDiv.innerHTML = "<strong>Log: </strong><br>";
  var logMessages = state.log.slice(0, 10);
  logMessages.forEach(function (msg, index) {
    var logEntry = document.createElement("div");
    logEntry.className = "log-entry";
    if (index === 0) {
      logEntry.classList.add("log-entry-top");
    }
    logEntry.style.opacity = Math.max(1 - index * 0.1, 0.1);
    logEntry.textContent = msg;
    logDiv.appendChild(logEntry);
  });
  output.appendChild(logDiv);

  // NEW GAME BUTTON
  //give it a div
  var newGameDiv = document.createElement("div");
  newGameDiv.className = "new-game-container";
  output.appendChild(newGameDiv);
  var newGameBtn = document.createElement("button");
  newGameBtn.className = "new-game-button";
  newGameBtn.textContent = "New Game";
  newGameBtn.onclick = newGame;
  output.appendChild(newGameBtn);

  //DEATH PHASE MODIFICATIONS
  if (state.phase === "death") {
    document.querySelectorAll("button:not(.new-game-button)").forEach(function (btn) {
      btn.disabled = true;
    });
  }
  if (state.phase === "death") {
    document.querySelectorAll(".log-entry").forEach(function (entry) {
      entry.classList.add("faded-log");
    });
  }
  if (state.phase === "death") {
    document.querySelectorAll("#output > *:not(.new-game-button)").forEach(function (el) {
      el.style.opacity = "0.5";
    });
  }

  //VICTORY PHASE MODIFICATIONS
  if (state.phase === "victory") {
    document.querySelectorAll("button:not(.new-game-button)").forEach(function (btn) {
      btn.disabled = true;
    });
    document.querySelectorAll(".log-entry").forEach(function (entry) {
      entry.style.color = "green"; // Make log text green
    });
    document.querySelectorAll("#output > *:not(.new-game-button)").forEach(function (el) {
      el.style.opacity = "0.5";
    });
  }
}
window.onload = function () {
  newGame();
};
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52222" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map