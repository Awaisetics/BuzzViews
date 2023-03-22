import React from 'react';

const TikTokVideo = ({ videoUrl }) => {
    return (
        <blockquote className="tiktok-embed w-100" cite={videoUrl} data-video-id={videoUrl.split('/').slice(-1)[0]} style={{ maxWidth: "605px" }}>
            <section>
                <a target="_blank" title="@bellapoarch" href={videoUrl.split('?')[0] + "?refer=embed"}>@bellapoarch</a>
                <p>Hello🧍🏻‍♀️</p>
                <a target="_blank" title="♬ they trunna be subway surf - fairy.rblxx_" href="https://www.tiktok.com/music/they-trunna-be-subway-surf-7070211881109179138?refer=embed">♬ they trunna be subway surf - fairy.rblxx_</a>
            </section>
        </blockquote>
    );
};

export default TikTokVideo;