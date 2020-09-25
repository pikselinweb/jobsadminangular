import { JOB } from '../global';

export interface JOBSTATE {
  loading: boolean;
  error?: Error;
  pageNumber: number;
  jobs: JOB[];
}
