document.event = "X"; // initial turn is to click X into a box class
let board = document.querySelectorAll("div.box"); // relevant boxes from html box class coverted into elements in an array

const instruction = function (msg) { // set up instruction message for player to be changed as the boxes are clicked so players can alternate
  document.getElementById("message").innerText = msg;
};

const endGame = function (msg) { // set up end game message for player when first win or draw condition is met as per winner function
  document.getElementById("coronation").innerText = msg;
};

const selection = function () { // allows alternation between X and O for every second choice
  if (winner(document.event)) { // links winner function with selection function click event
    instruction(`${document.event} wins!`);
  } else if (document.event === "X") { // O selection made after initial X turn as above, derived from the global move function
    document.event = "O";
    instruction(`"${document.event}'s turn"`);
  } else {
    document.event = "X"; // revert back to X selection if not meeting above condition as to allow players to alternate
    instruction(`"${document.event}'s turn"`);
  }
};

const move = function (box) { // onClick for the box div class initiates this function as it detects next move on the game board
  if (box.innerText === "") { // when relevant box is clicked, if empty, runs global move function
    box.innerText = document.event; // box.innerText is given the value of the document.event where X is the initial value, and then flipped for each subsequent click
    selection(); // runs selection function at this point to alternative between X and O
  } else {
    alert ("Pick a different square.");
  } // otherwise (if the box clicked already has a value), alert is triggered prompting player to choose a different box
};

const winner = function () { // use of document.querySelectorAll to call innerText of relevant elements in an array as the values are input in real time when the relevant boxes are clicked
  if ((board[0].innerText === "X" && board[1].innerText === "X" && board[2].innerText === "X") ||
    	(board[3].innerText === "X" && board[4].innerText === "X" && board[5].innerText === "X") ||
     	(board[6].innerText === "X" && board[7].innerText === "X" && board[8].innerText === "X") ||
    	(board[0].innerText === "X" && board[3].innerText === "X" && board[6].innerText === "X") ||
    	(board[1].innerText === "X" && board[4].innerText === "X" && board[7].innerText === "X") ||
    	(board[2].innerText === "X" && board[5].innerText === "X" && board[8].innerText === "X") ||
    	(board[0].innerText === "X" && board[4].innerText === "X" && board[8].innerText === "X") ||
      (board[2].innerText === "X" && board[4].innerText === "X" && board[6].innerText === "X")) {
    		endGame(`${document.event} wins!`); // if the relevant "X" boxes are met, end game result message appears
    $(".box").attr("onClick", "").unbind("click"); // once the win/draw condition is met, remove ability to click on the boxes
  } else if
  ((board[0].innerText === "O" && board[1].innerText === "O" && board[2].innerText === "O") ||
    	(board[3].innerText === "O" && board[4].innerText === "O" && board[5].innerText === "O") ||
     	(board[6].innerText === "O" && board[7].innerText === "O" && board[8].innerText === "O") ||
    	(board[0].innerText === "O" && board[3].innerText === "O" && board[6].innerText === "O") ||
    	(board[1].innerText === "O" && board[4].innerText === "O" && board[7].innerText === "O") ||
    	(board[2].innerText === "O" && board[5].innerText === "O" && board[8].innerText === "O") ||
    	(board[0].innerText === "O" && board[4].innerText === "O" && board[8].innerText === "O") ||
      (board[2].innerText === "O" && board[4].innerText === "O" && board[6].innerText === "O")) {
    		endGame(`${document.event} wins!`); // if the relevant "O" boxes are met, end game result message appears
    $(".box").attr("onClick", "").unbind("click"); // once the win/draw condition is met, remove ability to click on the boxes
  } else if
  (board[0].innerText != "" && board[1].innerText != "" && board[2].innerText != "" &&
       board[3].innerText != "" && board[4].innerText != "" && board[5].innerText != "" &&
       board[6].innerText != "" && board[7].innerText != "" && board[8].innerText != "") {
    endGame("Draw!"); // if all nine boxes are chosen but the above conditions are not met, game displays draw end game message
    $(".box").attr("onClick", "").unbind("click"); // once the win/draw condition is met, remove ability to click on the boxes
  }
};
