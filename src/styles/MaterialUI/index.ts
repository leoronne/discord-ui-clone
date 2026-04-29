import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  popper: {
    zIndex: 100,
  },
  tooltip: {
    fontSize: '13px',
    fontFamily: "'DM Sans', var(--font-family)",
    padding: '8px 10px',
    fontWeight: 700,
    opacity: 1,
    color: 'var(--white)',
    backgroundColor: '#18191C',
    borderRadius: '6px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.35)',
    transition: 'opacity 150ms ease',
  },
  arrow: {
    color: '#18191C',
  },
  tooltipPlacementBottom: {
    marginTop: '5px',
  },
  tooltipPlacementRight: {
    marginLeft: '10px',
  },
});
