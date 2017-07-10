import React from 'react';

const Circle = props => <circle {...props} vectorEffect="non-scaling-stroke" />;
const Path = props => <path {...props} vectorEffect="non-scaling-stroke" />;
const Line = props => <line {...props} vectorEffect="non-scaling-stroke" />;
const Polyline = props =>
  <polyline {...props} vectorEffect="non-scaling-stroke" />;
const Polygon = props =>
  <polygon {...props} vectorEffect="non-scaling-stroke" />;

export const Settings = () =>
  <g>
    <Circle cx="12" cy="12" r="3" />
    <Path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </g>;

export const Inbox = () =>
  <g>
    <Polyline points="22 13 16 13 14 16 10 16 8 13 2 13" />
    <Path d="M5.47 5.19L2 13v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5l-3.47-7.81A2 2 0 0 0 16.7 4H7.3a2 2 0 0 0-1.83 1.19z" />
  </g>;

export const PlusCircle = () =>
  <g>
    <Circle cx="12" cy="12" r="10" />
    <Line x1="12" y1="8" x2="12" y2="16" />
    <Line x1="8" y1="12" x2="16" y2="12" />
  </g>;

export const NewCost = PlusCircle;

export const List = () =>
  <g>
    <Line x1="8" y1="6" x2="21" y2="6" />
    <Line x1="8" y1="12" x2="21" y2="12" />
    <Line x1="8" y1="18" x2="21" y2="18" />
    <Line x1="3" y1="6" x2="3" y2="6" />
    <Line x1="3" y1="12" x2="3" y2="12" />
    <Line x1="3" y1="18" x2="3" y2="18" />
  </g>;

export const Group = () =>
  <g>
    <Path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <Circle cx="9" cy="7" r="4" />
    <Path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </g>;

// TODO: Fix good looking group-circle
export const GroupCircle = () => <g />;

export const MoreVertical = () =>
  <g>
    <Circle cx="12" cy="12" r="2" />
    <Circle cx="12" cy="4" r="2" />
    <Circle cx="12" cy="20" r="2" />
  </g>;

export const Edit = () =>
  <g>
    <Polygon points="14 2 18 6 7 17 3 17 3 13 14 2" />
    <Line x1="3" y1="22" x2="21" y2="22" />
  </g>;

export const Trash = () =>
  <g>
    <Polyline points="3 6 5 6 21 6" />
    <Path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <Line x1="10" y1="11" x2="10" y2="17" />
    <Line x1="14" y1="11" x2="14" y2="17" />
  </g>;
