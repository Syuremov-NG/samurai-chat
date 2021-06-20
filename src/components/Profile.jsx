import React from "react";

const Profile = () => {
    return(
        <div className='content'>
            <div className={'content-image'}>
                <img src = 'https://mecowood.ru/wp-content/uploads/2020/01/5632552-white-wallpapers-1-1536x864.jpg' />
            </div>
            <div className={''}>
                <div className={'avatar'}>
                    <img src='https://w7.pngwing.com/pngs/958/424/png-transparent-half-life-logo-half-life-opposing-force-trademark-symbol-logo-half-life-miscellaneous-game-text-thumbnail.png'/>
                </div>
            </div>
            <div>
                MyPosts
                <div>
                    New Posts
                </div>
                <div>
                    Post1
                </div>
                <div>
                    Post2
                </div>
            </div>
        </div>
    )
}
export default Profile;