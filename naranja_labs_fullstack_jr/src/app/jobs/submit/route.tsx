import { NextRequest, NextResponse } from 'next/server';
import { IError, IReturn, ISubmitForm } from '../interfaces';

function authChecker(header: string | null): boolean {
    if (!header) return false;
    const token = header.split(' ')[1];
    return token === process.env.API_SECRET;
}

export async function POST(req: NextRequest): Promise<NextResponse<IReturn | IError>> {
    const header = req.headers.get('Authorization');
    if (!authChecker(header)) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const data: ISubmitForm = await req.json() || null;
    if (data === null || data === undefined || Object.keys(data).length === 0) {
        return NextResponse.json({ error: 'No Content' }, { status: 204 });
    }
    if (!data.age || !data.city || !data.name || !data.phone || !data.state) {
        return NextResponse.json({ error: 'Bad Request' }, { status: 400 });
    }
    const message = 'Thank you for your application, ' + data.name;
    return NextResponse.json({ message: message });
}