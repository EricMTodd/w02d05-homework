console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $middleEarth = $("<section id='middleEarth'></section>");

  // 2. append the section to the body of the DOM.
  $("body").append($middleEarth);

  // 3. use a for loop to iterate over the lands array that does the following:
  for (let i = 0; i < lands.length; i++) {
    const $article = $("<article/>");
    $article.attr("id", lands[i]);
    const $landHeader = $("<h1/>");
    $landHeader.text(lands[i]);
    $article.append($landHeader);
    $middleEarth.append($article);
  };

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.
  // User note: it is always a good idea to establish a variable when using jQuery. This way it is simple to create elements and keep them organized. Once a variable has been established like the one directly below, though the element itself is not yet appended to the HTML document, it is still usable in the rest of the code that will be written.


        const $list = $("<ul/>");
        for(i = 0; i < hobbits.length; i++) {
    // This can be written like this for further readability and efficiency.
    // $list.append(`<li class="hobbit">${hobbits[i]}<li/>);
        const $hobbit = $("<li/>");
        $($hobbit).text(hobbits[i]);
  
  // 2. give each hobbit a class of "hobbit"
        $($hobbit).attr("class", "hobbit");
        $($list).append($hobbit)
        };

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id
  $("#The-Shire").append($list);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  const $theRing = $("<div/>");
  $($theRing).attr("id", "the-ring");

  // 2. add the ring as a child of Frodo
  $("li:first-child").append($theRing);

  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
  const $list = $("<ul/>");
  for (i = 0; i < baddies.length; i++) {
  const $baddy = $("<li/>");
  $($baddy).text(baddies[i]);

  // 2. give each of the baddies a class of "baddy"
  $($baddy).attr("class", "baddy");
  $($list).append($baddy)
  };

  // 3. remember to append them to Mordor
  $("#Mordor").append($list);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
  $("#middleEarth").append("<aside/>");

  // 2. display an unordered list of buddies in the aside
  const $list = $("<ul/>");
  for (i = 0; i < buddies.length; i++) {
    const $buddy = $("<li/>");
    $($buddy).text(buddies[i]);

  // 3. give each of the buddies a class of "buddy"
  $($buddy).attr("class", "buddy");
  $($list).append($buddy);
  };
  $("aside").append($list);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
  const $party = $("#The-Shire ul");
  $("#Rivendell").append($party);

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
  const $strider = $("aside li:last-child").prev();
  $($strider).text("Aragorn");

  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
  const $theFellowship = $("<div/>");
  $($theFellowship).attr("id", "the-fellowship");

  // 2. add an h1 with the text 'The Fellowship' to this new div
  $($theFellowship).append("<h1>The Fellowship</h1>");

  // 3. append the fellowship to middle-earth
  $("#middleEarth").append($theFellowship);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const $hobbits = $("#Rivendell ul");
  const $notHobbits = $("aside ul");
  $("#the-fellowship").append($hobbits);
  $("#the-fellowship").append($notHobbits);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
  // This can be achieved by using the following code:
  // $(`li:contains("Gandlaf")`);
  const $gandalfTheWhite = $("#the-fellowship ul:last-child li:first-child");
  $($gandalfTheWhite).text("Gandalf the White");

  // 2. add a class "the-white" to this element
  $($gandalfTheWhite).attr("class", "the-white");

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  // Done

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown!");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  const $boromir = $("#the-fellowship ul:last-child li:last-child");
  $($boromir).css("text-decoration", "line-through");

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  const $urukHai = $("#Mordor li:last-child").prev();
  $($urukHai).remove();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  const $frodo = $("#the-fellowship ul:nth-child(2) li:first-child");
  $("#Mordor").append($frodo);
  const $sam = $("#the-fellowship ul:nth-child(2) li:first-child");
  $("#Mordor").append($sam);

  // 2. add a div with an id of 'mount-doom' to Mordor
  const $mtDoom = $("<div/>");
  $($mtDoom).attr("id", "mount-doom");
  $("#Mordor").append($mtDoom);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $gollum = $("<div/>");
  $($gollum).attr("id", "gollum");
  $("#Mordor").append($gollum);

  // 2. Move the ring from Frodo and give it to Gollum
  $("#the-ring").appendTo("#gollum");

  // 3. Move Gollum into Mount Doom
  $("#gollum").appendTo("#mount-doom");

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  $("#gollum").remove();

  // 2. remove all the baddies from the DOM
  $(".baddy").remove();

  // 3. Move all the hobbits back to the shire
  $(".hobbit").appendTo("#The-Shire");

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});

// makeMiddleEarth();
// makeHobbits();
// keepItSecretKeepItSafe();
// makeBaddies();
// makeBuddies();
// leaveTheShire();
// beautifulStranger();
// forgeTheFellowShip();
// theBalrog();
// hornOfGondor();
// itsDangerousToGoAlone();
// weWantsIt();
// thereAndBackAgain();