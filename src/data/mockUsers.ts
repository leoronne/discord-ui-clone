export type MockUserStatus = 'online' | 'offline';

export interface MockUser {
  id: string;
  name: string;
  nickname: string;
  pronouns: string;
  description: string;
  mutualFriends: number;
  mutualServers: number;
  status: MockUserStatus;
}

export const mockUsers: MockUser[] = [
  {
    id: '1',
    name: 'thrishadugg',
    nickname: '3sha',
    pronouns: 'she/her',
    description: "#6'7 #nonchalant",
    mutualFriends: 6,
    mutualServers: 7,
    status: 'online',
  },
  {
    id: '2',
    name: 'Bazingasdead',
    nickname: 'Baz',
    pronouns: 'he/him',
    description: 'just vibing',
    mutualFriends: 3,
    mutualServers: 2,
    status: 'online',
  },
  {
    id: '3',
    name: 'GoldDragon',
    nickname: 'GD',
    pronouns: 'he/him',
    description: 'dragon enthusiast',
    mutualFriends: 8,
    mutualServers: 4,
    status: 'online',
  },
  {
    id: '4',
    name: 'Lilith',
    nickname: 'Lili',
    pronouns: 'she/her',
    description: 'night owl',
    mutualFriends: 2,
    mutualServers: 1,
    status: 'offline',
  },
  {
    id: '5',
    name: 'Log',
    nickname: 'logbasem',
    pronouns: 'she/her',
    description: 'backend engineer that occasionally drops frontend fixes',
    mutualFriends: 5,
    mutualServers: 3,
    status: 'offline',
  },
  {
    id: '6',
    name: 'Brock',
    nickname: 'brockstar',
    pronouns: 'he/him',
    description: 'just here for the vibes',
    mutualFriends: 2,
    mutualServers: 1,
    status: 'offline',
  },
  {
    id: '7',
    name: 'Ronne12',
    nickname: 'ronne',
    pronouns: 'he/him',
    description: 'original dev of this clone lol',
    mutualFriends: 4,
    mutualServers: 3,
    status: 'offline',
  },
  {
    id: '8',
    name: 'Prynce',
    nickname: 'P',
    pronouns: 'he/him',
    description: 'goooooood',
    mutualFriends: 1,
    mutualServers: 2,
    status: 'offline',
  },
  {
    id: '9',
    name: 'Nyarth',
    nickname: 'nya',
    pronouns: 'they/them',
    description: 'heyy whats up',
    mutualFriends: 3,
    mutualServers: 1,
    status: 'offline',
  },
  {
    id: '10',
    name: 'J. Bravo',
    nickname: 'JB',
    pronouns: 'he/him',
    description: 'smooth operator',
    mutualFriends: 5,
    mutualServers: 2,
    status: 'offline',
  },
];
