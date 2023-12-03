import {Suspense} from "react";
import Cart from "@/app/Cart";

export default function Page() {
    return (
        <main>
            <h1>Products</h1>
            <Suspense fallback={<div>loading...</div>}>
                <Cart/>
            </Suspense>
        </main>
    );
}
