import {Suspense} from "react";
import Cart from "@/app/Cart";

// export const revalidate = 60;

export default function Page() {

    console.log('rendering page.tsx');

    return (
        <main>
            <h1>Products</h1>
            <Suspense fallback={<div>loading...</div>}>
                <Cart/>
            </Suspense>
        </main>
    );
}
