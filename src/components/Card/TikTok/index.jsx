// import React from "react";
// import TikTokVideo from './video'

// const TikTokCard = () => {
//   return (
//     <div id="tiktok" className="row">
//       <div className="col-md-3">
//         <blockquote
//           className="tiktok-embed w-100"
//           cite="https://www.tiktok.com/@arbic.hasna/video/7202568476450393371"
//           data-video-id="7202568476450393371"
//           style={{ maxWidth: "605px"}}
//         >
//           <section>
//             <a
//               target="_blank"
//               title="@arbic.hasna"
//               href="https://www.tiktok.com/@arbic.hasna?refer=embed"
//             >
//               @arbic.hasna
//             </a>
//             <p>Hello </p>
//             <a
//               target="_blank"
//               title="♬ original sound - haseenmalik3734"
//               href="https://www.tiktok.com/music/original-sound-7196642575678835482?refer=embed"
//             >
//               ♬ original sound - haseenmalik3734
//             </a>
//           </section>
//         </blockquote>
//         <script async src="https://www.tiktok.com/embed.js"></script>
//       </div>
//       <div className="col-md-3">
//         <TikTokVideo videoUrl="https://www.tiktok.com/@bellapoarch/video/7102454837287210283" />
//       </div>
//       <div className="col-md-3">
//         <TikTokVideo videoUrl="https://www.tiktok.com/@honeydewthedoll/video/7137938197291088389" />
//       </div>
//       <div className="col-md-3">
//         <TikTokVideo videoUrl="https://www.tiktok.com/@therock/video/6964228105487745029" />
//       </div>
//     </div>
//   );
// }

// export default TikTokCard;


import React, { useState, useEffect } from "react";
import axios from "axios";

const TikTokCard = () => {
  const [tiktokData, setTiktokData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://tiktok_solutions.p.rapidapi.com/trending/US",
        headers: {
          "X-RapidAPI-Key": "7dea0db1bdmsh8635c0257683064p1dac18jsn92b7c7d91e41",
          "X-RapidAPI-Host": "tiktok_solutions.p.rapidapi.com",
        },
      };

      const response = await axios.request(options);
      console.log('res', response.data.data.list);
      setTiktokData(response.data.data.list);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {tiktokData.map((data) => (
          <div key={data.aweme_id} className="col-md-3">
            {console.log(data,)}
            <blockquote
              className="tiktok-embed w-100"
              cite={`https://www.tiktok.com/@${data.author.nickname}/video/${data.aweme_id}`}
              data-video-id={data.aweme_id}
              style={{ maxWidth: "605px" }}
            >
              <section>
                <a
                  target="_blank"
                  title={`@${data.authorName}`}
                  href={`https://www.tiktok.com/@${data.author.nickname}?refer=embed`}
                >{`@${data.authorName}`}</a>
                <a
                  title={`${data.musicName}`}
                  target="_blank"
                  href={`https://www.tiktok.com/tag/${data.music.title}?refer=embed`}
                >{`#${data.musicName}`}</a>
                <a
                  title={`${data.desc}`}
                  target="_blank"
                  href={`https://www.tiktok.com/tag/${data.desc}?refer=embed`}
                >{`#${data.description}`}</a>
                <a
                  target="_blank"
                  title={`♬ ${data.musicName}`}
                  href={`https://www.tiktok.com/music/${data.music.title}-${data.music.id}?refer=embed`}
                >{`♬ ${data.music.title}`}</a>
              </section>
            </blockquote>
            <script async src="https://www.tiktok.com/embed.js"></script>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TikTokCard;
