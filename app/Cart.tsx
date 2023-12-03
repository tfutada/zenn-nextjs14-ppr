import { cookies } from 'next/headers'

export default async function Cart() {
    const cookieStore = cookies()
    const session = cookieStore.get('session')
    return <div>Shopping Cart for session</div>
}
