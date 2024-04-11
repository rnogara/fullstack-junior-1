export interface IJob {
  id: number;
  job: string;
  level: 'Trainee' | 'Junior' | '' | 'Senior' | 'Master';
  status: 'open' | 'closed';
}