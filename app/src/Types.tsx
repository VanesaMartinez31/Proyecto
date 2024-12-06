export interface IGrade {
    id_metric: string;
    grade: number;
    id_judge: string;
}
export interface IGrades {
    id_group: string;
    round: number;
    id_event: string;
    grades: IGrade[]
}

export interface ITeams{
    name: string,
    members: string[],
    leader: string,
    round: number,
    grades: IGrades[]
}

export interface IMetric {
    description: string;
    max_points: number;
}


export interface IEvent {
    name: string;
    max_round: number;
    metrics: IMetric[];
}

export interface IUser {
    name: string;
    email: string;
    password: string;
    curp: string;
    rol: string;
}