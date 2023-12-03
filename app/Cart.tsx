import {cookies} from 'next/headers'

export default async function Cart() {
    const cookieStore = cookies()
    const session = cookieStore.get('session')

    // Let's create an artificial delay
    await new Promise(resolve => setTimeout(resolve, 10_000));

    return <div>AAAAAAAAAAAAAAAA</div>
}
