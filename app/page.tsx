import {Suspense} from "react";
import Cart from "@/app/Cart";

// export const revalidate = 60;

export default function Page() {
    const currentTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    });

    console.log('rendering page.tsx' + currentTime);

    return (
        <main>
            <h1>Products</h1>
            <Suspense fallback={<div>loading...</div>}>
                <Cart/>
            </Suspense>
        </main>
    );
}
