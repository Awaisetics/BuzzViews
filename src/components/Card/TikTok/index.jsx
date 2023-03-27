import React from "react";

const TikTokCard = () => {
  return (
    <div id="tiktok" className="container">
      <div className="d-flex mt-5 mb-3 align-items-center">
        <i class="bx bxl-tiktok bx-lg text-dark"></i>
        <strong className="pb-1 ms-3" style={{ fontSize: "2rem" }}>
          Tiktok
        </strong>
      </div>
      <div className="row">
        <div className="col-md-3 ">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@picapro2/video/7209959696734637338"
            data-video-id="7209959696734637338"
          >
            <section>
              <a
                target="_blank"
                title="@picapro2"
                href="https://www.tiktok.com/@picapro2?refer=embed"
              >
                @picapro2
              </a>
              <a
                target="_blank"
                title="♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸"
                href="https://www.tiktok.com/music/original-sound-7200837413822941978?refer=embed"
              >
                ♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸
              </a>
            </section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
        <div className="col-md-3 ">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@picapro2/video/7209959696734637338"
            data-video-id="7209959696734637338"
          >
            <section>
              <a
                target="_blank"
                title="@picapro2"
                href="https://www.tiktok.com/@picapro2?refer=embed"
              >
                @picapro2
              </a>
              <a
                target="_blank"
                title="♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸"
                href="https://www.tiktok.com/music/original-sound-7200837413822941978?refer=embed"
              >
                ♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸
              </a>
            </section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
        <div className="col-md-3 ">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@picapro2/video/7209959696734637338"
            data-video-id="7209959696734637338"
          >
            <section>
              <a
                target="_blank"
                title="@picapro2"
                href="https://www.tiktok.com/@picapro2?refer=embed"
              >
                @picapro2
              </a>
              <a
                target="_blank"
                title="♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸"
                href="https://www.tiktok.com/music/original-sound-7200837413822941978?refer=embed"
              >
                ♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸
              </a>
            </section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
        <div className="col-md-3 ">
          <blockquote
            className="tiktok-embed"
            cite="https://www.tiktok.com/@picapro2/video/7209959696734637338"
            data-video-id="7209959696734637338"
          >
            <section>
              <a
                target="_blank"
                title="@picapro2"
                href="https://www.tiktok.com/@picapro2?refer=embed"
              >
                @picapro2
              </a>
              <a
                target="_blank"
                title="♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸"
                href="https://www.tiktok.com/music/original-sound-7200837413822941978?refer=embed"
              >
                ♬ original sound - ℍ𝔸𝔽𝕊𝔸🦋🧸
              </a>
            </section>
          </blockquote>
          <script async src="https://www.tiktok.com/embed.js"></script>
        </div>
      </div>
    </div>
  );
};

export default TikTokCard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const TikTokCard = () => {
//   const [tiktokData, setTiktokData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const options = {
//         method: "GET",
//         url: "https://tiktok_solutions.p.rapidapi.com/trending/US",
//         headers: {
//           "X-RapidAPI-Key": "0470c21753msh313f8e7ed71d121p180a7bjsnfbe52144f638",
//           "X-RapidAPI-Host": "tiktok_solutions.p.rapidapi.com",
//         },
//       };

//       const response = await axios.request(options);
//       console.log('res', response.data.data.list);
//       setTiktokData(response.data.data.list);
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <div className="row">
//         {tiktokData.map((data) => (
//           <div key="7209959696734637338"className="col-12 col-sm-6 col-md-4 col-lg-3">
//             {console.log(data,)}
//             <blockquote
//               className="tiktok-embed w-100"
//               cite={`https://www.tiktok.com/@${data.author.nickname}/video/7209959696734637338`}
//               data-video-id="{data.aweme_id}"
//               style={{ maxWidth: "605px" }}
//             >
//               <section>
//                 <a
//                   target="_blank"
//                   title={`@${data.authorName}`}
//                   href={`https://www.tiktok.com/@${data.author.nickname}?refer=embed`}
//                 >{`@${data.authorName}`}</a>
//                 <a
//                   title={`${data.musicName}`}
//                   target="_blank"
//                   href={`https://www.tiktok.com/tag/${data.music.title}?refer=embed`}
//                 >{`#${data.musicName}`}</a>
//                 <a
//                   title={`${data.desc}`}
//                   target="_blank"
//                   href={`https://www.tiktok.com/tag/${data.desc}?refer=embed`}
//                 >{`#${data.description}`}</a>
//                 <a
//                   target="_blank"
//                   title={`♬ ${data.musicName}`}
//                   href={`https://www.tiktok.com/music/${data.music.title}-${data.music.id}?refer=embed`}
//                 >{`♬ ${data.music.title}`}</a>
//               </section>
//             </blockquote>
//             <script async src="https://www.tiktok.com/embed.js"></script>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TikTokCard;
