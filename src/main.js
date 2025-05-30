"use strict";

const cardList = [
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
    copies: 3,
  },
  {
    roomName: "Cracked Flagstones",
    attack: 0,
    curse: 2,
    trap: 0,
    itemName: "Cracked Amulet",
    armor: 1,
    ward: 0,
    detectTraps: 0,
    copies: 3,
  },
  {
    roomName: "Goblin Warren",
    attack: 2,
    curse: 0,
    trap: 0,
    itemName: "Lucky Coin",
    armor: 0,
    ward: 1,
    detectTraps: 0,
    copies: 3,
  },
  {
    roomName: "Dust Weevil Burrow",
    attack: 1,
    curse: 0,
    trap: 0,
    itemName: "Ashes",
    armor: 0,
    ward: 0,
    detectTraps: 0,
    copies: 6,
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
    copies: 3,
  },
  {
    roomName: "Malevolent Mirror-hall",
    attack: 0,
    curse: 3,
    trap: 0,
    itemName: "Mirror Shard",
    armor: 0,
    ward: 2,
    detectTraps: 0,
    copies: 3,
  },
  {
    roomName: "Bandit Ambush",
    attack: 3,
    curse: 0,
    trap: 0,
    itemName: "Burglar's Tools",
    armor: 0,
    ward: 0,
    detectTraps: 2,
    copies: 3,
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
    copies: 3,
  },
  {
    roomName: "Arcane Labyrinth",
    attack: 0,
    curse: 6,
    trap: 0,
    itemName: "Lodestone",
    armor: 0,
    ward: 3,
    detectTraps: 0,
    copies: 3,
  },
  {
    roomName: "Orc Camp",
    attack: 6,
    curse: 0,
    trap: 0,
    itemName: "Dousing Rod",
    armor: 0,
    ward: 0,
    detectTraps: 3,
    copies: 3,
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
    copies: 2,
  },
  {
    roomName: "Undead Catacombs",
    attack: 4,
    curse: 4,
    trap: 0,
    itemName: "Cursed Blade",
    armor: +4,
    ward: -2,
    detectTraps: 0,
    copies: 2,
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
    injuresOnLoot: 3, // injures player on loot
  },
  {
    roomName: "Chamber of Mists",
    attack: 2,
    curse: 4,
    trap: 4,
    itemName: "Mist Shroud",
    armor: 1,
    ward: 2,
    detectTraps: 1,
    copies: 1,
  },
  {
    roomName: "Giant Spider Lair",
    attack: 5,
    curse: 0,
    trap: 5,
    itemName: "Spidersilk Cloak",
    armor: 2,
    ward: 0,
    detectTraps: 2,
    copies: 1,
  },
  {
    roomName: "Dragon's Den",
    attack: 5,
    curse: 5,
    trap: 5,
    itemName: "Dragon's Gold",
    armor: 0,
    ward: 0,
    detectTraps: 0,
    copies: 1,
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
    copies: 3,
  },
  {
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
    copies: 5,
  },
  {
    roomName: "Hall of Shattered Glass",
    attack: 0,
    curse: 0,
    trap: 1,
    itemName: "Lesser Rainbow Potion",
    armor: 1,
    ward: 1,
    detectTraps: 1,
    consumable: true,
    copies: 1,
  },
  {
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
    copies: 3,
  },
  {
    roomName: "Hall of Arcane Snares",
    attack: 0,
    curse: 2,
    trap: 2,
    itemName: "Magic Immunity Potion",
    armor: 0,
    ward: 100,
    detectTraps: 0,
    consumable: true,
    copies: 2,
  },

  {
    roomName: "Hall of the Medusa",
    attack: 2,
    curse: 2,
    trap: 0,
    itemName: "Stoneskin Potion",
    armor: 100,
    ward: 0,
    detectTraps: 0,
    consumable: true,
    copies: 2,
  },
  {
    roomName: "Hall of Assassins",
    attack: 2,
    curse: 0,
    trap: 2,
    itemName: "Spidersense Potion",
    armor: 0,
    ward: 0,
    detectTraps: 100,
    consumable: true,
    copies: 2,
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
    copies: 1,
  },
  {
    roomName: "Blessed Chamber of the Aegis",
    attack: 0,
    curse: 0,
    trap: 0,
    itemName: "Aegis Shield",
    armor: 3,
    ward: 0,
    detectTraps: 0,
    copies: 1,
  },
  {
    roomName: "Blessed Chamber of the Ring",
    attack: 0,
    curse: 0,
    trap: 0,
    itemName: "Ring of Truesight",
    armor: 0,
    ward: 0,
    detectTraps: 3,
    copies: 1,
  },
  {
    roomName: "Blessed Healing Fountain",
    attack: 0,
    curse: 0,
    trap: 0,
    itemName: "Fountain Blessing",
    armor: 0,
    ward: 0,
    detectTraps: 0,
    heals: 20, // amount healed
    autoUseOnLoot: true,
    copies: 7,
  },
  //harmful rooms
  {
    roomName: "Vile Barbed Tunnel",
    attack: 2,
    curse: 0,
    trap: 1,
    itemName: "Scarring Barb",
    armor: -1,
    curse: 0,
    detectTraps: 0,
    copies: 2,
  },
  {
    roomName: "Vile Traumatizing Fog",
    attack: 0,
    curse: 3,
    trap: 0,
    itemName: "Mental Trauma",
    armor: 0,
    curse: -1,
    detectTraps: 0,
    copies: 2,
  },
  {
    roomName: "Vile Intoxicating Still",
    attack: 0,
    curse: 1,
    trap: 2,
    itemName: "Disorientating Brew",
    armor: 0,
    curse: 0,
    detectTraps: -1,
    copies: 2,
  },
  {
    roomName: "Vile Torture Chamber",
    attack: 2,
    curse: 2,
    trap: 2,
    itemName: "Horrific Injuries",
    armor: -1,
    curse: -1,
    detectTraps: -1,
    copies: 1,
  },
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
    copies: 5,
  },
  {
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
    copies: 1,
  },
  {
    roomName: "Cursed Fire Pit",
    attack: 0,
    curse: 2,
    trap: 3,
    itemName: "Burning Coals",
    injuresOnLoot: 3, // injures player on loot
    armor: 1,
    ward: 1,
    detectTraps: 1,
    copies: 2,
  },
  {
    roomName: "Cursed Bestiary",
    attack: 3,
    curse: 0,
    trap: 0,
    itemName: "Cursed Paw",
    armor: -1,
    ward: +1,
    detectTraps: 0,
    copies: 2,
  },
  {
    roomName: "Cursed Statuary",
    attack: 0,
    curse: 3,
    trap: 0,
    itemName: "Cursed Idol",
    armor: 0,
    ward: -1,
    detectTraps: +1,
    copies: 2,
  },
  {
    roomName: "Cursed Herbary",
    attack: 0,
    curse: 0,
    trap: 3,
    itemName: "Cursed Thorn",
    armor: +1,
    ward: 0,
    detectTraps: -1,
    copies: 2,
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
    copies: 3,
  },
  {
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
    copies: 1,
  },
  {
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
    copies: 1,
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
    copies: 1,
  },
  {
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
    copies: 1,
  },
  {
    roomName: "Demonic Circle",
    attack: 6,
    curse: 6,
    trap: 6,
    itemName: "Demonic Rune",
    armor: -6,
    ward: -6,
    detectTraps: -6,
    copies: 1,
  },
  {
    roomName: "Blessed Chapel of Angels",
    attack: 0,
    curse: 0,
    trap: 0,
    itemName: "Blessed Halo",
    armor: 1,
    ward: 3,
    detectTraps: 1,
    copies: 1,
  },
  {
    roomName: "Iron Golem Foundry",
    attack: 4,
    curse: 4,
    trap: 4,
    itemName: "Iron Golem Helm",
    armor: 2,
    ward: 2,
    detectTraps: 2,
    copies: 1,
  },
];

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
      detectTraps: 0,
    },
    characterSheet: {
      hp: 30,
      armor: 0,
      ward: 0,
      detectTraps: 0,
    },

    cardList: cardList,
  };
}

