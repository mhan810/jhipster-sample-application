import dayjs from 'dayjs/esm';

import { IJobHistory, NewJobHistory } from './job-history.model';

export const sampleWithRequiredData: IJobHistory = {
  id: 1897,
};

export const sampleWithPartialData: IJobHistory = {
  id: 27876,
  startDate: dayjs('2024-05-27T13:07'),
  language: 'FRENCH',
};

export const sampleWithFullData: IJobHistory = {
  id: 18386,
  startDate: dayjs('2024-05-27T14:16'),
  endDate: dayjs('2024-05-27T01:54'),
  language: 'ENGLISH',
};

export const sampleWithNewData: NewJobHistory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
