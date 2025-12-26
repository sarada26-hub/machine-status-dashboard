export const LABELS = {
  // App Title
  APP_TITLE: 'ניהול מכונות',
  
  // Buttons
  ADD_MACHINE: 'הוסף מכונה חדשה',
  EDIT: 'ערוך',
  DELETE: 'מחק',
  SAVE: 'הוסף',
  UPDATE: 'עדכן',
  CANCEL: 'ביטול',
  UNDO_DELETE: 'בטל מחיקה',
  
  // Form Labels
  MACHINE_NAME: 'שם המכונה',
  STATUS: 'סטטוס',
  REQUIRED_FIELD: '*',
  
  // Form Titles
  ADD_MACHINE_TITLE: 'הוספת מכונה חדשה',
  EDIT_MACHINE_TITLE: 'עריכת מכונה',
  
  // Placeholders
  MACHINE_NAME_PLACEHOLDER: 'הכנס שם מכונה (לפחות 2 תווים)',
  SEARCH_PLACEHOLDER: 'חיפוש לפי שם מכונה...',
  
  // Status Options
  STATUS_RUNNING: 'פעיל',
  STATUS_IDLE: 'ממתין',
  STATUS_OFFLINE: 'לא פעיל',
  ALL_STATUSES: 'כל הסטטוסים',
  
  // Messages
  MACHINE_DELETED: 'מכונה "{name}" נמחקה',
  MACHINES_LIST: 'רשימת מכונות ({count})',
  MACHINES_COUNT: '{count} מכונות',
  LAST_UPDATED: 'עודכן: {date}',
  
  // Empty State
  NO_MACHINES_TITLE: 'אין מכונות להצגה',
  NO_MACHINES_DESCRIPTION: 'נסה לשנות את הפילטרים או להוסיף מכונה חדשה',
  
  // Validation
  NAME_REQUIRED: 'שם המכונה נדרש',
  NAME_MIN_LENGTH: 'שם המכונה חייב להכיל לפחות 2 תווים',
  STATUS_REQUIRED: 'סטטוס נדרש',
} as const;