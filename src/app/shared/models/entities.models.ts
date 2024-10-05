import { FieldValue } from 'firebase/firestore';

//----------Raw Entity----------
interface EntityMetaData {
  createdAt: FieldValue;
  updatedAt: FieldValue;
}

export interface Entity {
  metadata: EntityMetaData;
}

//--------Run Log --------
interface RunInformation {
  distance: number;
  runType: 'base' | 'long' | 'interval' | 'tempo';
  dayPeriod: 'early morning' | 'morning' | 'afternoon' | 'evening';
  pace: number;
  runDuration: number;
  intensity: number;
  cadance: number;
}

export interface RunLogEntity extends Entity {
  information: RunInformation;
}
