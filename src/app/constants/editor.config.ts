export const EDITOR_CONFIG = {
    toolbar: [
      { name: 'document', items: ['Print'] },
      { name: 'clipboard', items: ['Undo', 'Redo'] },
      { name: 'styles', items: ['Styles', 'Format'] },
      {
        name: 'basicstyles',
        items: ['Bold', 'Italic', 'Strike', '-', 'RemoveFormat'],
      },
      {
        name: 'paragraph',
        items: [
          'NumberedList',
          'BulletedList',
          '-',
          'Outdent',
          'Indent',
          '-',
          'Blockquote',
        ],
      },
      { name: 'links', items: ['Link', 'Unlink'] },
      { name: 'insert', items: ['Image', 'Table', 'HorizontalRule'] },
      { name: 'tools', items: ['Maximize'] },
      { name: 'editing', items: ['Scayt'] },
      { name: 'mode', items: ['Source'] },
    ],
  };