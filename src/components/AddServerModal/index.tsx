import React, { useMemo, useState } from 'react';

import { mockUsers } from '../../data/mockUsers';
import { ServerData } from '../ServerList';
import {
  Overlay,
  ModalCard,
  Header,
  Title,
  CloseButton,
  Section,
  Label,
  Input,
  IconPickerWrap,
  IconPreview,
  UploadButton,
  SearchWrap,
  ResultRow,
  Avatar,
  Name,
  Chips,
  Chip,
  ChipRemove,
  Footer,
  CancelButton,
  CreateButton,
  Muted,
} from './styles';

interface AddServerModalProps {
  onClose: () => void;
  onCreate: (server: ServerData) => void;
}

const DEFAULT_COLORS = ['#5865F2', '#57F287', '#FEE75C', '#EB459E', '#ED4245'];

const getInitials = (name: string): string =>
  name
    .split(' ')
    .map((part) => part[0] || '')
    .join('')
    .slice(0, 1)
    .toUpperCase();

const getColor = (name: string): string => {
  if (!name) return 'var(--discord)';
  return DEFAULT_COLORS[name.charCodeAt(0) % DEFAULT_COLORS.length];
};

const AddServerModal: React.FC<AddServerModalProps> = ({ onClose, onCreate }) => {
  const [serverName, setServerName] = useState('');
  const [memberSearch, setMemberSearch] = useState('');
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [logoDataUrl, setLogoDataUrl] = useState<string | undefined>(undefined);

  const selectedMembers = useMemo(
    () => mockUsers.filter((user) => selectedIds.includes(user.id)),
    [selectedIds]
  );

  const searchResults = useMemo(() => {
    const term = memberSearch.trim().toLowerCase();
    return mockUsers
      .filter(
        (user) =>
          !selectedIds.includes(user.id) &&
          (!term || user.name.toLowerCase().includes(term))
      )
      .slice(0, 8);
  }, [memberSearch, selectedIds]);

  const toggleMember = (id: string) => {
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((entry) => entry !== id) : [...current, id]
    );
  };

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setLogoDataUrl(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleCreate = () => {
    const trimmed = serverName.trim();
    if (!trimmed) return;
    onCreate({
      name: trimmed,
      logo: logoDataUrl,
      color: getColor(trimmed),
      hasNotifications: false,
      mentions: 0,
      memberNames: selectedMembers.map((member) => member.name),
    });
    onClose();
  };

  return (
    <Overlay
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <ModalCard role="dialog" aria-labelledby="add-server-modal-title">
        <Header>
          <Title id="add-server-modal-title">Create Server</Title>
          <CloseButton type="button" onClick={onClose}>
            x
          </CloseButton>
        </Header>

        <Section>
          <Label htmlFor="server-name">Server Name</Label>
          <Input
            id="server-name"
            value={serverName}
            onChange={(event) => setServerName(event.target.value)}
            placeholder="Enter a server name..."
          />
        </Section>

        <Section>
          <Label>Server Icon</Label>
          <IconPickerWrap>
            <IconPreview $color={getColor(serverName)}>
              {logoDataUrl ? <img src={logoDataUrl} alt="Server icon preview" /> : getInitials(serverName || '?')}
            </IconPreview>
            <UploadButton>
              Choose Profile Picture
              <input type="file" accept="image/*" onChange={onFileChange} />
            </UploadButton>
          </IconPickerWrap>
        </Section>

        <Section>
          <Label htmlFor="server-people">Add People</Label>
          <Input
            id="server-people"
            value={memberSearch}
            onChange={(event) => setMemberSearch(event.target.value)}
            placeholder="Search by name..."
          />
          <SearchWrap>
            {searchResults.length ? (
              searchResults.map((user) => (
                <ResultRow key={user.id} onClick={() => toggleMember(user.id)}>
                  <Avatar>{getInitials(user.name)}</Avatar>
                  <Name>{user.name}</Name>
                </ResultRow>
              ))
            ) : (
              <Muted>No people found</Muted>
            )}
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
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
          <CreateButton type="button" disabled={!serverName.trim()} onClick={handleCreate}>
            Create
          </CreateButton>
        </Footer>
      </ModalCard>
    </Overlay>
  );
};

export default AddServerModal;
