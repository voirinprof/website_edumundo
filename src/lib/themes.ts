export const themes = [
  { id: 'nature', label: 'Nature', emoji: '🌿', color: '#d9f5d9' },
  { id: 'arts', label: 'Arts et bricolages', emoji: '🎨', color: '#ffe0d7' },
  { id: 'science', label: 'Sciences', emoji: '🔬', color: '#dceeff' },
  { id: 'movement', label: 'Motricité', emoji: '⚽', color: '#fff0bc' },
  { id: 'stories', label: 'Histoires', emoji: '📚', color: '#efe1ff' },
  { id: 'emotions', label: 'Émotions', emoji: '💛', color: '#ffe3ed' },
  { id: 'logic', label: 'Logique', emoji: '🧩', color: '#d5f4f1' },
  { id: 'seasons', label: 'Fêtes et saisons', emoji: '🍂', color: '#ffebd3' }
];
export const themeLabel = (id: string) => themes.find(theme => theme.id === id)?.label || id;
export const activityUrl = (id: string, base: string) => `${base.replace(/\/$/, '')}/activities/${id}/`;
