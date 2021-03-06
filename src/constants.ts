export const ANDROID = Object.freeze({
  ACCEPT_HANDOVER: 'android.permission.ACCEPT_HANDOVER' as const,
  ACCESS_BACKGROUND_LOCATION: 'android.permission.ACCESS_BACKGROUND_LOCATION' as const,
  ACCESS_COARSE_LOCATION: 'android.permission.ACCESS_COARSE_LOCATION' as const,
  ACCESS_FINE_LOCATION: 'android.permission.ACCESS_FINE_LOCATION' as const,
  ACTIVITY_RECOGNITION: 'android.permission.ACTIVITY_RECOGNITION' as const,
  ADD_VOICEMAIL: 'com.android.voicemail.permission.ADD_VOICEMAIL' as const,
  ANSWER_PHONE_CALLS: 'android.permission.ANSWER_PHONE_CALLS' as const,
  BODY_SENSORS: 'android.permission.BODY_SENSORS' as const,
  CALL_PHONE: 'android.permission.CALL_PHONE' as const,
  CAMERA: 'android.permission.CAMERA' as const,
  GET_ACCOUNTS: 'android.permission.GET_ACCOUNTS' as const,
  PROCESS_OUTGOING_CALLS: 'android.permission.PROCESS_OUTGOING_CALLS' as const,
  READ_CALENDAR: 'android.permission.READ_CALENDAR' as const,
  READ_CALL_LOG: 'android.permission.READ_CALL_LOG' as const,
  READ_CONTACTS: 'android.permission.READ_CONTACTS' as const,
  READ_EXTERNAL_STORAGE: 'android.permission.READ_EXTERNAL_STORAGE' as const,
  READ_PHONE_NUMBERS: 'android.permission.READ_PHONE_NUMBERS' as const,
  READ_PHONE_STATE: 'android.permission.READ_PHONE_STATE' as const,
  READ_SMS: 'android.permission.READ_SMS' as const,
  RECEIVE_MMS: 'android.permission.RECEIVE_MMS' as const,
  RECEIVE_SMS: 'android.permission.RECEIVE_SMS' as const,
  RECEIVE_WAP_PUSH: 'android.permission.RECEIVE_WAP_PUSH' as const,
  RECORD_AUDIO: 'android.permission.RECORD_AUDIO' as const,
  SEND_SMS: 'android.permission.SEND_SMS' as const,
  USE_SIP: 'android.permission.USE_SIP' as const,
  WRITE_CALENDAR: 'android.permission.WRITE_CALENDAR' as const,
  WRITE_CALL_LOG: 'android.permission.WRITE_CALL_LOG' as const,
  WRITE_CONTACTS: 'android.permission.WRITE_CONTACTS' as const,
  WRITE_EXTERNAL_STORAGE: 'android.permission.WRITE_EXTERNAL_STORAGE' as const,
});

export const IOS = Object.freeze({
  BLUETOOTH_PERIPHERAL: 'ios.permission.BLUETOOTH_PERIPHERAL' as const,
  CAMERA: 'ios.permission.CAMERA' as const,
  CONTACTS: 'ios.permission.CONTACTS' as const,
  LOCATION_WHEN_IN_USE: 'ios.permission.LOCATION_WHEN_IN_USE' as const,
  MICROPHONE: 'ios.permission.MICROPHONE' as const,
  PHOTO_LIBRARY: 'ios.permission.PHOTO_LIBRARY' as const,
});

export const PERMISSIONS = Object.freeze({ANDROID, IOS});

export const RESULTS = Object.freeze({
  UNAVAILABLE: 'unavailable' as const,
  DENIED: 'denied' as const,
  BLOCKED: 'blocked' as const,
  GRANTED: 'granted' as const,
});
