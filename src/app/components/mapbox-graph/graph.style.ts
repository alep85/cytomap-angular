export const graphStyle: any = [
  {
    selector: 'node',
    style: {
      'border-color': '#ffffff',
      'border-width': 2,
      'background-color': '#1f77b4',
      'background-image':
        'data:image/svg+xml;utf8,' +
        encodeURIComponent(
          `<svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1216 0q185 0 316.5 93.5t131.5 226.5v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20h-1056q-22 0-30-20t8-35l213-202q-180-5-305.5-97t-125.5-222v-896q0-133 131.5-226.5t316.5-93.5h640zm-320 1344q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zm576-576v-512h-1152v512h1152z" fill="#fff"/></svg>`
        ),
      'background-width': '60%',
      'background-height': '60%',
      color: '#333333',
      label: 'data(id)',
      'text-valign': 'bottom',
      'text-margin-y': 6,
      'text-background-color': '#ffffff',
      'text-background-opacity': 0.5,
      'text-background-padding': '4',
    },
  },
  {
    selector: 'node.hover',
    style: {
      'border-color': '#000000',
      'text-background-color': '#eeeeee',
      'text-background-opacity': 1,
    },
  },
  {
    selector: 'node:selected',
    style: {
      'border-color': '#ff0000',
      'border-width': 6,
      'border-opacity': 0.5,
    },
  },
  {
    selector: 'edge',
    style: {
      'line-color': '#cccccc',
    },
  },
  {
    selector: 'edge.hover',
    style: {
      'line-color': '#999999',
    },
  },
  // edgehandles
  {
    selector: '.eh-handle',
    style: {
      'background-color': 'red',
      width: 12,
      height: 12,
      shape: 'ellipse',
      'overlay-opacity': 0,
      'border-width': 12,
      'border-opacity': 0,
      label: '',
    },
  },
  {
    selector: '.eh-hover',
    style: {
      'background-color': 'red',
    },
  },
  {
    selector: '.eh-source',
    style: {
      'border-width': 2,
      'border-color': 'red',
    },
  },
  {
    selector: '.eh-target',
    style: {
      'border-width': 2,
      'border-color': 'red',
    },
  },
  {
    selector: '.eh-preview, .eh-ghost-edge',
    style: {
      'background-color': 'red',
      'line-color': 'red',
      'target-arrow-color': 'red',
      'source-arrow-color': 'red',
    },
  },
  {
    selector: '.eh-ghost-edge.eh-preview-active',
    style: {
      opacity: 0,
    },
  },
];
