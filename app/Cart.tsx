import {cookies} from 'next/headers'

export default async function Cart() {
    const cookieStore = cookies()
    const session = cookieStore.get('session')

    const data: string = await new Promise(resolve => {
        setTimeout(() => {
            const currentTime = new Date().toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
            });
            resolve("AAABBBCCC> " + currentTime);
        }, 3_000);
    });

    // Now 'data' contains the response from the Promise
    // We can use it in the returned JSX
    return <div>{data}</div>;
}
