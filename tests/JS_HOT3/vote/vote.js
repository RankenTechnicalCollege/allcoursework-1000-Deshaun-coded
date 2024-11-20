// Initialize vote counts
let upvotes = 0;
let downvotes = 0;

// Get elements for displaying vote counts
const upvotesCount = document.getElementById("upvotes-count");
const downvotesCount = document.getElementById("downvotes-count");
const score = document.getElementById("score");

// Upvote button event listener
document.getElementById("upvote-btn").addEventListener("click", function() {
  upvotes++;
  updateVotes();
});

// Downvote button event listener
document.getElementById("downvote-btn").addEventListener("click", function() {
  downvotes++;
  updateVotes();
});

// Function to update and display vote counts
function updateVotes() {
  upvotesCount.textContent = upvotes;
  downvotesCount.textContent = downvotes;
  score.textContent = upvotes - downvotes;
}