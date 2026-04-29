import bazinga from '~/assets/img/thukuna.jpg';
import cyhi from '~/assets/img/cyhi.jpg';
import idk from '~/assets/img/discord_logo_clone.jpeg';
import user1 from '~/assets/img/user1.jpg';
import user2 from '~/assets/img/user2.jpg';
import user4 from '~/assets/img/user4.jpg';
import user5 from '~/assets/img/user5.jpg';

export interface UserProfileData {
  id: string;
  username: string;
  status: 'online' | 'offline' | 'idle' | 'dnd';
  bio: string;
  avatar?: string;
}

export const privateUsers: UserProfileData[] = [
  {
    id: 'bazingasdead',
    username: 'Bazingasdead',
    status: 'online',
    bio: 'Grinding frontend polish and late night refactors.',
    avatar: bazinga,
  },
  {
    id: 'golddragon',
    username: 'GoldDragon',
    status: 'online',
    bio: 'Building private chat UX and interaction details.',
    avatar: user2,
  },
  {
    id: 'lilith',
    username: 'Lilith',
    status: 'idle',
    bio: 'Usually reviewing PRs and helping debug weird bugs.',
    avatar: cyhi,
  },
  {
    id: 'log',
    username: 'Log',
    status: 'offline',
    bio: 'Backend engineer that occasionally drops frontend fixes.',
    avatar: user5,
  },
  {
    id: 'thrishadugg',
    username: 'thrishadugg',
    status: 'dnd',
    bio: 'Heads-down mode. Ping only for urgent items.',
    avatar: idk,
  },
  {
    id: 'ronne12',
    username: 'Ronne12',
    status: 'offline',
    bio: 'Working on prototypes and component experiments.',
    avatar: user4,
  },
  {
    id: 'brock',
    username: 'Brock',
    status: 'offline',
    bio: 'Lurking in chats and sharing memes.',
    avatar: user1,
  },
];
