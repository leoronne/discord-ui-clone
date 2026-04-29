import React, { useMemo, useState } from 'react';

import { mockUsers } from '../../data/mockUsers';
import { addGroupChat } from '../../data/groupChats';
import {
  Overlay,
  ModalCard,
  Header,
  Title,
  CloseButton,
  Label,
  Input,
  Muted,
  Section,
  SearchWrap,
  SearchDropdown,
  ResultRow,
  Avatar,
  ResultMeta,
  Name,
  Pronouns,
  Chips,
  Chip,
  ChipRemove,
  Footer,
  Buttons,
  CancelButton,
  CreateButton,
} from './styles';

export interface CreateGroupModalProps {
  onClose: () => void;
  onCreated: (groupId: string) => void;
}

const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0] || '')
    .join('')
    .slice(0, 2)
    .toUpperCase();

const CreateGroupModal: React.FC<CreateGroupModalProps> = ({ onClose, onCreated }) => {
  const [groupName, setGroupName] = useState('');
  const [memberSearch, setMemberSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const selectedMembers = useMemo(
    () => mockUsers.filter((user) => selectedIds.includes(user.id)),
    [selectedIds]
  );

  const searchResults = useMemo(() => {
    const term = memberSearch.trim().toLowerCase();
    if (!term) {
      return mockUsers.filter((user) => !selectedIds.includes(user.id)).slice(0, 6);
    }
    return mockUsers
      .filter(
        (user) => !selectedIds.includes(user.id) && user.name.toLowerCase().includes(term)
      )
      .slice(0, 6);
  }, [memberSearch, selectedIds]);

  const toggleMember = (id: string) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]
    );
  };

  const handleCreate = () => {
    const trimmedName = groupName.trim();
    if (!trimmedName) return;
    const created = addGroupChat(
      trimmedName,
      selectedMembers.map((member) => member.name)
    );
    onCreated(created.id);
    onClose();
  };

  return (
    <Overlay
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <ModalCard role="dialog" aria-labelledby="create-group-modal-title">
        <Header>
          <Title id="create-group-modal-title">Create Group Chat</Title>
          <CloseButton type="button" onClick={onClose} aria-label="Close create group modal">
            x
          </CloseButton>
        </Header>

        <Section>
          <Label htmlFor="group-name">Group Chat Name</Label>
          <Input
            id="group-name"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
            placeholder="Enter a name..."
          />
        </Section>

        <Section>
          <Label htmlFor="add-people">Add People</Label>
          <SearchWrap>
            <Input
              id="add-people"
              value={memberSearch}
              onChange={(event) => setMemberSearch(event.target.value)}
              placeholder="Search by name..."
            />
            <SearchDropdown>
              {searchResults.length ? (
                searchResults.map((user) => (
                  <ResultRow key={user.id} onClick={() => toggleMember(user.id)}>
                    <Avatar>{getInitials(user.name)}</Avatar>
                    <ResultMeta>
                      <Name>{user.name}</Name>
                      <Pronouns>{user.pronouns}</Pronouns>
                    </ResultMeta>
                  </ResultRow>
                ))
              ) : (
                <Muted>No people found</Muted>
              )}
            </SearchDropdown>
          </SearchWrap>
        </Section>

        <Section>
          <Label>Selected Members</Label>
          {selectedMembers.length ? (
            <Chips>
              {selectedMembers.map((member) => (
                <Chip key={member.id}>
                  {member.name}
                  <ChipRemove type="button" onClick={() => toggleMember(member.id)}>
                    x
                  </ChipRemove>
                </Chip>
              ))}
            </Chips>
          ) : (
            <Muted>No members selected</Muted>
          )}
        </Section>

        <Footer>
          <Buttons>
            <CancelButton type="button" onClick={onClose}>
              Cancel
            </CancelButton>
            <CreateButton
              type="button"
              disabled={!groupName.trim()}
              onClick={handleCreate}
            >
              Create
            </CreateButton>
          </Buttons>
        </Footer>
      </ModalCard>
    </Overlay>
  );
};

export default CreateGroupModal;
