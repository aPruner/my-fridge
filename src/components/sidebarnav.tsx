import React from 'react';
import { Drawer } from '@material-ui/core';

const Sidebarnav: React.FC<SidebarnavProps> = ({ open, onClose }) => {
  return <Drawer anchor="left" open={open} onClose={onClose} />;
};

export interface SidebarnavProps {
  open: boolean;
  onClose: () => void;
}

export default Sidebarnav;
