import React from 'react';
import './FacebookReels.css';

const FacebookReels = () => {
    const reelsData = [
        {
            id: 1,
            title: 'Delicious Cake Recipes',
            thumbnail: 'https://i.imgur.com/r50g9c9.jpg',
            embedUrl: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2F122327052534006%2Fvideos%2F771420880096402%2F&show_text=false&width=476',
            likes: 3000,
            views: 10000,
        },
        {
            id: 2,
            title: 'Amazing Nature Scenes',
            thumbnail: 'https://i.imgur.com/yPU9XZf.jpg',
            embedUrl:'https:/ / www.facebook.com / plugins / video.php ? height = 476 & href=https% 3A % 2F % 2Fwww.facebook.com % 2FNASA % 2Fvideos % 2F4391987873567633 % 2F & show_text=false & width=476',
            likes: 4500,
            views: 20000,
        },
        {
            id: 3,
            title: 'Home Workout Tips',
            thumbnail: 'https://i.imgur.com/KzblgJN.jpg',
            embedUrl: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FMenHealthMag%2Fvideos%2F3492688161046704%2F&show_text=false&width=476',
            likes: 12000,
            views: 50000,
        },
        {
            id: 4,
            title: 'Breathtaking Travel Destinations',
            thumbnail: 'https://i.imgur.com/dl2ppbm.jpg',
            embedUrl: 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FCond%C3%A9-Nast-Traveler-132050203482%2Fvideos%2F466565301178759%2F&show_text=false&width=476',
            likes: 8000,
            views: 30000,
        }
    ];

    return (
        <div className="facebook-reels">
            <h2>Facebook Reels</h2>
            <div className="reel-container">
                {reelsData.map((reel) => (
                    <div className="reel" key={reel.id}>
                        <iframe
                            title={reel.title}
                            src={reel.embedUrl}
                            width="476"
                            height="476"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                        <div className="reel-info">
                            <h3>{reel.title}</h3>
                            <div className="reel-stats">
                                <span>{reel.likes} likes</span>
                                <span>{reel.views} views</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FacebookReels;
