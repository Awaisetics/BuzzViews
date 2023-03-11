import React from "react";
import "./Index.css";
function Index() {
  function likeButton() {
    let heart = document.querySelector(".heart");
    let likes = document.querySelector(".likes");
    if (heart.src.match("https://i.imgur.com/jTQUYcO.png")) {
      heart.src = "https://i.imgur.com/BlbKTan.png";
      likes.innerHTML = "3,001 likes";
    } else {
      heart.src = "https://i.imgur.com/jTQUYcO.png";
      likes.innerHTML = "3,000 likes";
    }
  }

  return (
    <>
      <div class="card">
        <div class="top">
          <div class="userDetails">
            <div class="profile-img">
              <img src="https://i.imgur.com/OkCqg2G.png" class="cover" />
            </div>
            <h3>ed___i</h3>
          </div>
          <div>
            <img src="https://i.imgur.com/ms7POkW.png" class="dot" />
          </div>
          <div class="userReport">
            <ul>
              <li>
                <a href="#">
                  <ion-icon name="flag-outline"></ion-icon>
                  Report
                </a>
              </li>
              <li>
                <a href="#">
                  <ion-icon name="ban-outline"></ion-icon>
                  Block
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="imgBx">
          <img src="https://i.imgur.com/qTh9CAK.jpg" class="cover" />
        </div>
        <div class="actionBtn">
          <div class="left">
            <img
              src="https://i.imgur.com/jTQUYcO.png"
              class="heart"
              onclick={likeButton}
            />
            <img src="https://i.imgur.com/pY8Jg7B.png" />
            <img src="https://i.imgur.com/yP26Bd1.png" />
          </div>
          <div class="right">
            <img src="https://i.imgur.com/E2ppYNc.png" />
          </div>
        </div>
        <h4 class="likes">3,000 likes</h4>
        <h4 class="message">
          <b>Codetics</b> This is a Instagtam Post Card <span>#Cards</span>{" "}
          <span>#HTML</span> <span>#CSS</span> <span>#JavaScript</span>{" "}
        </h4>
        <h4 class="comments">Viwe all 300 comments</h4>
        <div class="addComments">
          <div class="userImg">
            <img src="https://i.imgur.com/m0UD1lD.jpg" class="cover" />
          </div>
        </div>
        <div class="postTime">4 hours ago</div>
      </div>
    </>
  );
}

export default Index;
