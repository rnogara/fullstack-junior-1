import { NextRequest, NextResponse } from 'next/server';
import { IError, IJob } from '../interfaces';
import { jobs } from '../jobs';

async function fetchJobs() {
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

export async function GET(req: NextRequest): Promise<NextResponse<IJob[] | IError>> {
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