import { NextRequest, NextResponse } from 'next/server';
import { IError, IJob } from '../interfaces';
import { jobs } from '../jobs';

async function fetchJobs(): Promise<Response> {
    try {
        return new Response(JSON.stringify(jobs), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

function authChecker(header: string | null): boolean {
    if (!header) return false;
    const token = header.split(' ')[1];
    return token === process.env.API_SECRET;
}

export async function GET(req: NextRequest): Promise<NextResponse<IJob[] | IError>> {
    const header = req.headers.get('Authorization');
    if (!authChecker(header)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const response = await fetchJobs();
    const jobs = await response.json();
    const path = req.nextUrl.pathname;
    const id = Number(path.split('/').pop());
    if (!jobs.some((job: IJob) => job.id === id)) {
        return NextResponse.json({ error: 'Job not found' }, { status: 404 });
    }
    const filteredJobs = jobs.filter((job: IJob) => job.id === id);
    return NextResponse.json(filteredJobs);
}