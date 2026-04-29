export interface GroupChatData {
  id: string;
  name: string;
  members: number;
  unread?: number;
  avatarColor: string;
  memberNames: string[];
  messages: Array<{
    sender: string;
    text: string;
    timestamp: string;
  }>;
}

const GROUP_COLORS = [
  'var(--discord)',
  'var(--mention-detail)',
  'var(--link)',
  'var(--rocketseat)',
  'var(--notification)',
];

export const getGroupInitials = (name: string): string =>
  name
    .split(' ')
    .map((word) => word[0] || '')
    .join('')
    .slice(0, 2)
    .toUpperCase();

export const getGroupColor = (name: string): string =>
  GROUP_COLORS[name.charCodeAt(0) % GROUP_COLORS.length];

export const groupChats: GroupChatData[] = [
  {
    id: 'study-group',
    name: 'Academic Comeback',
    members: 4,
    unread: 3,
    avatarColor: 'var(--discord)',
    memberNames: ['thrishadugg', 'GoldDragon', 'Log', 'Bazingasdead'],
    messages: [
      { sender: 'thrishadugg', text: 'Has anyone actually finished the reading for today?', timestamp: '04/28/2026 - 9:12 AM' },
      { sender: 'Bazingasdead', text: 'Lol no not yet.', timestamp: '04/28/2026 - 9:15 AM' },
      { sender: 'GoldDragon', text: "Same. I feel like we're cooked.", timestamp: '04/28/2026 - 9:17 AM' },
      { sender: 'Log', text: "try toggling the sidebar to hide the DMs. The chat fills the whole screen now so it's much easier to focus.", timestamp: '04/28/2026 - 9:23 AM' },
      { sender: 'thrishadugg', text: 'True, the new 100% width layout is actually helping.', timestamp: '04/28/2026 - 9:26 AM' },
    ],
  },
  {
    id: 'hci-project-crew',
    name: 'HCI Project Crew',
    members: 5,
    unread: 1,
    avatarColor: 'var(--mention-detail)',
    memberNames: ['thrishadugg', 'Lilith', 'Log', 'GoldDragon', 'Bazingasdead'],
    messages: [
      { sender: 'Lilith', text: 'Checking in on the layout refactor.', timestamp: '04/28/2026 - 11:04 AM' },
      { sender: 'Log', text: 'The server list is gone. The sidebar is now streamlined with just Servers, DMs, and Group Chats.', timestamp: '04/28/2026 - 11:07 AM' },
      { sender: 'GoldDragon', text: 'I noticed the group chats have their own section now between Servers and DMs.', timestamp: '04/28/2026 - 11:10 AM' },
      { sender: 'Bazingasdead', text: "Yeah it's a separate page so they don't get buried under individual conversations anymore.", timestamp: '04/28/2026 - 11:12 AM' },
    ],
  },
  {
    id: 'friday-plans',
    name: 'Weekend Plans',
    members: 3,
    avatarColor: 'var(--link)',
    memberNames: ['GoldDragon', 'Lilith', 'Log'],
    messages: [
      { sender: 'Lilith', text: 'Are we still meeting up on Friday?', timestamp: '04/28/2026 - 1:40 PM' },
      { sender: 'Log', text: "I'm down. I just sent the invite.", timestamp: '04/28/2026 - 1:42 PM' },
      { sender: 'GoldDragon', text: 'Just saw it. The new Message Sent toast notification looks great.', timestamp: '04/28/2026 - 1:45 PM' },
      { sender: 'Lilith', text: 'Agreed. The hover effects and animations make the buttons feel way more responsive.', timestamp: '04/28/2026 - 1:47 PM' },
    ],
  },
  {
    id: 'gaming-squad',
    name: 'Game Room',
    members: 6,
    avatarColor: 'var(--rocketseat)',
    memberNames: ['Bazingasdead', 'GoldDragon', 'Brock', 'Ronne12', 'Prynce', 'Nyarth'],
    messages: [
      { sender: 'Prynce', text: "Just lurking on everyone's challenges.", timestamp: '04/28/2026 - 4:05 PM' },
      { sender: 'Ronne12', text: "Nyarth we're waiting on you to join the lobby.", timestamp: '04/28/2026 - 4:08 PM' },
      { sender: 'Brock', text: 'Sam added to chat.', timestamp: '04/28/2026 - 4:11 PM' },
      { sender: 'Nyarth', text: 'Sorry, I was distracted by the new fullscreen support. Hiding the sidebar makes the chat area massive.', timestamp: '04/28/2026 - 4:17 PM' },
    ],
  },
  {
    id: 'roommates',
    name: 'The Trenches',
    members: 4,
    unread: 2,
    avatarColor: 'var(--notification)',
    memberNames: ['thrishadugg', 'Log', 'Lilith', 'Bazingasdead'],
    messages: [
      { sender: 'Lilith', text: 'Who changed the notification settings for the house chat?', timestamp: '04/28/2026 - 7:02 PM' },
      { sender: 'Log', text: 'I did. Check the popup it should say Settings saved in the corner.', timestamp: '04/28/2026 - 7:04 PM' },
      { sender: 'thrishadugg', text: 'I saw it. The subtle feedback notifications are a huge improvement.', timestamp: '04/28/2026 - 7:07 PM' },
      { sender: 'Bazingasdead', text: "Definitely. The UI doesn't feel stale anymore with these animations.", timestamp: '04/28/2026 - 7:10 PM' },
    ],
  },
];

export const addGroupChat = (name: string, memberNames: string[]): GroupChatData => {
  const id = `custom-${Date.now()}-${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
  const created: GroupChatData = {
    id,
    name,
    members: memberNames.length,
    avatarColor: getGroupColor(name),
    memberNames,
    messages: [],
  };
  groupChats.push(created);
  return created;
};
