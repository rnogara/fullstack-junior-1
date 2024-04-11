export interface IJob {
  id: number;
  job: string;
  level: 'Trainee' | 'Junior' | '' | 'Senior' | 'Master';
  status: 'open' | 'closed';
}

export interface IError {
  error: string;
}

export interface IReturn {
  message: string;
}

export interface ISubmitForm {
  name: string,
  age: number,
  phone: string,
  state:string,
  city: string
}