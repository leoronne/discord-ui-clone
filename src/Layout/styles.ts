import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UI - User Info

export const Grid = styled.div`
  display: grid;
  height: 100vh;

  grid-template-columns: 65px auto;
  grid-template-rows: 46px auto;
  grid-template-areas:
    'SL CI'
    'SL CD';

  @media (min-width: 598px) {
    grid-template-columns: 71px 240px auto 240px;
    grid-template-rows: 46px auto 52px;
    grid-template-areas:
      'SL SN CI CI'
      'SL CL CD CD'
      'SL UI CD CD';
  }

  @media (min-width: 868px) {
    grid-template-areas:
      'SL SN CI CI'
      'SL CL CD UL'
      'SL UI CD UL';
  }
`;
