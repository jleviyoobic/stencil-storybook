import { Component, h, Prop } from '@stencil/core';

import { User, users } from '../../dummy-data';

@Component({
  tag: 'user-modal',
  styleUrl: 'user-modal.scss',
  shadow: true
})
export class UserModal {
  @Prop() user: string;

  render() {
    const userDB: User = users.find((el) => el.username === this.user);
    // const { description, work, location, joined, pic, username } = userDB;      Didn't work for me... :(
    return (
      <div id="container-card">
        <card-main bgColor="white">
          <header>
            <div id="headerContent">
              <div id="userPic">
                <avatar-circle pic={userDB?.pic}></avatar-circle>
              </div>
              {!!userDB?.username && <h3>{userDB?.username}</h3>}
            </div>
          </header>
          <article>
            <button-main align="center" font="light" color="primary">
              Follow
            </button-main>
            {!!userDB?.description && <p>{userDB.description}</p>}
            {!!userDB?.work && [<h5>WORK</h5>, <p class="mt-0">{userDB.work}</p>]}
            {!!userDB?.location && [<h5>LOCATION</h5>, <p class="mt-0">{userDB.location}</p>]}
            {!!userDB?.joined && [<h5>JOINED</h5>, <p class="mt-0">{userDB.joined}</p>]}
          </article>
        </card-main>
      </div>
    );
  }
}