function newGame() {
  const state = createInitialState();

  // Populate deck
  state.cardList.forEach((card) => {
    for (let i = 0; i < card.copies; i++) {
      state.deckPile.push({ ...card });
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
  let newState = { ...state };

  // Draw the next level card (if available)
  if (newState.deckPile.length > 0) {
    let card = newState.deckPile.shift();
    newState.levelTrackerPile.push(card);
    console.log("Advanced to level " + newState.levelTrackerPile.length);
  }

  // Victory check: if the deck is now empty
  if (newState.deckPile.length === 0) {
    newState.phase = "victory";
    newState.log.unshift(
      `You have survived the donjon! Victory at level ${newState.levelTrackerPile.length}! Can you beat it in fewer levels?`
    );
    render(newState);
    return;
  }

  // Continue normal flow
  newState.phase = "explore";
  newState.log.unshift(
    `Advanced to level ${newState.levelTrackerPile.length}.`
  );
  console.log(
    `Advanced to level ${newState.levelTrackerPile.length}. countCards:`,
    countCards(newState),
    newState
  );
  render(newState);
}

//utility function to count cards
function countCards(state) {
  let cardTotal =
    state.deckPile.length +
    state.discardPile.length +
    state.roomPile.length +
    state.itemPile.length +
    state.lootPile.length +
    state.selectionPile.length +
    state.levelTrackerPile.length;

  return cardTotal;
}

//utility function to shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
//calculate danger outcomes and return them as an object.
function calculateDangerOutcome(state, roomPile) {
  // Step 1: Sum threats
  const total = roomPile.reduce(
    (acc, room) => {
      acc.attack += room.attack || 0;
      acc.curse += room.curse || 0;
      acc.trap += room.trap || 0;
      return acc;
    },
    { attack: 0, curse: 0, trap: 0 }
  );

  // Step 2: Sum defenses
  const armor = state.characterSheet.armor + state.tempBuffs.armor;
  const ward = state.characterSheet.ward + state.tempBuffs.ward;
  const detectTraps =
    state.characterSheet.detectTraps + state.tempBuffs.detectTraps;

  // Step 3: Calculate difference
  const dangerDiff = (danger, stat) => Math.max(0, danger - stat);

  const diffAttack = dangerDiff(total.attack, armor);
  const diffCurse = dangerDiff(total.curse, ward);
  const diffTrap = dangerDiff(total.trap, detectTraps);

  const totalIncoming = diffAttack + diffCurse + diffTrap;

  // Step 4: Log the outcome
  const logMessage =
    `Total Threats: Attack: ${total.attack}, Curse: ${total.curse}, Trap: ${total.trap}. ` +
    `Stats - Armor: ${armor}, Ward: ${ward}, Detect Traps: ${detectTraps}. ` +
    `Differences - Attack: ${diffAttack}, Curse: ${diffCurse}, Trap: ${diffTrap}. ` +
    `Total Incoming Damage: ${totalIncoming}.`;

  console.log(logMessage);

  return {
    threats: total,
    stats: { armor, ward, detectTraps },
    diff: { attack: diffAttack, curse: diffCurse, trap: diffTrap },
    totalIncoming,
  };
}

function death(state) {
  let newState = { ...state };
  newState.log.unshift(
    "You have died on level " +
      newState.levelTrackerPile.length +
      ". Game Over!"
  );
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
  let newState = { ...state };

  //move 3 or all from deck to room selection pile
  const numToDraw = Math.min(3, newState.deckPile.length);
  for (let i = 0; i < numToDraw; i++) {
    const card = { ...newState.deckPile.shift() }; // clone each card
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
  let logMessage = "Rooms offered: ";
  newState.selectionPile.forEach((room, index) => {
    if (room.faceDown) {
      logMessage += ` ??? (Face Down), `;
    } else {
      logMessage += ` ${room.roomName}, `;
    }
  });
  newState.log.unshift(logMessage);

  //render the new state

  render(newState);
}

function checkRoomRevealTriggers(state) {
  let newState = { ...state };
  newState.selectionPile.forEach((room) => {
    if (!room.faceDown) {
      newState = applyRoomRevealEffect(room, newState);
    }
  });
  return newState;
}
function checkRoomRevealTriggersForRoomPile(state) {
  let newState = { ...state };
  newState.roomPile.forEach((room) => {
    if (!room.faceDown) {
      newState = applyRoomRevealEffect(room, newState);
    }
  });
  return newState;
}
function applyRoomRevealEffect(room, state) {
  let newState = { ...state };

  if (!room.effectOnRoomReveal) return newState;

  if (
    room.effect === "discard a random item from belt" &&
    newState.itemPile.length > 0
  ) {
    const cursedNames = [
      "Ashes",
      "Burning Coals",
      "Cursed Paw",
      "Cursed Idol",
      "Cursed Thorn",
      "Demonic Rune",
    ];
    const cursedIndex = newState.itemPile.findIndex((item) =>
      cursedNames.includes(item.itemName)
    );

    let discardedItem;
    if (cursedIndex !== -1) {
      discardedItem = newState.itemPile.splice(cursedIndex, 1)[0];
    } else {
      const randomIndex = Math.floor(Math.random() * newState.itemPile.length);
      discardedItem = newState.itemPile.splice(randomIndex, 1)[0];
    }

    newState.discardPile.push(discardedItem);
    newState = itemDropTriggerCheck(newState, discardedItem, room.roomName);
  }

  if (room.effect === "lose HP") {
    newState.characterSheet.hp -= room.hpLoss || 3; // default to 3 if not specified
    newState.log.unshift(
      "Lost " + room.hpLoss + " HP from " + room.roomName + " effect."
    );
    newState = checkDeath(newState);
  }
  if (room.effect === "lose special HP") {
    let stairCollapseDamage = Math.floor(newState.levelTrackerPile.length / 2);

    stairCollapseDamage = Math.max(stairCollapseDamage - 5, 1);
    newState.characterSheet.hp -= stairCollapseDamage;
    newState.log.unshift(
      "Lost " + stairCollapseDamage + " HP from " + room.roomName + " effect."
    );
    newState = checkDeath(newState);
  }

  if (room.effect === "nerf if player has ashes or coals") {
    const hasAshes = newState.itemPile.some(
      (item) => item.itemName === "Ashes"
    );
    const hasCoals = newState.itemPile.some(
      (item) => item.itemName === "Burning Coals"
    );
    if (hasAshes || hasCoals) {
      newState.log.unshift(`The golems appreciate your devotion.`);
      room.attack -= 10;
      room.curse -= 5;
    }
  }

  if (room.effect === "discard all of player's cursed items") {
    const cursedItems = newState.itemPile.filter((item) =>
      ["Cursed Thorn", "Cursed Idol", "Cursed Paw"].includes(item.itemName)
    );
    if (cursedItems.length > 0) {
      cursedItems.forEach((item) => {
        newState.itemPile = newState.itemPile.filter((i) => i !== item);
        newState.discardPile.push(item);
        newState.log.unshift(`Discarded cursed item: ${item.itemName}.`);
        newState = itemDropTriggerCheck(newState, item, room.roomName);
      });
    } else {
      newState.log.unshift("No cursed items to discard.");
    }
  }

  return newState;
}

function checkDeath(state) {
  let newState = { ...state };
  if (newState.characterSheet.hp <= 0) {
    return death(newState);
  }
  return newState;
}

//this function handles a player clicking on one of the 3 rooms from the selection pile while in the roomSelect phase.
//the chosen room (indicated by index number) is moved from the selectionPile to the roomPile, and the other two are placed on the bottom of the deckPile in a random order.
function selectRoomFromPile(state, index) {
  let newState = { ...state };

  // Move the selected room to roomPile
  const selectedRoom = newState.selectionPile.splice(index, 1)[0];
  newState.roomPile.push(selectedRoom);

  //log chosen room
  if (selectedRoom.faceDown) {
    newState.log.unshift(`Selected room: ???.`);
  } else {
    newState.log.unshift(`Selected room: ${selectedRoom.roomName}.`);
  }

  // Shuffle the remaining two, turn them face-up, and place them on the bottom of the deckPile
  const unchosenRooms = [...newState.selectionPile];
  shuffle(unchosenRooms);
  unchosenRooms.forEach((card) => {
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
  let newState = { ...state };

  // 1. Add one secret room to roomPile
  if (newState.deckPile.length > 0) {
    const secretRoom = { ...newState.deckPile.shift(), faceDown: true };
    newState.roomPile.push(secretRoom);
  }

  // 1.5 Reveal all face-down rooms
  newState.roomPile.forEach((room) => {
    if (room.faceDown) {
      room.faceDown = false;
    }
  });

  // 2. Calculate danger
  const danger = calculateDangerOutcome(newState, newState.roomPile);
  const damageTaken = danger.totalIncoming;

  // 3. Apply damage
  newState.characterSheet.hp -= damageTaken;

  //log the rooms explored.
  newState.log.unshift(
    `Ventured through: ${newState.roomPile
      .map((room) => (room.faceDown ? "???" : room.roomName))
      .join(", ")}.`
  );
  //log the damage taken from each damage type.
  newState.log.unshift(
    `Damage taken: Attack: ${danger.diff.attack}, Curse: ${danger.diff.curse}, Trap: ${danger.diff.trap}, Total: ${damageTaken}.`
  );

  // 4. Check if player is dead
  if (newState.characterSheet.hp <= 0) {
    death(newState);
  } else {
    // Victory check: deck is empty and player is alive
    if (newState.deckPile.length === 0) {
      newState.phase = "victory";
      newState.log.unshift(
        `You have survived the donjon! Victory at level ${newState.levelTrackerPile.length}!`
      );
      render(newState);
      return;
    }

    // If not victory, proceed to loot
    newState.tempBuffs = {
      armor: 0,
      ward: 0,
      detectTraps: 0,
    };

    loot(newState);
  }
}

// Loot phase where player can choose an item from lootPile

function loot(state) {
  let newState = { ...state };
  //sets the phase to "loot" .
  newState.phase = "loot";
  //randomly discards a single card from the roomPile.
  if (newState.roomPile.length > 0) {
    const randomIndex = Math.floor(Math.random() * newState.roomPile.length);
    const discardedRoom = newState.roomPile.splice(randomIndex, 1)[0];
    newState.discardPile.push(discardedRoom);
    console.log(`Discarded room: ${discardedRoom.roomName}`);
  }
  //next, it moves all the remaining cards from the roomPile to the lootPile.
  newState.lootPile = newState.lootPile.concat(newState.roomPile);
  newState.roomPile = [];
  render(newState);
}

// This function handles picking an item from the lootPile, assigned to the buttons created in render.
function pickItem(state, index) {
  let newState = { ...state };
  //the selected item is moved from the lootPile to the itemPile
  const selectedItem = newState.lootPile.splice(index, 1)[0];
  if (selectedItem.autoUseOnLoot) {
    newState = itemPickupTriggerCheck(newState, selectedItem);

    // Check if dead, and STOP if so
    if (newState.phase === "death") return;

    console.log(`Auto-used item: ${selectedItem.itemName}`);
    return advanceLevel(newState); // Proceed to next level after auto-use
  }
  newState.itemPile.push(selectedItem);
  //log the item pickup
  newState.log.unshift(`Picked up item: ${selectedItem.itemName}.`);
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
  let newState = { ...state };
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
    newState.log.unshift(
      `Healed for ${item.heals}. Current HP: ${newState.characterSheet.hp}`
    );
    newState.discardPile.push(item); // Auto-use items are discarded after use
  }
  if (item.injuresOnLoot) {
    newState.characterSheet.hp -= item.injuresOnLoot;
    newState.log.unshift(
      `The ${item.itemName} injured you for ${item.injuresOnLoot} HP.`
    );
    newState = checkDeath(newState);
  }
  console.log("checking pickup triggers for " + item.itemName);
  newState = checkDeath(newState);

  return newState;
}

//checks for effects and stat drops on dropping an item. - to be expanded.
function itemDropTriggerCheck(state, item, roomName) {
  let newState = { ...state };
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
  newState.log.unshift(
    `Exploring ${roomName} caused item: ${item.itemName} to be destroyed.`
  );
  return newState;
}

function useConsumable(state, itemIndex) {
  let newState = { ...state };

  // Clone itemPile to avoid mutation
  let consumable = newState.itemPile[itemIndex];
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
    newState.log.unshift(
      `Used ${consumable.itemName}, healed for ${consumable.heals}. HP is now ${newState.characterSheet.hp}`
    );
  } else {
    newState.log.unshift(`Used ${consumable.itemName}.`);
  }

  // Remove from itemPile and discard it
  const removed = newState.itemPile.splice(itemIndex, 1)[0];
  newState.discardPile.push(removed);

  render(newState);
  return newState;
}

//main render function of state.

function render(state) {
  const output = document.getElementById("output");
  output.innerHTML = "";

  // HEADER
  const headerDiv = document.createElement("div");
  headerDiv.className = "game-header";

  const title = document.createElement("h1");
  title.textContent = "DONJONSHUFFLE";

  const subtitle = document.createElement("p");
  subtitle.innerHTML =
    "<em>Try to reach the end of the donjon in the fewest possible levels!</em>";

  headerDiv.appendChild(title);
  headerDiv.appendChild(subtitle);
  output.appendChild(headerDiv);

  // LEVEL
  const levelDiv = document.createElement("div");
  levelDiv.className = "level-info";
  levelDiv.textContent = `Level: ${state.levelTrackerPile.length} Donjon: ${state.deckPile.length} Graveyard: ${state.discardPile.length}`;
  output.appendChild(levelDiv);

  // COMPACT STATS LINE
  const statsDiv = document.createElement("div");
  statsDiv.className = "compact-stats";
  statsDiv.innerHTML = `
    <strong>HP:</strong> ${state.characterSheet.hp} |
    <strong>Armor:</strong> ${
      state.characterSheet.armor + state.tempBuffs.armor
    } |
    <strong>Ward:</strong> ${state.characterSheet.ward + state.tempBuffs.ward} |
    <strong>Detect Traps:</strong> ${
      state.characterSheet.detectTraps + state.tempBuffs.detectTraps
    }
  `;
  output.appendChild(statsDiv);

  // ITEMS
  const equipment = state.itemPile.filter((i) => !i.consumable);
  const consumables = state.itemPile.filter((i) => i.consumable);

  const equipmentDiv = document.createElement("div");
  equipmentDiv.className = "equipment-block";
  equipmentDiv.innerHTML = `<strong>Equipment:</strong><br>`;
  if (equipment.length === 0) {
    equipmentDiv.innerHTML += "None";
  } else {
    equipment.forEach((item) => {
      const props = [];
      if (item.armor) props.push(`Armor: ${item.armor}`);
      if (item.ward) props.push(`Ward: ${item.ward}`);
      if (item.detectTraps) props.push(`Detect Traps: ${item.detectTraps}`);

      const line =
        props.length > 0
          ? `${item.itemName} (${props.join(", ")})`
          : `${item.itemName}`;

      equipmentDiv.innerHTML += line + "<br>";
    });
  }
  output.appendChild(equipmentDiv);

  const consumablesDiv = document.createElement("div");
  consumablesDiv.className = "consumables-block";
  consumablesDiv.innerHTML = `<strong>Consumables:</strong> `;
  if (consumables.length === 0) {
    consumablesDiv.innerHTML += "None";
  } else {
    consumables.forEach((item) => {
      const btn = document.createElement("button");
      btn.className = "consumable-button";
      btn.textContent = `${item.itemName}`;
      btn.onclick = () => useConsumable(state, state.itemPile.indexOf(item));
      consumablesDiv.appendChild(btn);
    });
  }
  output.appendChild(consumablesDiv);

  // CURRENT DUNGEON FLOOR
  const floorDiv = document.createElement("div");
  floorDiv.className = "floor-section";
  floorDiv.innerHTML = "<strong>Current Donjon Floor:</strong><br>";

  const floorTable = document.createElement("table");
  floorTable.className = "floor-table";
  state.roomPile.forEach((room) => {
    const row = document.createElement("tr");
    row.className = room.faceDown ? "room-face-down" : "room-face-up";

    if (room.faceDown) {
      row.innerHTML = `
    <td class="room-name"><em>???</em></td>
    <td class="room-stat">ATK: ?</td>
    <td class="room-stat">CUR: ?</td>
    <td class="room-stat">TRP: ?</td>
  `;
    } else {
      row.innerHTML = `
    <td class="room-name">${room.roomName}</td>
    <td class="room-stat">${room.attack !== 0 ? `ATK: ${room.attack}` : ""}</td>
    <td class="room-stat">${room.curse !== 0 ? `CUR: ${room.curse}` : ""}</td>
    <td class="room-stat">${room.trap !== 0 ? `TRP: ${room.trap}` : ""}</td>
  `;
    }
    floorTable.appendChild(row);
  });
  floorDiv.appendChild(floorTable);
  output.appendChild(floorDiv);

  // ROOM SELECTION
  if (state.phase === "roomSelect") {
    const selectionDiv = document.createElement("div");
    selectionDiv.className = "room-selection";
    selectionDiv.innerHTML = "<strong>Select a Room:</strong><br>";
    state.selectionPile.forEach((card, index) => {
      const cardDiv = document.createElement("div");
      cardDiv.className = "room-card";

      if (card.faceDown) {
        cardDiv.textContent = "??? (Face Down)";
      } else {
        const lines = [`<strong>${card.roomName}</strong>`];
        if (card.attack !== 0) lines.push(`Attack: ${card.attack}`);
        if (card.curse !== 0) lines.push(`Curse: ${card.curse}`);
        if (card.trap !== 0) lines.push(`Trap: ${card.trap}`);
        cardDiv.innerHTML = lines.join("<br>");
      }

      cardDiv.onclick = () => selectRoomFromPile(state, index);
      selectionDiv.appendChild(cardDiv);
    });
    output.appendChild(selectionDiv);
  }

  // LOOTING PHASE DISPLAY
  if (state.phase === "loot") {
    const lootDiv = document.createElement("div");
    lootDiv.className = "loot-section";
    lootDiv.innerHTML = "<strong>Choose one item to loot:</strong><br>";

    state.lootPile.slice(0, 3).forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "loot-card";

      let lines = [`<strong>${item.itemName}</strong>`];
      if (item.armor) lines.push(`Armor: ${item.armor}`);
      if (item.ward) lines.push(`Ward: ${item.ward}`);
      if (item.detectTraps) lines.push(`Detect Traps: ${item.detectTraps}`);
      if (item.heals) lines.push(`Heals: ${item.heals}`);
      if (item.consumable) lines.push(`<em>Consumable</em>`);

      itemDiv.innerHTML = lines.join("<br>");
      itemDiv.onclick = () => pickItem(state, index);
      lootDiv.appendChild(itemDiv);
    });
    output.appendChild(lootDiv);
  }

  // BUTTONS
  const buttonDiv = document.createElement("div");
  buttonDiv.className = "action-buttons";

  const exploreBtn = document.createElement("button");
  exploreBtn.className = "explore-button";
  exploreBtn.textContent = "Explore";
  exploreBtn.disabled =
    state.phase !== "explore" ||
    state.roomPile.length >= 5 ||
    state.deckPile.length === 0;
  exploreBtn.onclick = () => explore(state);
  buttonDiv.appendChild(exploreBtn);

  const ventureBtn = document.createElement("button");
  ventureBtn.className = "venture-button";
  ventureBtn.textContent = "Venture";
  ventureBtn.disabled =
    state.phase !== "explore" || state.roomPile.length === 0;
  ventureBtn.onclick = () => venture(state);
  buttonDiv.appendChild(ventureBtn);

  output.appendChild(buttonDiv);

  // LOG AREA
  const logDiv = document.createElement("div");
  logDiv.className = "log-container";
  logDiv.innerHTML = "<strong>Log: </strong><br>";
  const logMessages = state.log.slice(0, 10);
  logMessages.forEach((msg, index) => {
    const logEntry = document.createElement("div");
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
  const newGameDiv = document.createElement("div");
  newGameDiv.className = "new-game-container";
  output.appendChild(newGameDiv);
  const newGameBtn = document.createElement("button");
  newGameBtn.className = "new-game-button";
  newGameBtn.textContent = "New Game";
  newGameBtn.onclick = newGame;
  output.appendChild(newGameBtn);

  //DEATH PHASE MODIFICATIONS
  if (state.phase === "death") {
    document.querySelectorAll("button:not(.new-game-button)").forEach((btn) => {
      btn.disabled = true;
    });
  }
  if (state.phase === "death") {
    document.querySelectorAll(".log-entry").forEach((entry) => {
      entry.classList.add("faded-log");
    });
  }
  if (state.phase === "death") {
    document
      .querySelectorAll("#output > *:not(.new-game-button)")
      .forEach((el) => {
        el.style.opacity = "0.5";
      });
  }

  //VICTORY PHASE MODIFICATIONS
  if (state.phase === "victory") {
    document.querySelectorAll("button:not(.new-game-button)").forEach((btn) => {
      btn.disabled = true;
    });
    document.querySelectorAll(".log-entry").forEach((entry) => {
      entry.style.color = "green"; // Make log text green
    });
    document
      .querySelectorAll("#output > *:not(.new-game-button)")
      .forEach((el) => {
        el.style.opacity = "0.5";
      });
  }
}

window.onload = () => {
  newGame();
};
