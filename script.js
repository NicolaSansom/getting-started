let likeCount = localStorage.getItem('likeCount') || 0;
document.getElementById('likeCounter').innerText = likeCount;

function incrementLikes() {
  likeCount++;
  document.getElementById('likeCounter').innerText = likeCount;
  localStorage.setItem('likeCount', likeCount);
}
